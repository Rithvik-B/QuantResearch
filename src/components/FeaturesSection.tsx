import React from 'react';
import { MessageCircle, FileText, BarChart3, Bot } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: "Chat with Any Stock",
      description: "Ask questions, get intelligent answers instantly",
      img: "/assets/chat-interface-wireframe.png"
    },
    {
      icon: <FileText className="w-8 h-8 text-emerald-500" />,
      title: "Auto-Report Analysis", 
      description: "127-page reports → 2-minute insights",
      img: "/assets/report-summary-dashboard-wireframe.png"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: "Interactive Financial Charts",
      description: "See trends and patterns, not just numbers",
      img: "/assets/dynamic-charts-wireframe.png"
    },
    {
      icon: <Bot className="w-8 h-8 text-orange-500" />,
      title: "AI Research Agent",
      description: "Your personal equity research analyst",
      img: "/assets/ai-analysis-dashboard-wireframe.png"
    },
    {
      icon: <FileText className="w-8 h-8 text-pink-500" />,
      title: "Event & News Tracking",
      description: (
        <>
          <div>Comprehensive event timeline – board meetings, earnings calls, partnerships</div>
          <div>Automated earnings call transcript summaries</div>
          <div>Promoter holdings and insider trade tracking</div>
          <div>First to connect macro events to specific stock impact</div>
        </>
      ),
      img: "/assets/event-news-tracking.png"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-2">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
            Bloomberg Terminal Intelligence.
            <br />
            <span className="text-blue-600">WhatsApp Simplicity.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-10 w-full max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-3 md:p-4 border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col items-center text-center"
            >
              {/* Image on top, no border */}
              <div className="mb-3 w-full flex items-center justify-center">
                <img
                  src={feature.img}
                  alt={feature.title + ' wireframe'}
                  className="w-full max-w-4xl h-[340px] md:h-[420px] object-contain mx-auto rounded-xl shadow-sm"
                  style={{ background: '#fff' }}
                />
              </div>
              {/* Icon beside title */}
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="scale-110">{feature.icon}</span>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{feature.title}</h3>
              </div>
              <p className="text-slate-600 mt-1 mb-1 leading-relaxed text-lg font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;