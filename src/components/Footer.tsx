import React from 'react';
import { BarChart3, Mail, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-20 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-2xl font-bold text-slate-900">QuantResearch</span>
          </div>
          
          <p className="text-slate-600 mb-12 text-xl font-medium">
            Built for smart long-term investors
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-12">
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
          
          <div className="border-t border-slate-200 pt-8">
            <p className="text-slate-500">
              © 2024 QuantResearch - Making investing intelligent
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;