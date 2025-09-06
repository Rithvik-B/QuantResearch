import React from 'react';
import { Search, MessageSquare, BarChart3, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: "Pick Any Stock",
      description: "Search for any publicly traded company",
  img: "/public/img/search-interface-wireframe.png"
    },
    {
      step: 2,
      icon: <MessageSquare className="w-8 h-8 text-emerald-500" />,
      title: "Ask Anything",
      description: "Chat with AI about financials, strategy, risks",
  img: "/public/img/stock-chat-interface-wireframe.png"
    },
    {
      step: 3,
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: "Get Insights",
      description: "Receive intelligent analysis and recommendations",
  img: "/public/img/analysis-dashboard-wireframe.png"
    }
  ];

  return (
  <section className="py-20 bg-slate-50">
  <div className="max-w-6xl mx-auto px-4">
  <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Get Started in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center relative">
              {/* Large image on top with step badge overlay */}
              <div className="relative w-full flex items-center justify-center mb-7">
                <img src={step.img} alt={step.title + ' wireframe'} className="h-56 w-auto object-contain mx-auto rounded-xl shadow-sm" />
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-4 border-white">{step.step}</span>
              </div>
              {/* Icon beside title */}
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="scale-110">{step.icon}</span>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{step.title}</h3>
              </div>
              <p className="text-slate-600 mt-2 mb-2 leading-relaxed text-lg font-medium">{step.description}</p>
              {/* Arrow for desktop only, between cards */}
              {index < steps.length - 1 && (
                <ArrowRight className="w-8 h-8 text-blue-300 absolute right-[-36px] top-1/2 -translate-y-1/2 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;