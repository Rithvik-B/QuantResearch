import { useState, useEffect } from 'react';
import { WaitlistEntry, parseCSV, addToCSV, getWaitlistCount, getUserPosition } from '../utils/csvHandler';

export const useWaitlist = () => {
  const [waitlistCount, setWaitlistCount] = useState(500); // Base count
  const [isLoading, setIsLoading] = useState(false);

  const loadWaitlistCount = async () => {
    try {
      const response = await fetch('/data.csv');
      if (response.ok) {
        const csvContent = await response.text();
        const count = getWaitlistCount(csvContent);
        setWaitlistCount(500 + count); // Base + actual signups
      }
    } catch (error) {
      console.log('CSV not found, using base count');
    }
  };

  const addToWaitlist = async (email: string, source: string): Promise<{ success: boolean; position?: number; error?: string }> => {
    setIsLoading(true);
    try {
      // Read current CSV
      let csvContent = 'email,source,timestamp\n';
      try {
        const response = await fetch('/data.csv');
        if (response.ok) {
          csvContent = await response.text();
        }
      } catch (error) {
        // File doesn't exist, use header only
      }

      // Check if email already exists
      const entries = parseCSV(csvContent);
      const existingEntry = entries.find(entry => entry.email === email);
      if (existingEntry) {
        setIsLoading(false);
        return { success: false, error: 'Email already registered' };
      }

      // Add new entry
      const newEntry: WaitlistEntry = {
        email,
        source,
        timestamp: new Date().toISOString()
      };

      // Send to backend API to write to CSV
      const apiRes = await fetch('http://localhost:3001/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      });
      if (!apiRes.ok) {
        setIsLoading(false);
        return { success: false, error: 'Server error. Try again.' };
      }

      // Update local state for UI
      const updatedCSV = addToCSV(csvContent, newEntry);
      const newCount = getWaitlistCount(updatedCSV);
      const position = getUserPosition(updatedCSV, email);
      setWaitlistCount(500 + newCount);
      setIsLoading(false);
      return { success: true, position };
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: 'Failed to join waitlist' };
    }
  };

  useEffect(() => {
    loadWaitlistCount();
    
    // Update count periodically to simulate growth
    const interval = setInterval(() => {
      setWaitlistCount(prev => prev + Math.floor(Math.random() * 2));
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return {
    waitlistCount,
    addToWaitlist,
    isLoading
  };
};