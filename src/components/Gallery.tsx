import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

const galleryImages = [
  {
    src: 'https://www.poojn.in/wp-content/uploads/2025/03/Prem-Mandir-Vrindavan-Architecture-Significance-and-History.jpeg.jpg',
    alt: 'Sacred Temple of Vrindavan',
    caption: { en: 'Sacred Temple of Vrindavan', hi: 'वृन्दावन का पवित्र मंदिर' },
  },
  {
    src: 'https://docs.krishnayangauraksha.org/blog/17_08_2024_15_19_32_Feed%20fodder%20to%20Gaumata%20in%20our%20Gaushala%20and%20earn%20merit%20of%20all%20pilgrimages.JPG',
    alt: 'Cows grazing',
    caption: { en: 'Gau Seva — Protecting Sacred Cows', hi: 'गौ सेवा — पवित्र गौओं का संरक्षण' },
  },
  {
    src: 'https://mathurahub.com/wp-content/uploads/2021/12/krishna-janmasthan-temple-600.jpg',
    alt: 'The Holy Land of Braj',
    caption: { en: 'The Holy Land of Braj', hi: 'ब्रज की पवित्र भूमि' },
  },
  {
    src: 'https://thevrindwoods.com/wp-content/uploads/2025/04/yamuna-river.webp',
    alt: 'Sacred Yamuna River',
    caption: { en: 'Sacred Yamuna River', hi: 'पवित्र यमुना नदी' },
  },
  {
    src: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/02-03-2020_WMO_Sunrise-Mexico.jpg/image1170x530cropped.jpg',
    alt: 'Nature and Wildlife',
    caption: { en: 'Serving All Beings', hi: 'सर्व भूत हिते रताः' },
  },
  {
    src: 'https://give.do/blog/wp-content/uploads/2022/03/banner-1.jpg',
    alt: 'Environmental Protection',
    caption: { en: 'Environmental Protection', hi: 'पर्यावरण संरक्षण' },
  },
];

export default function Gallery() {
  const { t, lang } = useLanguage();
  const { ref, isInView } = useInView();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () =>
    setLightbox((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  const next = () =>
    setLightbox((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );

  return (
    <section id="gallery" className="section-padding bg-white">
      <div ref={ref} className="container-max">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-maroon-50 text-maroon-600 text-sm font-semibold mb-4">
            {t('gallery.subtitle')}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-maroon-800 mb-4 ${
              lang === 'hi' ? 'devanagari-text' : ''
            }`}
          >
            {t('gallery.title')}
          </h2>
          <div className="ornament-line mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer ${
                isInView
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : '0ms' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p
                  className={`text-white text-sm font-medium ${
                    lang === 'hi' ? 'devanagari-text' : ''
                  }`}
                >
                  {lang === 'en' ? img.caption.en : img.caption.hi}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 text-white/70 hover:text-white p-2 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 text-white/70 hover:text-white p-2 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
