import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SevaDetail {
  title: { en: string; hi: string };
  shortDesc: { en: string; hi: string };
  fullDesc: { en: string; hi: string };
  impact: { en: string; hi: string };
}

const sevaDetails: Record<string, SevaDetail> = {
  gauseva: {
    title: { en: 'Gau Seva', hi: 'गौ सेवा' },
    shortDesc: { en: 'Protecting Sacred Cows', hi: 'पवित्र गौओं का संरक्षण' },
    fullDesc: {
      en: 'Our Gau Seva is dedicated to the protection, care, and nurturing of cows — the most sacred animal in Sanatan Dharma. We provide shelter, nutritious fodder, clean water, and medical care to abandoned, injured, and elderly cows. Each cow under our care receives individual attention and compassionate treatment. Serving the cow is considered one of the highest forms of seva, and we perform this duty with deep reverence and love.',
      hi: 'हमारी गौ सेवा गौओं — सनातन धर्म में सबसे पवित्र जानवर — के संरक्षण, देखभाल और पोषण के लिए समर्पित है। हम अनाथ, घायल और बुजुर्ग गौओं को आश्रय, पौष्टिक चारा, स्वच्छ जल और चिकित्सा सेवा प्रदान करते हैं। हमारी देखभाल में आने वाली प्रत्येक गौ को व्यक्तिगत ध्यान और करुणामयी व्यवहार मिलता है। गौ सेवा को सर्वोच्च सेवा माना जाता है, और हम इस कर्तव्य को गहरी श्रद्धा और प्रेम से निभाते हैं।',
    },
    impact: { en: 'Over 500 cows rescued and sheltered', hi: '500 से अधिक गौएं बचाई गई और सुरक्षित की गई' },
  },
  sadhu: {
    title: { en: 'Sadhu Seva', hi: 'साधु सेवा' },
    shortDesc: { en: 'Serving the Holy Saints', hi: 'पवित्र संतों की सेवा' },
    fullDesc: {
      en: 'Our Sadhu Seva is devoted to serving saints, sages, and spiritual practitioners who have dedicated their lives to the path of devotion. We organize Kirtan sessions, Bhagawat Katha, and provide food to people monthly once. Through these acts of service, we support those who sustain the spiritual fabric of our society and keep the flame of devotion alive in the holy land of Vrindavan.',
      hi: 'हमारी साधु सेवा उन संतों, साधुओं और आध्यात्मिक साधकों की सेवा के लिए समर्पित है जिन्होंने अपना जीवन भक्ति के मार्ग को समर्पित किया है। हम कीर्तन सत्र, भागवत कथा का आयोजन करते हैं और मासिक रूप से एक बार लोगों को भोजन प्रदान करते हैं। इन सेवा के कार्यों के माध्यम से, हम उनका समर्थन करते हैं जो हमारे समाज की आध्यात्मिक नींव को बनाए रखते हैं और वृन्दावन की पवित्र भूमि में भक्ति की ज्योति को जीवित रखते हैं।',
    },
    impact: { en: 'Monthly Kirtan, Bhagawat Katha, and food distribution', hi: 'मासिक कीर्तन, भागवत कथा और भोजन वितरण' },
  },
};

interface SevaModalProps {
  sevaKey: string | null;
  onClose: () => void;
}

export default function SevaModal({ sevaKey, onClose }: SevaModalProps) {
  const { lang } = useLanguage();

  if (!sevaKey || !sevaDetails[sevaKey]) return null;

  const seva = sevaDetails[sevaKey];

  return (
    <div
      className="fixed inset-0 z-40 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-700 to-emerald-700 px-6 py-6 flex items-start justify-between">
          <div className="flex-1">
            <h2
              className={`text-2xl sm:text-3xl font-bold text-white mb-2 ${
                lang === 'hi' ? 'devanagari-text' : ''
              }`}
            >
              {lang === 'en' ? seva.title.en : seva.title.hi}
            </h2>
            <p className="text-yellow-100 text-sm">
              {lang === 'en' ? seva.shortDesc.en : seva.shortDesc.hi}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2 flex-shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              {lang === 'en' ? 'About This Seva' : 'इस सेवा के बारे में'}
            </h3>
            <p
              className={`text-gray-700 leading-relaxed ${
                lang === 'hi' ? 'devanagari-text' : ''
              }`}
            >
              {lang === 'en' ? seva.fullDesc.en : seva.fullDesc.hi}
            </p>
          </div>

          {/* Impact */}
          <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-xl p-4 border border-yellow-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              {lang === 'en' ? 'Our Impact' : 'हमारा प्रभाव'}
            </h3>
            <p
              className={`text-blue-700 font-medium ${
                lang === 'hi' ? 'devanagari-text' : ''
              }`}
            >
              {lang === 'en' ? seva.impact.en : seva.impact.hi}
            </p>
          </div>

          {/* CTA */}
          <a
            href="#donate"
            onClick={onClose}
            className="block w-full py-3 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-md text-center"
          >
            {lang === 'en' ? 'Support This Seva' : 'इस सेवा का समर्थन करें'}
          </a>
        </div>
      </div>
    </div>
  );
}
