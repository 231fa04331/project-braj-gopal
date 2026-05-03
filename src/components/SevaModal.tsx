import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SevaDetail {
  title: { en: string; hi: string };
  shortDesc: { en: string; hi: string };
  fullDesc: { en: string; hi: string };
  impact: { en: string; hi: string };
}

const sevaDetails: Record<string, SevaDetail> = {
  gaushala: {
    title: { en: 'Gaushala / Gau Seva', hi: 'गौशाला / गौ सेवा' },
    shortDesc: { en: 'Protecting Sacred Cows', hi: 'पवित्र गौओं का संरक्षण' },
    fullDesc: {
      en: 'Our Gaushala is a sanctuary for abandoned, injured, and elderly cows. We provide them with nutritious fodder, clean water, medical care, and a safe place to live. Each cow under our care receives individual attention and compassionate treatment. We believe in serving these sacred animals not as a duty, but as an act of love and devotion.',
      hi: 'हमारी गौशाला अनाथ, घायल और बुजुर्ग गौओं के लिए एक आश्रय स्थल है। हम उन्हें पौष्टिक चारा, स्वच्छ जल, चिकित्सा सेवा और सुरक्षित आश्रय प्रदान करते हैं। हमारी देखभाल में आने वाली प्रत्येक गौ को व्यक्तिगत ध्यान और करुणामयी व्यवहार मिलता है।',
    },
    impact: { en: 'Over 500 cows rescued and sheltered', hi: '500 से अधिक गौएं बचाई गई और सुरक्षित की गई' },
  },
  chikitsalaya: {
    title: { en: 'Gau Chikitsalaya', hi: 'गौ चिकित्सालय' },
    shortDesc: { en: 'Veterinary Care & Healing', hi: 'पशु चिकित्सा सेवा और उपचार' },
    fullDesc: {
      en: 'Our Ayurvedic veterinary hospital combines ancient healing wisdom with modern compassion. We treat cattle suffering from diseases, injuries, and malnutrition. Our trained veterinarians use Ayurvedic medicines and traditional healing techniques to restore health and vitality to sick and injured animals. This facility has become a beacon of hope for countless creatures.',
      hi: 'हमारा आयुर्वेदिक पशु चिकित्सालय प्राचीन चिकित्सा बुद्धि को आधुनिक करुणा के साथ जोड़ता है। हम बीमारियों, चोटों और कुपोषण से पीड़ित गौओं का इलाज करते हैं। हमारे प्रशिक्षित पशु चिकित्सक आयुर्वेदिक दवाइयों और पारंपरिक चिकित्सा तकनीकों का उपयोग करते हैं।',
    },
    impact: { en: 'Thousands of animals treated annually', hi: 'प्रतिवर्ष हजारों जानवरों का इलाज' },
  },
  gurukul: {
    title: { en: 'Gurukul Vidya', hi: 'गुरुकुल विद्या' },
    shortDesc: { en: 'Vedic Education', hi: 'वैदिक शिक्षा' },
    fullDesc: {
      en: 'We operate schools based on the ancient Hindu Gurukul system where students learn in the guru-shishya parampara tradition. Our curriculum includes Vedic knowledge, Sanskrit, Mythology, Philosophy, Yoga, and modern academics. We nurture young minds to become principled citizens who understand their spiritual heritage and responsibilities to society.',
      hi: 'हम प्राचीन हिंदू गुरुकुल प्रणाली के आधार पर विद्यालय संचालित करते हैं जहां छात्र गुरु-शिष्य परंपरा में सीखते हैं। हमारे पाठ्यक्रम में वैदिक ज्ञान, संस्कृत, पौराणिक कथाएं, दर्शन, योग और आधुनिक विषय शामिल हैं।',
    },
    impact: { en: 'Over 1000 students educated', hi: '1000 से अधिक छात्रों को शिक्षित किया गया' },
  },
  katha: {
    title: { en: 'Religious Propagation', hi: 'धार्मिक प्रचार' },
    shortDesc: { en: 'Spiritual Wisdom Sharing', hi: 'आध्यात्मिक ज्ञान साझा करना' },
    fullDesc: {
      en: 'We organize Shrimad Bhagwat Kathas, Brij-Parikramas, and spiritual discourse sessions that immerse people in the divine wisdom of the scriptures. These events are platforms for spiritual awakening, where participants experience the joy and peace that comes from connecting with sacred knowledge. We bring families and communities together in the spirit of collective devotion.',
      hi: 'हम श्रीमद्भागवत कथा, ब्रज परिक्रमा और आध्यात्मिक प्रवचन आयोजित करते हैं जो लोगों को शास्त्रों के दिव्य ज्ञान में निमग्न करते हैं। ये आयोजन आध्यात्मिक जागृति के मंच हैं।',
    },
    impact: { en: 'Thousands participate in annual events', hi: 'वार्षिक आयोजनों में हजारों भाग लेते हैं' },
  },
  relief: {
    title: { en: 'Karuna Seva — Relief', hi: 'करुणा सेवा — राहत' },
    shortDesc: { en: 'Compassionate Aid in Crisis', hi: 'संकट के समय करुणामयी सहायता' },
    fullDesc: {
      en: 'During natural calamities, famines, and emergencies, we provide immediate relief through food distribution, shelter, and clothing. Our relief teams work tirelessly to reach affected communities and provide assistance without discrimination. We believe that every human being deserves dignity and support during their time of need.',
      hi: 'प्राकृतिक आपदाओं, अकाल और आपातकाल के दौरान, हम खाद्य वितरण, आश्रय और वस्त्र प्रदान करके तत्काल राहत प्रदान करते हैं। हमारी राहत टीमें प्रभावित समुदायों तक पहुंचने और सहायता प्रदान करने के लिए अथक परिश्रम करती हैं।',
    },
    impact: { en: 'Relief provided to 50000+ families', hi: '50000 से अधिक परिवारों को राहत' },
  },
  krishna: {
    title: { en: 'Spiritual Awareness', hi: 'आध्यात्मिक जागृति' },
    shortDesc: { en: 'Krishna Consciousness', hi: 'कृष्ण चेतना' },
    fullDesc: {
      en: 'We teach and share Krishna Consciousness as revealed in the Bhagavad Gita and other sacred texts. Through meditation, kirtan, and spiritual counseling, we help individuals awaken to their true nature and develop a deep, personal relationship with the Divine. This path offers peace, purpose, and lasting happiness.',
      hi: 'हम भगवद्गीता और अन्य पवित्र ग्रंथों में प्रकट कृष्ण चेतना को सिखाते और साझा करते हैं। ध्यान, कीर्तन और आध्यात्मिक परामर्श के माध्यम से, हम व्यक्तियों को उनकी सच्ची प्रकृति के प्रति जागृत होने में मदद करते हैं।',
    },
    impact: { en: 'Lakhs of people connected to spiritual path', hi: 'लाखों लोग आध्यात्मिक पथ से जुड़े' },
  },
  sankirtan: {
    title: { en: 'Sankirtan Movement', hi: 'संकीर्तन आंदोलन' },
    shortDesc: { en: 'Congregational Chanting', hi: 'सामूहिक कीर्तन' },
    fullDesc: {
      en: 'Following the teachings of Lord Chaitanya Mahaprabhu, we promote the powerful practice of Sankirtan — congregational chanting of divine names. This simple yet profound practice is accessible to all and is considered the most effective means of spiritual advancement in this age. We organize group chanting sessions across communities.',
      hi: 'श्री चैतन्य महाप्रभु की शिक्षाओं का पालन करते हुए, हम संकीर्तन — दिव्य नामों का सामूहिक कीर्तन — को बढ़ावा देते हैं। यह सरल लेकिन गहरी प्रथा सभी के लिए सुलभ है और इस युग में आध्यात्मिक प्रगति का सबसे प्रभावी साधन माना जाता है।',
    },
    impact: { en: 'Weekly Sankirtan sessions in multiple cities', hi: 'कई शहरों में साप्ताहिक संकीर्तन सत्र' },
  },
  worship: {
    title: { en: 'Worship & Service', hi: 'पूजा और सेवा' },
    shortDesc: { en: 'Sacred Temples & Nature', hi: 'पवित्र मंदिर और प्रकृति' },
    fullDesc: {
      en: 'We establish and maintain places of worship while practicing reverence towards Prakriti — the sacred Cow, Mother Earth, Trees, Rivers, and all natural elements. Each place of worship becomes a center for spiritual practice and community connection. We serve and protect nature as an expression of devotion to the Divine.',
      hi: 'हम पूजा स्थलों की स्थापना और रखरखाव करते हैं जबकि प्रकृति — पवित्र गौ, मातृ भूमि, वृक्ष, नदियां और सभी प्राकृतिक तत्वों के प्रति श्रद्धा प्रदर्शित करते हैं।',
    },
    impact: { en: 'Multiple temples and worship centers established', hi: 'कई मंदिर और पूजा केंद्र स्थापित' },
  },
  environment: {
    title: { en: 'Environmental Protection', hi: 'पर्यावरण संरक्षण' },
    shortDesc: { en: 'Nature Conservation', hi: 'प्रकृति संरक्षण' },
    fullDesc: {
      en: 'We work actively for environmental protection through tree planting programs, river conservation initiatives, and sustainable living practices. Our goal is to restore and preserve natural ecosystems for future generations. We believe that protecting nature is a spiritual practice that honors the Creator.',
      hi: 'हम वृक्षारोपण कार्यक्रमों, नदी संरक्षण पहलों और टिकाऊ जीवन प्रथाओं के माध्यम से पर्यावरण संरक्षण के लिए सक्रिय रूप से काम करते हैं। हमारा लक्ष्य भविष्य की पीढ़ियों के लिए प्राकृतिक पारिस्थितिकी तंत्र को संरक्षित और पुनः स्थापित करना है।',
    },
    impact: { en: '100000+ trees planted, rivers cleaned', hi: '100000+ वृक्ष लगाए, नदियां साफ की गईं' },
  },
  institution: {
    title: { en: 'Institutional Development', hi: 'संस्थागत विकास' },
    shortDesc: { en: 'Medical & Technical Education', hi: 'चिकित्सा और तकनीकी शिक्षा' },
    fullDesc: {
      en: 'We manage comprehensive educational institutions ranging from Pre-Primary to Post-Graduation in fields like medicine, nursing, engineering, and other technical disciplines. Our institutions serve society with high standards of education while maintaining spiritual values. We aim to create leaders who serve humanity with compassion and excellence.',
      hi: 'हम चिकित्सा, नर्सिंग, इंजीनियरिंग और अन्य तकनीकी विषयों में प्री-प्राइमरी से पोस्ट-ग्रेजुएशन तक व्यापक शैक्षणिक संस्थानों का प्रबंधन करते हैं।',
    },
    impact: { en: 'Thousands of graduates serving society', hi: 'हजारों स्नातक समाज की सेवा कर रहे हैं' },
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
        <div className="sticky top-0 bg-gradient-to-r from-saffron-500 to-saffron-600 px-6 py-6 flex items-start justify-between">
          <div className="flex-1">
            <h2
              className={`text-2xl sm:text-3xl font-bold text-white mb-2 ${
                lang === 'hi' ? 'devanagari-text' : ''
              }`}
            >
              {lang === 'en' ? seva.title.en : seva.title.hi}
            </h2>
            <p className="text-saffron-100 text-sm">
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
            <h3 className="text-lg font-semibold text-maroon-800 mb-3">
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
          <div className="bg-gradient-to-br from-nature-50 to-saffron-50 rounded-xl p-4 border border-nature-200">
            <h3 className="text-lg font-semibold text-nature-700 mb-2">
              {lang === 'en' ? 'Our Impact' : 'हमारा प्रभाव'}
            </h3>
            <p
              className={`text-nature-600 font-medium ${
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
            className="block w-full py-3 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-md text-center"
          >
            {lang === 'en' ? 'Support This Seva' : 'इस सेवा का समर्थन करें'}
          </a>
        </div>
      </div>
    </div>
  );
}
