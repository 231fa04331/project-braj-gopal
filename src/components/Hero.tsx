import { ChevronDown, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.pixabay.com/photo/2020/01/21/08/09/indian-temple-4782304_1280.jpg"
          alt="Vrindavan temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nature-900/50 via-nature-800/50 to-nature-900/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-saffron-500/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-nature-400/10 blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Om Symbol */}
        <div className="mb-6 animate-fade-in">
          <span className="devanagari-text text-5xl sm:text-6xl text-saffron-400 drop-shadow-lg">
            ॐ
          </span>
        </div>

        {/* Registration Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-6 animate-fade-in animate-delay-100">
          <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse" />
          {t('hero.reg')}
        </div>

        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight animate-fade-in-up animate-delay-200 ${
            lang === 'hi' ? 'devanagari-text' : ''
          }`}
        >
          {t('hero.tagline')}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-saffron-200/90 font-light mb-3 animate-fade-in-up animate-delay-300">
          {t('hero.subtitle')}
        </p>

        {/* Motto */}
        <p
          className={`text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto animate-fade-in-up animate-delay-400 ${
            lang === 'hi' ? 'devanagari-text' : ''
          }`}
        >
          {t('hero.motto')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-500">
          <a
            href="#sevas"
            className="group px-8 py-3.5 rounded-full bg-saffron-500 hover:bg-saffron-600 text-white font-semibold text-base shadow-lg shadow-saffron-500/30 transition-all hover:shadow-xl hover:shadow-saffron-500/40 hover:-translate-y-0.5"
          >
            {t('hero.cta')}
          </a>
          <a
            href="#donate"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/30 hover:border-saffron-400 backdrop-blur-sm transition-all hover:-translate-y-0.5"
          >
            <Heart className="w-4 h-4 text-saffron-400" />
            {t('hero.donate')}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-saffron-400 transition-colors animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
