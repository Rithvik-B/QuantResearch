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
  <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-8">
  <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight drop-shadow-sm">
            Another Weekend Wasted Reading Reports?
          </h2>
          <p className="text-lg lg:text-xl text-slate-500 max-w-6xl mx-auto">
            The real pain of DIY investing isn't just the time—it's the confusion, the jargon, and the endless second-guessing.
          </p>
        </div>

  <div className="flex flex-col lg:flex-row items-stretch gap-8 mb-14">
          {painPoints.map((point, index) => (
            <div key={index} className="flex-1 bg-white/90 p-10 rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl hover:border-red-200 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-6 scale-110">{point.icon}</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg font-normal max-w-xs mx-auto">{point.description}</p>
            </div>
          ))}
        </div>

  <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-10 lg:p-14 rounded-3xl text-center shadow-xl mt-10">
          <p className="text-lg lg:text-2xl text-slate-200 leading-relaxed mb-3 font-medium">
            You've been told to <span className="text-white font-bold">"do your research"</span> but nobody taught you how to analyze like a pro.
          </p>
          <p className="text-xl lg:text-2xl text-white font-extrabold">
            The tools exist—they're just locked behind <span className="text-blue-400">$24,000/year Bloomberg terminals</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;