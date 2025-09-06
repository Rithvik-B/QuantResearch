const { google } = require('googleapis');
const creds = require('./google-credentials.json');

const sheets = google.sheets('v4');
const auth = new google.auth.GoogleAuth({
  credentials: creds,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SPREADSHEET_ID = '1lPB6azLevPi3roXGt1OAvTe-R2X11X7lGEqCu1YtYuQ'; // <-- Replace with your actual Google Sheet ID
const SHEET_RANGE = 'Sheet1!A:C'; // Adjust if your sheet/tab is named differently

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
