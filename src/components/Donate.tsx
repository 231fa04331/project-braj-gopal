import { QrCode, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

export default function Donate() {
  const { t, lang } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section id="donate" className="section-padding relative overflow-hidden">
      {/* Bold background */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.pixabay.com/photo/2020/01/21/08/09/indian-temple-4782304_1280.jpg"
          alt="Vrindavan temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-900/95 via-maroon-800/90 to-nature-900/95" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-saffron-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-nature-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-saffron-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron-500/20 text-saffron-300 text-sm font-semibold mb-4 border border-saffron-500/30">
            <Sparkles className="w-4 h-4" />
            {t('donate.subtitle')}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg ${
              lang === 'hi' ? 'devanagari-text' : ''
            }`}
          >
            {t('donate.title')}
          </h2>
          <div className="w-16 h-1 bg-saffron-500 rounded-full mx-auto" />
        </div>

        <div
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Description */}
          <p className="text-white/90 text-center text-base sm:text-lg mb-12 leading-relaxed font-medium">
            {t('donate.p1')}
          </p>

          {/* Donation Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-12 shadow-2xl">
            {/* QR Button */}
            <button className="w-full py-5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-lg shadow-lg shadow-saffron-500/30 transition-all hover:shadow-xl hover:shadow-saffron-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-3">
              <QrCode className="w-6 h-6" />
              Scan QR to Donate
            </button>

            {/* Trust message */}
            <p className="text-white/70 text-center text-sm mt-6">
              {t('donate.p2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
