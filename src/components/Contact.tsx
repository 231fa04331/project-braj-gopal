import { useState, type FormEvent } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const { t, lang } = useLanguage();
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        message: form.message,
      });
      if (error) throw error;
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      // Silently handle
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div ref={ref} className="container-max">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-saffron-50 text-saffron-700 text-base font-semibold mb-4">
            {t('contact.subtitle')}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-maroon-800 mb-4 ${
              lang === 'hi' ? 'devanagari-text' : ''
            }`}
          >
            {t('contact.title')}
          </h2>
          <div className="ornament-line mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-saffron-100 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-saffron-600" />
              </div>
              <div>
                <p className="font-semibold text-maroon-800 text-base">Address</p>
                <p className="text-gray-600 text-base mt-1 leading-relaxed">
                  {t('contact.address')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-nature-100 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-nature-600" />
              </div>
              <div>
                <p className="font-semibold text-maroon-800 text-base">Phone</p>
                <p className="text-gray-600 text-base mt-1">+91-XXXXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-maroon-50 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-maroon-500" />
              </div>
              <div>
                <p className="font-semibold text-maroon-800 text-base">Email</p>
                <p className="text-gray-600 text-base mt-1">info@brajgopaltrust.org</p>
              </div>
            </div>

            {/* Vrindavan image */}
            <div className="rounded-xl overflow-hidden shadow-sm h-48">
              <img
                src="https://cdn.pixabay.com/photo/2020/01/21/08/09/indian-temple-4782304_1280.jpg"
                alt="Vrindavan Dham"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500/50 outline-none transition-all text-base"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500/50 outline-none transition-all text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500/50 outline-none transition-all text-base"
                />
              </div>

              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500/50 outline-none transition-all text-base resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-semibold text-base shadow-md shadow-saffron-500/20 transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              >
                {success ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {t('contact.success')}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('contact.send')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
