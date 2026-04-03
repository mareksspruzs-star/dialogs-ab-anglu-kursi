import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Languages } from 'lucide-react';
import { changeLanguage, getCurrentLanguage } from '../utils/translate';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('LV');

  useEffect(() => {
    const currentLang = getCurrentLanguage();
    // Nodrošinām, ka vienmēr glabājam lielos burtus salīdzināšanai
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
    const upperLang = lang.toUpperCase();
    setSelectedLanguage(upperLang);
    changeLanguage(lang.toLowerCase()); // Utils parasti gaida mazos burtus (lv, en, ru)
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'courses', label: { LV: 'Programmas', EN: 'Programs', RU: 'Программы' } },
    { id: 'calendar', label: { LV: 'Kalendārs', EN: 'Calendar', RU: 'Календарь' } },
    { id: 'testimonials', label: { LV: 'Atsauksmes', EN: 'Reviews', RU: 'Отзывы' } },
    { id: 'faq', label: { LV: 'FAQ', EN: 'FAQ', RU: 'Вопросы' } },
  ];

  const currentLabels = (id: string) => {
    const link = navLinks.find(l => l.id === id);
    if (!link) return ''; // Drošības pārbaude, ja links netiek atrasts
    const lang = selectedLanguage as keyof typeof link.label;
    return link.label[lang] || link.label['LV'];
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
          <button onClick={scrollToTop} className="flex items-center gap-3 hover:opacity-80 transition-opacity" aria-label="Uz sākumu">
            <div className="w-12 h-12 bg-[#b22234] rounded-lg flex items-center justify-center shadow-md">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h1
                className={`text-2xl font-bold leading-none transition-colors ${
                  isScrolled ? 'text-[#101e33]' : 'text-white'
                }`}
              >
                Dialogs AB
              </h1>
              <p
                className={`text-[10px] uppercase tracking-wider font-semibold transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}
              >
                {selectedLanguage === 'RU' ? 'Учебный центр' : selectedLanguage === 'EN' ? 'Training Center' : 'Mācību centrs'}
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-semibold transition-colors hover:text-[#b22234] ${
                  isScrolled ? 'text-[#101e33]' : 'text-white'
                }`}
              >
                {currentLabels(link.id)}
              </button>
            ))}

            <div className="relative group">
              <button
                className={`flex items-center gap-2 font-semibold transition-colors hover:text-[#b22234] ${
                  isScrolled ? 'text-[#101e33]' : 'text-white'
                }`}
              >
                <Languages className="w-5 h-5" />
                {selectedLanguage}
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-100">
                {['LV', 'EN', 'RU'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 text-[#101e33] font-semibold transition-colors ${
                      selectedLanguage === lang ? 'text-[#b22234] bg-gray-50' : ''
                    }`}
                  >
                    {lang === 'LV' ? 'Latviešu' : lang === 'EN' ? 'English' : 'Русский'}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollToSection('kontakti')}
              className="bg-[#b22234] hover:bg-[#8b1a28] text-white px-6 py-2 rounded-lg font-semibold transition-transform active:scale-95 shadow-md"
            >
              {selectedLanguage === 'RU' ? 'Контакты' : selectedLanguage === 'EN' ? 'Contacts' : 'Kontakti'}
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#101e33]' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-6 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col p-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left font-semibold text-[#101e33] hover:bg-gray-50 hover:text-[#b22234] transition-colors px-6 py-4 border-b border-gray-50 last:border-0"
                >
                  {currentLabels(link.id)}
                </button>
              ))}
              
              <div className="bg-gray-50 p-6 mt-2 rounded-xl mx-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  {selectedLanguage === 'RU' ? 'Выберите язык' : selectedLanguage === 'EN' ? 'Choose language' : 'Izvēlieties valodu'}
                </p>
                <div className="flex gap-3">
                  {['LV', 'EN', 'RU'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                        selectedLanguage === lang 
                          ? 'bg-[#b22234] text-white shadow-lg shadow-red-200' 
                          : 'bg-white text-gray-600 border border-gray-200'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToSection('kontakti')}
                className="mt-4 bg-[#b22234] text-white py-4 rounded-xl font-bold text-center mx-2 shadow-lg active:scale-95 transition-transform"
              >
                {selectedLanguage === 'RU' ? 'Связаться с нами' : selectedLanguage === 'EN' ? 'Contact Us' : 'Sazināties ar mums'}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}