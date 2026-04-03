import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Languages } from 'lucide-react';
import { changeLanguage, getCurrentLanguage } from '../utils/translate';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('LV');

  useEffect(() => {
    const currentLang = getCurrentLanguage();
    setSelectedLanguage(currentLang.toUpperCase());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang.toUpperCase());
    changeLanguage(lang.toLowerCase());
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Atpakaļ uz sākumu"
          >
            <div className="w-12 h-12 bg-[#b22234] rounded-lg flex items-center justify-center shrink-0 shadow-md">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            
            <div className="flex flex-col items-center text-center">
              <h1
                className={`text-2xl font-bold leading-none transition-colors ${
                  isScrolled ? 'text-[#101e33]' : 'text-white'
                }`}
              >
                Dialogs AB
              </h1>
              <p
                className={`text-[10px] uppercase tracking-wider font-semibold mt-1 transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}
              >
                Mācību centrs
              </p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('courses')}
              className={`font-semibold transition-colors hover:text-[#b22234] ${
                isScrolled ? 'text-[#101e33]' : 'text-white'
              }`}
            >
              Programmas
            </button>
            <button
              onClick={() => scrollToSection('calendar')}
              className={`font-semibold transition-colors hover:text-[#b22234] ${
                isScrolled ? 'text-[#101e33]' : 'text-white'
              }`}
            >
              Kalendārs
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`font-semibold transition-colors hover:text-[#b22234] ${
                isScrolled ? 'text-[#101e33]' : 'text-white'
              }`}
            >
              Atsauksmes
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`font-semibold transition-colors hover:text-[#b22234] ${
                isScrolled ? 'text-[#101e33]' : 'text-white'
              }`}
            >
              FAQ
            </button>

            <div className="relative group">
              <button
                className={`flex items-center gap-2 font-semibold transition-colors hover:text-[#b22234] ${
                  isScrolled ? 'text-[#101e33]' : 'text-white'
                }`}
              >
                <Languages className="w-5 h-5" />
                {selectedLanguage}
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button
                  onClick={() => handleLanguageChange('LV')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-[#101e33] font-semibold border-b border-gray-100"
                >
                  Latviešu
                </button>
                <button
                  onClick={() => handleLanguageChange('EN')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-[#101e33] font-semibold border-b border-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange('RU')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-[#101e33] font-semibold"
                >
                  Русский
                </button>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('kontakti')}
              className="bg-[#b22234] hover:bg-[#8b1a28] text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-md"
            >
              Kontakti
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors ${
              isScrolled ? 'text-[#101e33]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 border-t border-gray-300 pt-6 bg-white rounded-lg shadow-xl">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('courses')}
                className="text-left font-semibold text-[#101e33] hover:text-[#b22234] transition-colors px-4 py-2"
              >
                Programmas
              </button>
              <button
                onClick={() => scrollToSection('calendar')}
                className="text-left font-semibold text-[#101e33] hover:text-[#b22234] transition-colors px-4 py-2"
              >
                Kalendārs
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left font-semibold text-[#101e33] hover:text-[#b22234] transition-colors px-4 py-2"
              >
                Atsauksmes
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left font-semibold text-[#101e33] hover:text-[#b22234] transition-colors px-4 py-2"
              >
                FAQ
              </button>
              
              <div className="border-t border-gray-200 pt-4 px-4">
                <p className="text-sm text-gray-600 mb-2">Valoda:</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleLanguageChange('LV')}
                    className={`px-3 py-1 rounded ${
                      selectedLanguage === 'LV' ? 'bg-[#b22234] text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    LV
                  </button>
                  <button
                    onClick={() => handleLanguageChange('EN')}
                    className={`px-3 py-1 rounded ${
                      selectedLanguage === 'EN' ? 'bg-[#b22234] text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange('RU')}
                    className={`px-3 py-1 rounded ${
                      selectedLanguage === 'RU' ? 'bg-[#b22234] text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    RU
                  </button>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('kontakti')}
                className="bg-[#b22234] hover:bg-[#8b1a28] text-white px-6 py-3 rounded-lg font-semibold text-center mx-4 transition-colors"
              >
                Kontakti
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}