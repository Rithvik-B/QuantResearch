import React from 'react';
import { Clock, AlertTriangle, Zap } from 'lucide-react';

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: <AlertTriangle className="w-12 h-12 text-red-500" />,
      title: "Information Overload",
      description: "You spend hours drowning in 127-page quarterly reports filled with financial jargon, but still can't figure out if it's a good investment."
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-500" />,
      title: "Analysis Paralysis", 
      description: "You have all the data but no clear insights. Is revenue growth sustainable? What did management really mean in that earnings call?"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Time Poverty",
      description: "Every earnings season means sacrificing your weekends to read reports, while professional analysts get paid summaries you'll never see."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Another Weekend Wasted Reading Reports?
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-slate-50 p-10 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <div className="mb-8">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-12 lg:p-16 rounded-2xl text-center">
          <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-4">
            You've been told to "do your research" but nobody taught you how to analyze like a pro. 
          </p>
          <p className="text-xl lg:text-2xl text-white font-semibold">
            The tools exist—they're just locked behind $24,000/year Bloomberg terminals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;