import React from 'react';
import { MessageCircle, FileText, BarChart3, Bot } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: "Chat with Any Stock",
      description: "Ask questions, get intelligent answers instantly",
  img: "/img/chat-interface-wireframe.png"
    },
    {
      icon: <FileText className="w-8 h-8 text-emerald-500" />,
      title: "Auto-Report Analysis", 
      description: "127-page reports → 2-minute insights",
  img: "/img/report-summary-dashboard-wireframe.png"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: "Interactive Financial Charts",
      description: "See trends and patterns, not just numbers",
  img: "/img/dynamic-charts-wireframe.png"
    },
    {
      icon: <Bot className="w-8 h-8 text-orange-500" />,
      title: "AI Research Agent",
      description: "Your personal equity research analyst",
  img: "/img/ai-analysis-dashboard-wireframe.png"
    }
  ];

  return (
  <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">
  <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Bloomberg Terminal Intelligence.
            <br />
            <span className="text-blue-600">WhatsApp Simplicity.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 rounded-3xl p-10 border border-slate-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group flex flex-col items-center text-center">
              {/* Image on top, no border */}
              <div className="mb-7 w-full flex items-center justify-center">
                <img src={feature.img} alt={feature.title + ' wireframe'} className="h-72 w-[95%] max-w-[520px] object-contain mx-auto rounded-xl shadow-sm" />
              </div>
              {/* Icon beside title */}
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="scale-110">{feature.icon}</span>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{feature.title}</h3>
              </div>
              <p className="text-slate-600 mt-2 mb-2 leading-relaxed text-lg font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;