import { useState, useEffect } from 'react';
import { WaitlistEntry } from '../utils/csvHandler';

export const useWaitlist = () => {
  const [waitlistCount, setWaitlistCount] = useState(500); // Base count
  const [isLoading, setIsLoading] = useState(false);

  // Get waitlist count from backend
  const loadWaitlistCount = async () => {
    try {
      const response = await fetch('https://quantresearch-rvou.onrender.com/api/waitlist/count');
      if (response.ok) {
        const data = await response.json();
        setWaitlistCount(500 + (data.count || 0));
      }
    } catch (error) {
      console.log('Count API failed, using base count');
    }
  };

  const addToWaitlist = async (email: string, source: string): Promise<{ success: boolean; position?: number; error?: string }> => {
    setIsLoading(true);
    try {
      // Add new entry
      const newEntry: WaitlistEntry = {
        email,
        source,
        timestamp: new Date().toISOString()
      };

      // Send to backend API to write to CSV
      const apiRes = await fetch('https://quantresearch-rvou.onrender.com/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      });
      const apiData = await apiRes.json();
      if (!apiRes.ok) {
        setIsLoading(false);
        return { success: false, error: apiData.error || 'Server error. Try again.' };
      }
      // Update local state for UI
      await loadWaitlistCount();
      setIsLoading(false);
      return { success: true, position: apiData.position };
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: 'Failed to join waitlist' };
    }
  };

  // Optionally: function to get CSV (if needed)
  const getWaitlistCSV = async (): Promise<string> => {
    const response = await fetch('https://quantresearch-rvou.onrender.com/api/waitlist/csv');
    if (response.ok) {
      return await response.text();
    }
    return '';
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
    getWaitlistCSV: getWaitlistCSV,
    isLoading
  };
};