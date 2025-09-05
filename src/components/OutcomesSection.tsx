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
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Imagine Investing with Complete Confidence
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-8 group-hover:scale-110 transition-transform duration-300">
                {outcome.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{outcome.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{outcome.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-12 lg:p-16 rounded-2xl text-center">
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-4">
            What if every stock could explain itself to you? 
          </p>
          <p className="text-xl lg:text-2xl text-white font-semibold">
            QuantResearch makes this possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;