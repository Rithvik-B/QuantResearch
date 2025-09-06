import React from 'react';
import { Search, MessageSquare, BarChart3 } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: "Pick Any Stock",
      description: "Search for any publicly traded company",
  img: "/assets/search-interface-wireframe.png"
    },
    {
      step: 2,
      icon: <MessageSquare className="w-8 h-8 text-emerald-500" />,
      title: "Ask Anything",
      description: "Chat with AI about financials, strategy, risks",
  img: "/assets/stock-chat-interface-wireframe.png"
    },
    {
      step: 3,
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: "Get Insights",
      description: "Receive intelligent analysis and recommendations",
  img: "/assets/analysis-dashboard-wireframe.png"
    }
  ];

  return (
  <section className="py-20 bg-slate-50">
  <div className="max-w-7xl xl:max-w-[90vw] mx-auto px-2 md:px-8">
  <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Get Started in 3 Simple Steps
          </h2>
        </div>

  <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 xl:gap-28 w-full">
    {steps.map((step, index) => (
      <div key={index} className="bg-white rounded-3xl p-10 md:p-12 min-h-[420px] md:min-h-[520px] min-w-[320px] md:min-w-[370px] border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center relative">
        {/* Step badge above image, with extra gap */}
        <div className="flex flex-col items-center w-full mb-8">
          <span className="mb-4 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white z-10">{step.step}</span>
          <img src={step.img} alt={step.title + ' wireframe'} className="h-56 w-auto object-contain mx-auto rounded-xl shadow-sm" />
        </div>
        {/* Icon beside title */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="scale-110">{step.icon}</span>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{step.title}</h3>
        </div>
        <p className="text-slate-600 mt-2 mb-2 leading-relaxed text-lg font-medium">{step.description}</p>
      </div>
    ))}
  </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;