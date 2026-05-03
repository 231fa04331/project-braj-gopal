import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-maroon-900 text-white/70">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-saffron-500 flex items-center justify-center text-white font-bold text-lg">
                BG
              </div>
              <span className="text-white font-bold text-xl">
                {t('hero.tagline')}
              </span>
            </div>
            <p
              className={`text-base leading-relaxed mb-6 ${
                lang === 'hi' ? 'devanagari-text' : ''
              }`}
            >
              {t('footer.mission')}
            </p>
            <p className="devanagari-text text-saffron-400 text-xl font-semibold">
              जय श्री कृष्ण
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-6">
              {t('footer.quick')}
            </h4>
            <ul className="space-y-3.5">
              {['nav.home', 'nav.about', 'nav.sevas', 'nav.gallery', 'nav.donate', 'nav.contact'].map(
                (key) => (
                  <li key={key}>
                    <a
                      href={`#${key.split('.')[1]}`}
                      className="text-base hover:text-saffron-400 transition-colors"
                    >
                      {t(key)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Sevas */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-6">
              {t('footer.sevas')}
            </h4>
            <ul className="space-y-3.5">
              {['gaushala', 'chikitsalaya', 'gurukul', 'katha', 'relief', 'sankirtan'].map(
                (key) => (
                  <li key={key}>
                    <a
                      href="#sevas"
                      className={`text-base hover:text-saffron-400 transition-colors ${
                        lang === 'hi' ? 'devanagari-text' : ''
                      }`}
                    >
                      {t(`seva.${key}.title`)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-6">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-3.5">
              <li>
                <span className="text-base">{t('footer.privacy')}</span>
              </li>
              <li>
                <span className="text-base">{t('footer.terms')}</span>
              </li>
              <li>
                <span className="text-base">{t('footer.80g')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            &copy; {year} Braj Gopal Trust. {t('footer.rights')} Reg. No. IV-31/23
          </p>
          <p className="flex items-center gap-2 text-sm text-white/60">
            Made with <Heart className="w-4 h-4 text-saffron-500" /> in Vrindavan
          </p>
        </div>
      </div>
    </footer>
  );
}
