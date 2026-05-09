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
    <section id="about" className="section-padding bg-gradient-to-b from-blue-50/60 via-emerald-50/30 to-white">
      <div ref={ref} className="container-max">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-blue-900 text-sm font-semibold mb-4 border border-yellow-300">
            {t('about.title')}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 ${
              lang === 'hi' ? 'devanagari-text' : ''
            }`}
          >
            {t('about.subtitle')}
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto" />
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
                src="https://static.vecteezy.com/system/resources/previews/001/862/711/large_2x/cow-eating-grass-free-photo.jpg"
                alt="Gau Seva in Vrindavan"
                className="w-full h-80 sm:h-96 object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 via-maroon-900/20 to-transparent" />
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-yellow-400/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-blue-500/20 -z-10" />
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
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-white hover:from-yellow-100 hover:to-yellow-50 transition-colors group border border-yellow-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0 group-hover:bg-yellow-200 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-700 font-medium uppercase tracking-wider">
                      {lang === 'en' ? item.label.en : item.label.hi}
                    </p>
                    <p className="text-sm font-semibold text-blue-900 mt-0.5">
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
