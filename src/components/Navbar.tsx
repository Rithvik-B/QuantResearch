
import { BarChart3, Menu } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pain Points', href: '#painpoints' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'How It Works', href: '#howitworks' },
  { label: 'Proof', href: '#proof' },
];


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between h-16">
        <a href="#join" className="flex items-center gap-2 text-xl font-bold text-blue-700 tracking-tight">
          <BarChart3 className="w-7 h-7 text-blue-600" />
          <span>QuantResearch</span>
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-3 md:gap-6 items-center">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-150 px-2 py-1 rounded hover:bg-blue-50">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#cta" className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition-all duration-150 text-sm md:text-base">
              Get Early Access
            </a>
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setMenuOpen(m => !m)} aria-label="Open menu">
          <Menu className="w-7 h-7 text-blue-700" />
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-sm px-4 py-4 animate-fade-in-down">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className="block w-full text-slate-700 hover:text-blue-600 font-medium transition-colors duration-150 px-2 py-2 rounded hover:bg-blue-50" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#cta" className="block w-full mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition-all duration-150 text-base text-center" onClick={() => setMenuOpen(false)}>
                Get Early Access
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
