import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "Finally, someone built this! This is exactly what retail investors have been missing.",
      author: "Early Beta Tester",
      role: "Long-term Investor"
    },
    {
      quote: "I showed my wireframes to my friend and he was like 'wow, this is really what we needed.'",
      author: "QuantResearch Founder",
      role: "Product Creator"
    },
    {
      quote: "Professional-grade research made simple. Can't wait to use this.",
      author: "Long-term Investor",
      role: "Portfolio Manager"
    }
  ];

  return (
  <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
  <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            What Smart Investors Are Saying
          </h2>
          <div className="flex justify-center items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-slate-600 text-lg">Based on early feedback and wireframe reviews</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 p-10 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
              <Quote className="w-8 h-8 text-blue-600 mb-6" />
              <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-slate-900 font-bold">{testimonial.author}</p>
                <p className="text-slate-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;