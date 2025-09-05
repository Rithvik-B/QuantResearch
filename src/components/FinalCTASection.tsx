import React from 'react';
import { Users, Calendar, Gift } from 'lucide-react';
import EmailCapture from './EmailCapture';
import { useWaitlist } from '../hooks/useWaitlist';

const FinalCTASection = () => {
  const { waitlistCount } = useWaitlist();

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
          Don't Let Another Earnings Season Pass You By
        </h2>
        
        <p className="text-xl lg:text-2xl text-slate-300 mb-16 font-medium">
          Early access. Limited spots. Professional insights delivered simply.
        </p>

        {/* Urgency Elements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300">
            <Users className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <p className="text-3xl font-bold text-white mb-2">{waitlistCount.toLocaleString()}+</p>
            <p className="text-slate-400">On Waitlist</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300">
            <Calendar className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
            <p className="text-3xl font-bold text-white mb-2">Q1 2025</p>
            <p className="text-slate-400">Launch Expected</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300">
            <Gift className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <p className="text-3xl font-bold text-white mb-2">Lifetime</p>
            <p className="text-slate-400">First 1000 Discount</p>
          </div>
        </div>

        {/* Final Email Capture */}
        <div className="max-w-lg mx-auto">
          <EmailCapture 
            placeholder="your.email@example.com"
            buttonText="Secure My Early Access"
            source="final-cta"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;