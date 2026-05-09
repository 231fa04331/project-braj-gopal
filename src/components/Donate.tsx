import { useState, type FormEvent } from 'react';
import { QrCode, Sparkles, FileText, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

export default function Donate() {
  const { t, lang } = useLanguage();
  const { ref, isInView } = useInView();
  const [wantTaxReceipt, setWantTaxReceipt] = useState(false);
  const [panForm, setPanForm] = useState({ name: '', pan: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handlePanSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="donate" className="section-padding relative overflow-hidden">
      {/* Bold background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-emerald-900/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />

      <div ref={ref} className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/20 text-yellow-100 text-sm font-semibold mb-4 border border-yellow-400/30">
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
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto" />
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
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-10 shadow-2xl">
            {/* QR Button */}
            <button className="w-full py-5 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg shadow-lg shadow-yellow-500/30 transition-all hover:shadow-xl hover:shadow-yellow-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-3">
              <QrCode className="w-6 h-6" />
              {lang === 'en' ? 'Scan QR to Donate' : 'दान करने के लिए QR स्कैन करें'}
            </button>

            {/* 80G Tax Exemption Toggle */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => setWantTaxReceipt(!wantTaxReceipt)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                  wantTaxReceipt
                    ? 'bg-yellow-500/20 border-yellow-400/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <FileText className={`w-5 h-5 ${wantTaxReceipt ? 'text-yellow-300' : 'text-white/60'}`} />
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">
                      {lang === 'en' ? '80G Tax Exemption Receipt' : '80G कर छूट रसीद'}
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">
                      {lang === 'en' ? 'Get tax benefit under Section 80G' : 'धारा 80G के तहत कर लाभ प्राप्त करें'}
                    </p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  wantTaxReceipt ? 'border-yellow-400 bg-yellow-400' : 'border-white/30'
                }`}>
                  {wantTaxReceipt && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                </div>
              </button>

              {/* PAN Card Details Form */}
              {wantTaxReceipt && (
                <form onSubmit={handlePanSubmit} className="mt-4 space-y-4 p-5 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-saffron-300 text-sm font-medium mb-2">
                    {lang === 'en' ? 'Provide your details for 80G tax receipt' : '80G कर रसीद के लिए अपना विवरण दें'}
                  </p>

                  <div>
                    <label className="block text-white/70 text-xs font-medium mb-1.5">
                      {lang === 'en' ? 'Full Name (as on PAN Card)' : 'पूरा नाम (PAN कार्ड अनुसार)'}
                    </label>
                    <input
                      type="text"
                      required
                      value={panForm.name}
                      onChange={(e) => setPanForm({ ...panForm, name: e.target.value })}
                      placeholder={lang === 'en' ? 'Enter your full name' : 'अपना पूरा नाम दर्ज करें'}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-xs font-medium mb-1.5">
                      {lang === 'en' ? 'PAN Number' : 'PAN नंबर'}
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={10}
                      value={panForm.pan}
                      onChange={(e) => setPanForm({ ...panForm, pan: e.target.value.toUpperCase() })}
                      placeholder="e.g. ABCDE1234F"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all uppercase tracking-wider"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-xs font-medium mb-1.5">
                      {lang === 'en' ? 'Email Address (for receipt)' : 'ईमेल पता (रसीद के लिए)'}
                    </label>
                    <input
                      type="email"
                      required
                      value={panForm.email}
                      onChange={(e) => setPanForm({ ...panForm, email: e.target.value })}
                      placeholder={lang === 'en' ? 'Enter your email' : 'अपना ईमेल दर्ज करें'}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-md"
                  >
                    {submitted
                      ? (lang === 'en' ? 'Details Submitted!' : 'विवरण जमा हो गया!')
                      : (lang === 'en' ? 'Submit for 80G Receipt' : '80G रसीद के लिए जमा करें')
                    }
                  </button>
                </form>
              )}
            </div>

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
