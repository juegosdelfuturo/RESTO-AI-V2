import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkClass = "text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors cursor-pointer";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="bg-primary-600 p-2 rounded-xl text-white">
            <ChefHat size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">Resto<span className="text-primary-600">AI</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className={linkClass}>Características</a>
          <a href="#stats" className={linkClass}>Resultados</a>
          <a href="#pricing" className={linkClass}>Precios</a>
          <a 
            href="#pricing"
            className="px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Agendar Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
           <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-base font-medium text-slate-700 py-2">Características</a>
          <a href="#stats" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-base font-medium text-slate-700 py-2">Resultados</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-base font-medium text-slate-700 py-2">Precios</a>
          <a 
            href="#pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3 bg-primary-600 text-white font-semibold rounded-xl text-center"
          >
            Agendar Demo
          </a>
        </div>
      )}
    </nav>
  );
};