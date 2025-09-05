import React, { useState } from 'react';
import { ArrowRight, Check, AlertCircle, Users } from 'lucide-react';
import { useWaitlist } from '../hooks/useWaitlist';

interface EmailCaptureProps {
  placeholder?: string;
  buttonText?: string;
  source: string;
  compact?: boolean;
  showCounter?: boolean;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ 
  placeholder = "your.email@example.com", 
  buttonText = "Join the Waitlist",
  source,
  compact = false,
  showCounter = false
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [userPosition, setUserPosition] = useState<number | null>(null);
  
  const { waitlistCount, addToWaitlist, isLoading } = useWaitlist();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    const result = await addToWaitlist(email, source);
    
    if (result.success) {
      setStatus('success');
      setUserPosition(result.position || waitlistCount + 1);
      setMessage(`Welcome to the waitlist! 🎉`);
      setEmail('');
    } else {
      setStatus('error');
      setMessage(result.error || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`${compact ? 'p-4' : 'p-6'} bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl`}>
        <div className="flex items-center justify-center mb-3">
          <Check className="w-6 h-6 text-green-600 mr-2" />
          <span className="text-green-800 font-semibold">{message}</span>
        </div>
        {userPosition && (
          <div className="text-center">
            <p className="text-green-700 font-medium">
              You're #{userPosition.toLocaleString()} on the waitlist!
            </p>
            <p className="text-green-600 text-sm mt-1">
              We'll notify you when early access opens
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {showCounter && (
        <div className="flex items-center justify-center text-gray-600 mb-4">
          <Users className="w-5 h-5 mr-2" />
          <span className="font-medium">{waitlistCount.toLocaleString()}+ investors waiting</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`flex flex-col ${compact ? 'sm:flex-row' : 'lg:flex-row'} gap-3`}>
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus('idle');
                setMessage('');
              }}
              placeholder={placeholder}
              className={`w-full ${compact ? 'px-4 py-3' : 'px-6 py-4'} text-gray-900 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 font-medium ${
                status === 'error' ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : ''
              }`}
              disabled={status === 'loading' || isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading' || isLoading}
            className={`${compact ? 'px-6 py-3' : 'px-8 py-4'} bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
          >
            {status === 'loading' || isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span className="whitespace-nowrap">{buttonText}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </>
            )}
          </button>
        </div>
        
        {status === 'error' && (
          <div className="flex items-center text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
            {message}
          </div>
        )}
        
        {!compact && (
          <p className="text-sm text-gray-500 text-center">
            No spam, just launch updates • Unsubscribe anytime
          </p>
        )}
      </form>
    </div>
  );
};

export default EmailCapture;