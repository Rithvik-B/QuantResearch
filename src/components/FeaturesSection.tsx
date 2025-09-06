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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Bloomberg Terminal Intelligence.
            <br />
            <span className="text-blue-600">WhatsApp Simplicity.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{feature.description}</p>
              
              {/* Wireframe Image Placeholder */}
              <div className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-2 h-32 flex items-center justify-center group-hover:border-blue-300 transition-colors duration-300">
                <img src={feature.img} alt={feature.title + ' wireframe'} className="h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;