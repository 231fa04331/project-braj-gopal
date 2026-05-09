import { useState, type FormEvent } from 'react';
import { Heart, Mail, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white/70">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold text-sm">
                BG
              </div>
              <span className="text-white font-bold text-lg">
                {t('hero.tagline')}
              </span>
            </div>
            <p
              className={`text-sm leading-relaxed mb-4 ${
                lang === 'hi' ? 'devanagari-text' : ''
              }`}
            >
              {t('footer.mission')}
            </p>
            <p className="devanagari-text text-yellow-300 text-lg">
              जय श्री कृष्ण
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {t('footer.quick')}
            </h4>
            <ul className="space-y-2.5">
              {['nav.home', 'nav.about', 'nav.sevas', 'nav.gallery', 'nav.donate', 'nav.contact'].map(
                (key) => (
                  <li key={key}>
                    <a
                      href={`#${key.split('.')[1]}`}
                      className="text-sm hover:text-yellow-300 transition-colors"
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
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {t('footer.sevas')}
            </h4>
            <ul className="space-y-2.5">
              {['gauseva', 'sadhu'].map(
                (key) => (
                  <li key={key}>
                    <a
                      href="#sevas"
                      className={`text-sm hover:text-yellow-300 transition-colors ${
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

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {lang === 'en' ? 'Newsletter' : 'न्यूज़लेटर'}
            </h4>
            <p className="text-sm mb-4">
              {lang === 'en'
                ? 'Subscribe for updates on our sevas and events.'
                : 'हमारी सेवाओं और कार्यक्रमों के अपडेट के लिए सब्सक्राइब करें।'}
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === 'en' ? 'Your email' : 'आपका ईमेल'}
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm outline-none focus:border-saffron-400 focus:ring-1 focus:ring-saffron-400/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-sm transition-all hover:-translate-y-0.5 shrink-0"
              >
                {subscribed ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  lang === 'en' ? 'Join' : 'जुड़ें'
                )}
              </button>
            </form>
            {subscribed && (
              <p className="text-yellow-300 text-xs mt-2">
                {lang === 'en' ? 'Subscribed successfully!' : 'सफलतापूर्वक सब्सक्राइब हो गया!'}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {year} Braj Gopal Trust. {t('footer.rights')} Reg. No. IV-31/23
          </p>
          <p className="flex items-center gap-1 text-xs text-white/40">
            Made with <Heart className="w-3 h-3 text-yellow-400" /> in Vrindavan
          </p>
        </div>
      </div>
    </footer>
  );
}
