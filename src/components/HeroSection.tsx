import React from 'react';
import { MessageCircle, BarChart3, TrendingUp } from 'lucide-react';
import EmailCapture from './EmailCapture';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-64 h-32">
          <svg viewBox="0 0 200 100" className="w-full h-full text-slate-900">
            <path d="M10,80 Q50,20 90,40 T170,30" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M10,60 Q60,10 100,35 T180,25" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 w-64 h-32 transform rotate-180">
          <svg viewBox="0 0 200 100" className="w-full h-full text-slate-900">
            <path d="M10,80 Q50,20 90,40 T170,30" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M10,60 Q60,10 100,35 T180,25" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-16">
            <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-2xl font-bold text-slate-900">QuantResearch</span>
          </div>

          {/* Headlines */}
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
            Stop Reading 100-Page Reports.
            <br />
            <span className="text-blue-600">Start Making Informed Decisions.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-600 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            AI that reads, analyzes, and explains every stock for you—like having a research analyst in your pocket. 
            Built for smart long-term investors who value their time.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">Instant AI Chat</h3>
              <p className="text-slate-600 leading-relaxed">Get instant answers to any stock question through AI chat</p>
            </div>
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">Visual Insights</h3>
              <p className="text-slate-600 leading-relaxed">Transform complex quarterly reports into simple visual insights</p>
            </div>
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">All-in-One Platform</h3>
              <p className="text-slate-600 leading-relaxed">Track fundamentals, events, and management vision in one place</p>
            </div>
          </div>

          {/* Email Capture */}
          <div className="max-w-lg mx-auto">
            <EmailCapture 
              placeholder="your.email@example.com"
              buttonText="Join the Waitlist — Be First to Invest Smarter"
              source="hero"
              showCounter={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;