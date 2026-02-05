import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (screen: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FFD166] flex items-center justify-center">
              <span className="text-2xl">🍳</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Вкус-Робот</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#FF6B35] transition-colors">
              Возможности
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#FF6B35] transition-colors">
              Тарифы
            </a>
            <a href="#faq" className="text-gray-700 hover:text-[#FF6B35] transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => onNavigate('home')}
              className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Попробовать бесплатно
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Возможности
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Тарифы
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate('home');
                }}
                className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold text-center"
              >
                Попробовать бесплатно
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}