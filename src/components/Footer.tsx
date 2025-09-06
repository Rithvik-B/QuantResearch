import React from 'react';
import { BarChart3, Mail, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
  <footer className="bg-white py-12 border-t border-slate-200">
  <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left: Logo & Tagline */}
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-2xl font-bold text-slate-900">QuantResearch</span>
            </div>
            <p className="text-slate-600 text-lg font-medium max-w-xs">
              Built for smart long-term investors
            </p>
          </div>
          {/* Right: Social & Copyright */}
          <div className="flex flex-col items-end w-full md:w-auto">
            <div className="flex space-x-6 mb-6">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors duration-200 p-2">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors duration-200 p-2">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors duration-200 p-2">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:hello@quantresearch.com" className="text-slate-400 hover:text-blue-600 transition-colors duration-200 p-2">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-slate-200 pt-4 w-full md:w-auto">
              <p className="text-slate-500 text-sm md:text-base text-right">
                © 2024 QuantResearch - Making investing intelligent
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;