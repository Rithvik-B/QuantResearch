
import { BarChart3 } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pain Points', href: '#painpoints' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'How It Works', href: '#howitworks' },
  { label: 'Proof', href: '#proof' },
];

const Navbar = () => (
  <nav className="w-full bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-slate-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between h-16">
      <a href="#join" className="flex items-center gap-2 text-xl font-bold text-blue-700 tracking-tight">
        <BarChart3 className="w-7 h-7 text-blue-600" />
        <span>QuantResearch</span>
      </a>
      <ul className="flex gap-3 md:gap-6 items-center">
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
    </div>
  </nav>
);

export default Navbar;
