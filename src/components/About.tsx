import { MapPin, FileCheck, Globe as Globe2, Landmark } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { t, lang } = useLanguage();
  const { ref, isInView } = useInView();

  const details = [
    { icon: Landmark, label: { en: 'Registration', hi: 'पंजीकरण' }, value: 'IV-31/23' },
    { icon: FileCheck, label: { en: 'Nature', hi: 'प्रकृति' }, value: { en: 'Charitable NGO', hi: 'धर्मार्थ एनजीओ' } },
    { icon: MapPin, label: { en: 'Location', hi: 'स्थान' }, value: { en: 'Vrindavan, Mathura, UP', hi: 'वृन्दावन, मथुरा, उ.प्र.' } },
    { icon: Globe2, label: { en: 'Area of Work', hi: 'कार्य क्षेत्र' }, value: { en: 'Entire India', hi: 'सम्पूर्ण भारत' } },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div ref={ref} className="container-max">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-saffron-50 text-saffron-700 text-sm font-semibold mb-4">
            {t('about.title')}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-maroon-800 mb-4 ${
              lang === 'hi' ? 'devanagari-text' : ''
            }`}
          >
            {t('about.subtitle')}
          </h2>
          <div className="ornament-line mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div
            className={`relative transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.pixabay.com/photo/2020/01/21/08/09/indian-temple-4782304_1280.jpg"
                alt="Vrindavan temple"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="devanagari-text text-white text-xl sm:text-2xl font-medium drop-shadow-lg">
                  वृन्दावन धाम
                </p>
                <p className="text-white/70 text-sm mt-1">
                  The Sacred Land of Lord Krishna
                </p>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-saffron-500/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-nature-500/20 -z-10" />
          </div>

          {/* Right: Content */}
          <div
            className={`space-y-5 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {t('about.p2')}
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {t('about.p3')}
            </p>

            {/* Trust Details Grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {details.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-saffron-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-saffron-100 flex items-center justify-center shrink-0 group-hover:bg-saffron-200 transition-colors">
                    <item.icon className="w-5 h-5 text-saffron-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                      {lang === 'en' ? item.label.en : item.label.hi}
                    </p>
                    <p className="text-sm font-semibold text-maroon-800 mt-0.5">
                      {typeof item.value === 'string'
                        ? item.value
                        : lang === 'en'
                        ? item.value.en
                        : item.value.hi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
