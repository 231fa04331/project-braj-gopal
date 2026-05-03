import { useState } from 'react';
import {
  Heart,
  Stethoscope,
  BookOpen,
  Mic2,
  HandHeart,
  Sun,
  Music,
  TreePine,
  Leaf,
  GraduationCap,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import SevaModal from './SevaModal';

const sevas = [
  { key: 'gaushala', icon: Heart, color: 'saffron', image: 'https://t4.ftcdn.net/jpg/05/23/57/17/360_F_523571782_HTB5SQBkfpA5TiKwI0lpHe3sK0VmCaVZ.jpg' },
  { key: 'chikitsalaya', icon: Stethoscope, color: 'nature', image: 'https://gausevadham.org/wp-content/uploads/2025/01/11.png' },
  { key: 'gurukul', icon: BookOpen, color: 'maroon', image: 'https://c8.alamy.com/comp/R67KMF/indian-children-studying-under-mango-tree-in-shanti-niketan-shantiniketan-garden-bolpur-birbhum-calcutta-kolkata-west-bengal-india-asia-R67KMF.jpg' },
  { key: 'katha', icon: Mic2, color: 'saffron', image: 'https://www.djjs.org/uploads/news/im_65d9742634156.jpg' },
  { key: 'relief', icon: HandHeart, color: 'nature', image: 'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/03/28/Pictures/_982f2cde-7094-11ea-9530-7febd198d354.jpg' },
  { key: 'krishna', icon: Sun, color: 'maroon', image: 'https://harekrishnamandir.org/uploads/blog/post_image6129237.webp' },
  { key: 'sankirtan', icon: Music, color: 'saffron', image: 'https://www.iskconpune.com/wp-content/uploads/2023/01/Harinam-Sankirtan-1.jpg' },
  { key: 'worship', icon: TreePine, color: 'nature', image: 'https://www.iskconbangalore.org/sri-radha-krishna-temple/assets/images/radha-krishna.jpg' },
  { key: 'environment', icon: Leaf, color: 'nature', image: 'https://give.do/blog/wp-content/uploads/2022/03/banner-1.jpg' },
  { key: 'institution', icon: GraduationCap, color: 'maroon', image: 'https://www.asbm.ac.in/wp-content/uploads/2025/02/dsk-bnr.jpg' },
] as const;

const colorMap: Record<string, { bg: string; icon: string; border: string; hover: string }> = {
  saffron: {
    bg: 'bg-saffron-50',
    icon: 'text-saffron-600',
    border: 'border-saffron-200',
    hover: 'hover:border-saffron-400 hover:shadow-saffron-100',
  },
  nature: {
    bg: 'bg-nature-50',
    icon: 'text-nature-600',
    border: 'border-nature-200',
    hover: 'hover:border-nature-400 hover:shadow-nature-100',
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
    <section id="sevas" className="section-padding bg-gray-50">
      <div ref={ref} className="container-max">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-nature-50 text-nature-700 text-sm font-semibold mb-4">
            {t('sevas.subtitle')}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-maroon-800 mb-4 ${
              lang === 'hi' ? 'devanagari-text' : ''
            }`}
          >
            {t('sevas.title')}
          </h2>
          <div className="ornament-line mx-auto" />
        </div>

        {/* Sevas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                style={{ transitionDelay: isInView ? `${i * 60}ms` : '0ms' }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={seva.image}
                    alt={t(`seva.${seva.key}.title`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  {/* Icon overlay */}
                  <div
                    className={`absolute bottom-3 left-4 w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
                  >
                    <seva.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-3">
                  {/* Title */}
                  <h3
                    className={`font-bold text-maroon-800 text-lg mb-2 ${
                      lang === 'hi' ? 'devanagari-text' : ''
                    }`}
                  >
                    {t(`seva.${seva.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed line-clamp-2">
                    {t(`seva.${seva.key}.desc`)}
                  </p>

                  {/* Learn more */}
                  <div className="flex items-center gap-1 mt-3 text-saffron-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 ${colors.bg} rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
                />
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
