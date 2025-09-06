const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const CSV_PATH = path.join(process.cwd(), 'data.csv');

app.use(cors());
app.use(express.json());

// Append to CSV
app.post('/api/waitlist', (req, res) => {
  const { email, source, timestamp } = req.body;
  if (!email || !source || !timestamp) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const newLine = `\n${email},${source},${timestamp}`;
  fs.appendFile(CSV_PATH, newLine, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to write to CSV' });
    }
    return res.json({ success: true });
  });
});


// Serve CSV for GET (API endpoint)
app.get('/api/waitlist', (req, res) => {
  res.sendFile(CSV_PATH);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
