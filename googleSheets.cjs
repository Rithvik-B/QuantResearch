
const { google } = require('googleapis');
require('dotenv').config();

const sheets = google.sheets('v4');
const creds = {
  type: process.env.GOOGLE_TYPE,
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: process.env.GOOGLE_AUTH_URI,
  token_uri: process.env.GOOGLE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL
};

const auth = new google.auth.GoogleAuth({
  credentials: creds,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID; // Set this in your .env
const SHEET_RANGE = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:C';

async function addToWaitlistSheet(email, source, timestamp) {
  const client = await auth.getClient();
  // Normalize input email
  const inputEmail = (email || '').trim().toLowerCase();
  // Fetch all emails to check for duplicates
  const resp = await sheets.spreadsheets.values.get({
    auth: client,
    spreadsheetId: SPREADSHEET_ID,
    range: SHEET_RANGE,
  });
  const rows = resp.data.values || [];
  const emails = rows.slice(1).map(row => (row[0] || '').trim().toLowerCase()); // skip header, normalize
  if (emails.includes(inputEmail)) {
    return { success: false, error: 'Email already registered' };
  }
  await sheets.spreadsheets.values.append({
    auth: client,
    spreadsheetId: SPREADSHEET_ID,
    range: SHEET_RANGE,
    valueInputOption: 'RAW',
    requestBody: {
      values: [[inputEmail, source, timestamp]],
    },
  });
  return { success: true, position: emails.length + 1 };
}

async function getWaitlistCountSheet() {
  const client = await auth.getClient();
  const resp = await sheets.spreadsheets.values.get({
    auth: client,
    spreadsheetId: SPREADSHEET_ID,
    range: SHEET_RANGE,
  });
  // Subtract 1 for header row
  return Math.max(0, (resp.data.values ? resp.data.values.length - 1 : 0));
}

module.exports = { addToWaitlistSheet, getWaitlistCountSheet };
