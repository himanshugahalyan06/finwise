import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Investment', path: '/investment' },
    { name: 'Calculators', path: '/calculators' },
    { name: 'Loans', path: '/loans' },
    { name: 'Stock Market', path: '/stock-market' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-gradient-to-tr from-purple-600 to-purple-400 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)] group-hover:scale-110 transition-transform">
            <TrendingUp className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">Fin<span className="text-purple-500">Wise</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-all hover:text-purple-400 relative py-2 ${location.pathname === link.path ? 'text-purple-500' : 'text-gray-300'}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
                )}
              </Link>
            ))}
          </div>
          <Link to="/calculators">
            <button className="glow-btn !py-2.5 !text-sm">Get Started</button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg glass border border-white/10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-black/95 z-[90] lg:hidden transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full justify-center items-center gap-8 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-2xl font-bold transition-all ${location.pathname === link.path ? 'text-purple-500' : 'text-gray-400'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/calculators" className="w-full max-w-xs" onClick={() => setIsOpen(false)}>
            <button className="glow-btn w-full mt-4">Get Started</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
