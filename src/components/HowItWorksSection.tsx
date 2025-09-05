import React from 'react';
import { Search, MessageSquare, BarChart3, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: "Pick Any Stock",
      description: "Search for any publicly traded company",
      wireframe: "Search interface wireframe showing stock lookup"
    },
    {
      step: 2,
      icon: <MessageSquare className="w-8 h-8 text-emerald-500" />,
      title: "Ask Anything",
      description: "Chat with AI about financials, strategy, risks",
      wireframe: "Chat interface wireframe with stock questions"
    },
    {
      step: 3,
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: "Get Insights",
      description: "Receive intelligent analysis and recommendations",
      wireframe: "Analysis dashboard wireframe with insights"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Get Started in 3 Simple Steps
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-sm relative">
              {/* Step Number */}
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-8 shadow-lg">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="mb-6">
                {step.icon}
              </div>
              
              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{step.description}</p>
              
              {/* Wireframe */}
              <div className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-6 h-24 w-full flex items-center justify-center">
                <span className="text-xs text-slate-500 text-center leading-tight font-medium">
                  [{step.wireframe}]
                </span>
              </div>
              
              {/* Arrow */}
              {index < steps.length - 1 && (
                <ArrowRight className="w-8 h-8 text-slate-400 mt-8 lg:mt-0 lg:absolute lg:left-full lg:top-8 lg:translate-x-8 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;