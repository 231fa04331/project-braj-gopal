import { useState } from 'react';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

const galleryVideos = [
  {
    title: { en: 'Prasadam Seva', hi: 'प्रसादम् सेवा' },
    videoSrc: '/videos/prasadam-seva.mp4',
  },
  {
    title: { en: 'Kirtan Seva', hi: 'कीर्तन सेवा' },
    videoSrc: '/videos/kirtan-seva.mp4',
  },
  {
    title: { en: 'Gau Seva', hi: 'गौ सेवा' },
    videoSrc: '/videos/gau-seva.mp4',
  },
  {
    title: { en: 'Hari Naam Sankirtan', hi: 'हरि नाम संकीर्तन' },
    videoSrc: '/videos/hari-naam-sankirtan-1.mp4',
  },
  {
    title: { en: 'Hari Naam Sankirtan', hi: 'हरि नाम संकीर्तन' },
    videoSrc: '/videos/hari-naam-sankirtan-2.mp4',
  },
];

export default function Gallery() {
  const { t, lang } = useLanguage();
  const { ref, isInView } = useInView();
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const openVideo = (index: number) => setActiveVideo(index);
  const closeVideo = () => setActiveVideo(null);
  const prev = () =>
    setActiveVideo((p) =>
      p !== null ? (p - 1 + galleryVideos.length) % galleryVideos.length : null
    );
  const next = () =>
    setActiveVideo((p) =>
      p !== null ? (p + 1) % galleryVideos.length : null
    );

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white via-emerald-50/20 to-blue-50/10">
      <div ref={ref} className="container-max">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-blue-900 text-sm font-semibold mb-4 border border-yellow-300">
            {t('gallery.subtitle')}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 ${
              lang === 'hi' ? 'devanagari-text' : ''
            }`}
          >
            {t('gallery.title')}
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto" />
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryVideos.map((video, i) => (
            <button
              key={i}
              onClick={() => openVideo(i)}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-gradient-to-br from-blue-800 to-emerald-900 aspect-video ${
                isInView
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : '0ms' }}
            >
              {/* Video element (placeholder) */}
              <video
                src={video.videoSrc}
                className="w-full h-full object-cover"
                preload="none"
                muted
              />

              {/* Play overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-900/40 group-hover:bg-blue-900/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-yellow-400/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-white ml-1" />
                </div>
                <p
                  className={`text-white text-sm font-semibold mt-4 drop-shadow-lg ${
                    lang === 'hi' ? 'devanagari-text' : ''
                  }`}
                >
                  {lang === 'en' ? video.title.en : video.title.hi}
                </p>
              </div>

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-900/80 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p
                  className={`text-white text-xs font-medium ${
                    lang === 'hi' ? 'devanagari-text' : ''
                  }`}
                >
                  {lang === 'en' ? video.title.en : video.title.hi}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Lightbox */}
      {activeVideo !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 text-white/70 hover:text-white p-2 transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 text-white/70 hover:text-white p-2 transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={galleryVideos[activeVideo].videoSrc}
              controls
              autoPlay
              className="w-full rounded-lg bg-black"
            />
            <p
              className={`text-white text-center mt-4 font-medium ${
                lang === 'hi' ? 'devanagari-text' : ''
              }`}
            >
              {lang === 'en'
                ? galleryVideos[activeVideo].title.en
                : galleryVideos[activeVideo].title.hi}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
