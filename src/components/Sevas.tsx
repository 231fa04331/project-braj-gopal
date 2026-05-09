import { useState } from 'react';
import { Heart, Users, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import SevaModal from './SevaModal';

const sevas = [
  {
    key: 'gauseva',
    icon: Heart,
    color: 'saffron',
    image: '/gauseva.png',
  },
  {
    key: 'sadhu',
    icon: Users,
    color: 'maroon',
    image: '/sadhu-seva.png',
  },
] as const;

const colorMap: Record<string, { bg: string; icon: string; border: string; hover: string }> = {
  saffron: {
    bg: 'bg-saffron-50',
    icon: 'text-saffron-600',
    border: 'border-saffron-200',
    hover: 'hover:border-saffron-400 hover:shadow-saffron-100',
  },
  maroon: {
    bg: 'bg-maroon-50',
    icon: 'text-maroon-500',
    border: 'border-maroon-200',
    hover: 'hover:border-maroon-400 hover:shadow-maroon-100',
  },
};

export default function Sevas() {
  const { t, lang } = useLanguage();
  const { ref, isInView } = useInView();
  const [selectedSeva, setSelectedSeva] = useState<string | null>(null);

  return (
    <section id="sevas" className="section-padding bg-gradient-to-b from-emerald-50/50 via-white to-blue-50/20">
      <div ref={ref} className="container-max">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-blue-900 text-sm font-semibold mb-4 border border-yellow-300">
            {t('sevas.subtitle')}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 ${
              lang === 'hi' ? 'devanagari-text' : ''
            }`}
          >
            {t('sevas.title')}
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto" />
        </div>

        {/* Sevas Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {sevas.map((seva, i) => {
            const colors = colorMap[seva.color];
            return (
              <button
                key={seva.key}
                onClick={() => setSelectedSeva(seva.key)}
                className={`group relative rounded-2xl border ${colors.border} ${colors.hover} bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden text-left ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isInView ? `${i * 100}ms` : '0ms' }}
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-saffron-100 to-maroon-50">
                  <img
                    src={seva.image}
                    alt={t(`seva.${seva.key}.title`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  {/* Icon overlay */}
                  <div className="absolute bottom-3 left-4 w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <seva.icon className="w-6 h-6 text-blue-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-3">
                  {/* Title */}
                  <h3
                    className={`font-bold text-blue-900 text-lg mb-2 ${
                      lang === 'hi' ? 'devanagari-text' : ''
                    }`}
                  >
                    {t(`seva.${seva.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {t(`seva.${seva.key}.desc`)}
                  </p>

                  {/* Learn more */}
                  <div className="flex items-center gap-1 mt-4 text-yellow-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {lang === 'en' ? 'Learn More' : 'और जानें'} <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-100 rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Seva Modal */}
      <SevaModal sevaKey={selectedSeva} onClose={() => setSelectedSeva(null)} />
    </section>
  );
}
