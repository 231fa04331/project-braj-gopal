import { ChevronDown, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - Light Krishna/Braj Gradient with Cow Image */}
      <div className="absolute inset-0">
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/862/711/large_2x/cow-eating-grass-free-photo.jpg"
          alt="Cow eating grass in Vrindavan"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-300/85 via-blue-200/80 to-emerald-200/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 via-transparent to-emerald-300/30" />
      </div>

      {/* Decorative Elements - Peacock and floral */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-yellow-400/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-emerald-300/10 blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-yellow-300/12 blur-2xl animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Om Symbol */}
        <div className="mb-6 animate-fade-in">
          <span className="devanagari-text text-5xl sm:text-6xl text-blue-700 drop-shadow-lg">
            ॐ
          </span>
        </div>

        {/* Registration Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 text-blue-900/90 text-xs sm:text-sm font-medium mb-6 animate-fade-in animate-delay-100">
          <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse" />
          {t('hero.reg')}
        </div>

        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl md:text-7xl font-bold text-blue-900 mb-4 leading-tight animate-fade-in-up animate-delay-200 drop-shadow-sm ${
            lang === 'hi' ? 'devanagari-text' : ''
          }`}
        >
          {t('hero.tagline')}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-blue-800/90 font-light mb-3 animate-fade-in-up animate-delay-300 drop-shadow-sm">
          {t('hero.subtitle')}
        </p>

        {/* Motto */}
        <p
          className={`text-base sm:text-lg text-blue-700/80 mb-10 max-w-2xl mx-auto animate-fade-in-up animate-delay-400 drop-shadow-sm ${
            lang === 'hi' ? 'devanagari-text' : ''
          }`}
        >
          {t('hero.motto')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-500">
          <a
            href="#sevas"
            className="group px-8 py-3.5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-base shadow-lg shadow-yellow-400/40 transition-all hover:shadow-xl hover:shadow-yellow-400/50 hover:-translate-y-0.5"
          >
            {t('hero.cta')}
          </a>
          <a
            href="#donate"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/40 hover:bg-white/50 text-blue-900 font-semibold text-base border border-white/50 hover:border-white backdrop-blur-sm transition-all hover:-translate-y-0.5"
          >
            <Heart className="w-4 h-4 text-blue-700" />
            {t('hero.donate')}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-700/60 hover:text-blue-900 transition-colors animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
