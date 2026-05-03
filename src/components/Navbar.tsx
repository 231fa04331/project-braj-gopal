import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const navLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.sevas', href: '#sevas' },
  { key: 'nav.gallery', href: '#gallery' },
  { key: 'nav.donate', href: '#donate' },
  { key: 'nav.contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-maroon-500/70 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="Braj Gopal Trust" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md group-hover:scale-110 transition-transform" />
          <span className="text-white font-bold text-lg sm:text-xl tracking-wide hidden sm:block">
            {t('hero.tagline')}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-white/90 hover:text-saffron-300 px-4 py-2 rounded-lg text-lg font-bold transition-colors hover:bg-white/10"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Language Toggle + Mobile Menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all border border-white/20 hover:border-saffron-400"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? 'हिंदी' : 'English'}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-maroon-600/95 backdrop-blur-md px-4 py-3 space-y-1 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white/80 hover:text-saffron-300 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-white/10"
            >
              {t(link.key)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
