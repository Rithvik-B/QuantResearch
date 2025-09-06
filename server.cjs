const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const CSV_PATH = path.join(process.cwd(), 'data.csv');

app.use(cors());
app.use(express.json());


// Helper to parse CSV
function parseCSV(csvContent) {
  const lines = csvContent.trim().split('\n');
  if (lines.length <= 1) return [];
  return lines.slice(1).map(line => {
    const [email, source, timestamp] = line.split(',');
    return { email, source, timestamp };
  }).filter(entry => entry.email && entry.source && entry.timestamp);
}

// POST: Add to waitlist
app.post('/api/waitlist', (req, res) => {
  const { email, source, timestamp } = req.body;
  if (!email || !source || !timestamp) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }
  let csvContent = 'email,source,timestamp\n';
  if (fs.existsSync(CSV_PATH)) {
    csvContent = fs.readFileSync(CSV_PATH, 'utf8');
  }
  const entries = parseCSV(csvContent);
  const existingEntry = entries.find(entry => entry.email === email);
  if (existingEntry) {
    return res.status(409).json({ success: false, error: 'Email already registered' });
  } else {
    const newLine = `\n${email},${source},${timestamp}`;
    fs.appendFile(CSV_PATH, newLine, (err) => {
      if (err) {
        return res.status(500).json({ success: false, error: 'Failed to write to CSV' });
      }
      // Return position (1-based)
      const position = entries.length + 1;
      return res.json({ success: true, position });
    });
  }
});



// GET: Waitlist count (JSON)
app.get('/api/waitlist/count', (req, res) => {
  let csvContent = 'email,source,timestamp\n';
  if (fs.existsSync(CSV_PATH)) {
    csvContent = fs.readFileSync(CSV_PATH, 'utf8');
  }
  const entries = parseCSV(csvContent);
  res.json({ count: entries.length });
});

// GET: Waitlist CSV (raw file)
app.get('/api/waitlist/csv', (req, res) => {
  res.sendFile(CSV_PATH);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
