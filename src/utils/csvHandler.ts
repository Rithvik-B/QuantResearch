export interface WaitlistEntry {
  email: string;
  source: string;
  timestamp: string;
}

export const parseCSV = (csvContent: string): WaitlistEntry[] => {
  const lines = csvContent.trim().split('\n');
  if (lines.length <= 1) return []; // Only header or empty
  
  return lines.slice(1).map(line => {
    const [email, source, timestamp] = line.split(',');
    return { email, source, timestamp };
  }).filter(entry => entry.email && entry.source && entry.timestamp);
};

export const addToCSV = (csvContent: string, entry: WaitlistEntry): string => {
  const newLine = `${entry.email},${entry.source},${entry.timestamp}`;
  return csvContent.trim() + '\n' + newLine;
};

export const getWaitlistCount = (csvContent: string): number => {
  return parseCSV(csvContent).length;
};

export const getUserPosition = (csvContent: string, email: string): number => {
  const entries = parseCSV(csvContent);
  const position = entries.findIndex(entry => entry.email === email);
  return position >= 0 ? position + 1 : entries.length;
};