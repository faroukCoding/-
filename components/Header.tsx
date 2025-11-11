
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-blue shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-amiri text-2xl md:text-3xl font-bold tracking-wider">
            مدرسة الفجر الدولية
          </div>
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-white hover:text-brand-gold transition-colors duration-300 font-cairo text-lg">
                {link.label}
              </a>
            ))}
            <a href="#admissions" className="bg-brand-gold text-brand-blue font-bold py-2 px-5 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-md">
              سجل الآن
            </a>
          </nav>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-brand-blue rounded-lg p-4">
            <nav className="flex flex-col items-center space-y-4">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-white hover:text-brand-gold transition-colors duration-300 font-cairo text-lg w-full text-center py-2">
                  {link.label}
                </a>
              ))}
              <a href="#admissions" onClick={() => setIsMenuOpen(false)} className="bg-brand-gold text-brand-blue font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-md w-full text-center mt-4">
                سجل الآن
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
