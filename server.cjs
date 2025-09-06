const express = require('express');
const { addToWaitlistSheet, getWaitlistCountSheet } = require('./googleSheets.cjs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());



// POST: Add to waitlist (Google Sheets)
app.post('/api/waitlist', async (req, res) => {
  const { email, source, timestamp } = req.body;
  if (!email || !source || !timestamp) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }
  try {
    // Check for duplicate (by reading all emails)
    const count = await getWaitlistCountSheet();
    // NOTE: For true duplicate check, you would need to fetch all rows and check emails. For simplicity, skipping here.
    await addToWaitlistSheet(email, source, timestamp);
    return res.json({ success: true, position: count + 1 });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Failed to write to Google Sheet', details: err.message });
  }
});



// GET: Waitlist count (JSON, Google Sheets)
app.get('/api/waitlist/count', async (req, res) => {
  try {
    const count = await getWaitlistCountSheet();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch count from Google Sheet', details: err.message });
  }
});

// GET: Waitlist CSV (not supported with Google Sheets, returns 501)
app.get('/api/waitlist/csv', (req, res) => {
  res.status(501).send('Not supported with Google Sheets backend.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
