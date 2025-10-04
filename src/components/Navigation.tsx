import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    setIsMobileMenuOpen(false);
  };

  const navigationLinks = [
    { label: 'Ana Sayfa', action: scrollToTop },
    { label: 'Hakkımda', action: () => scrollToSection('about') },
    { label: 'Uzmanlıklar', action: () => scrollToSection('specialties') },
    { label: 'Hasta Yorumları', action: () => scrollToSection('testimonials') },
    { label: 'İletişim', action: () => scrollToSection('contact') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              İK
            </div>
            <div className="hidden sm:block">
              <div className={`font-bold text-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Doç. Dr. İlhan Karabıçak
              </div>
              <div className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-blue-200'
              }`}>
                Genel Cerrahi Uzmanı
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
              isScrolled
                ? 'text-blue-600 hover:bg-blue-50'
                : 'text-white hover:bg-white/10'
            }`}>
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Ara</span>
            </button>
            
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium text-sm hover:bg-blue-700 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Randevu
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navigationLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="flex gap-2 px-4 pt-4">
              <button className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                isScrolled
                  ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                  : 'text-white bg-white/10 hover:bg-white/20'
              }`}>
                <Phone className="w-4 h-4" />
                Ara
              </button>
              
              <button className="flex-1 bg-blue-600 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm hover:bg-blue-700 transition-all duration-300">
                <Calendar className="w-4 h-4" />
                Randevu
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;