import React from 'react';
import { Eye, Target, TrendingUp } from 'lucide-react';

const OutcomesSection = () => {
  const outcomes = [
    {
      icon: <Eye className="w-12 h-12 text-emerald-500" />,
      title: "Crystal Clear Insights",
      description: "Ask any stock question and get instant, intelligent answers. 'Why did margins decline?' gets explained in plain English with visual proof."
    },
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "Professional-Grade Analysis", 
      description: "Every quarterly report automatically analyzed, compared, and summarized. See 5-year trends, peer comparisons, and management insights—all in minutes."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
      title: "Smarter Decisions",
      description: "Stop second-guessing yourself. Make investment decisions backed by AI that's read every report, analyzed every metric, and tracked every management statement."
    }
  ];

  return (
  <section className="pt-20 pb-4 bg-gradient-to-b from-slate-50 via-white to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-8">
  <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight drop-shadow-sm">
            Imagine Investing with Complete Confidence
          </h2>
          <p className="text-lg lg:text-xl text-slate-500 max-w-6xl mx-auto">
            What if every stock could explain itself to you? Now it can—with AI-powered research, visual insights, and answers in plain English.
          </p>
        </div>

  <div className="flex flex-col lg:flex-row items-stretch gap-8 mb-7">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex-1 bg-white/90 p-10 rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-6 scale-110 group-hover:scale-125 transition-transform duration-300">{outcome.icon}</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">{outcome.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg font-normal max-w-xs mx-auto">{outcome.description}</p>
            </div>
          ))}
        </div>

  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-5 lg:px-8 lg:py-7 rounded-2xl text-center shadow-xl mt-6 mb-7">
    <p className="text-base lg:text-xl text-blue-100 leading-relaxed mb-1 font-medium">
      QuantResearch makes this possible.
    </p>
    <p className="text-lg lg:text-2xl text-white font-extrabold">
      Invest with clarity, not confusion.
    </p>
  </div>
      </div>
    </section>
  );
};

export default OutcomesSection;