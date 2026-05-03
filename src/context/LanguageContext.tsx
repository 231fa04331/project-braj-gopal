import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Language = 'en' | 'hi';

interface Translations {
  [key: string]: { en: string; hi: string };
}

const translations: Translations = {
  // Navbar
  'nav.home': { en: 'Home', hi: 'मुख्य पृष्ठ' },
  'nav.about': { en: 'About', hi: 'हमारे बारे में' },
  'nav.sevas': { en: 'Sevas', hi: 'सेवाएं' },
  'nav.gallery': { en: 'Gallery', hi: 'गैलरी' },
  'nav.donate': { en: 'Donate', hi: 'दान करें' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क' },

  // Hero
  'hero.tagline': { en: 'Braj Gopal Trust', hi: 'ब्रज गोपाल ट्रस्ट' },
  'hero.subtitle': { en: 'Charitable Non-Government Organization', hi: 'धर्मार्थ गैर-सरकारी संगठन' },
  'hero.motto': { en: 'Serving All Beings, Protecting All Nature', hi: 'सर्व भूत हिते रताः, प्रकृति रक्षणम्' },
  'hero.cta': { en: 'Explore Our Sevas', hi: 'हमारी सेवाएं देखें' },
  'hero.donate': { en: 'Make a Donation', hi: 'दान करें' },
  'hero.reg': { en: 'Reg. No. IV-31/23', hi: 'पंजी. सं. IV-31/23' },

  // About
  'about.title': { en: 'About the Trust', hi: 'ट्रस्ट के बारे में' },
  'about.subtitle': { en: 'A Legacy of Compassion & Service', hi: 'करुणा और सेवा की विरासत' },
  'about.p1': { en: 'Braj Gopal Trust is a registered charitable NGO (Reg. No. IV-31/23) based in the sacred land of Vrindavan, Mathura. Rooted in the timeless traditions of Sanatan Dharma, the Trust is dedicated to the protection of cows, propagation of Vedic knowledge, and service to all living beings.', hi: 'ब्रज गोपाल ट्रस्ट वृन्दावन, मथुरा की पवित्र भूमि पर स्थित एक पंजीकृत धर्मार्थ एनजीओ (पंजी. सं. IV-31/23) है। सनातन धर्म की शाश्वत परंपराओं में निहित, ट्रस्ट गौ संरक्षण, वैदिक ज्ञान के प्रचार और समस्त प्राणियों की सेवा के लिए समर्पित है।' },
  'about.p2': { en: 'Our work spans the entire Indian territory, encompassing ten distinct objects of service — from Gaushala and Gau Chikitsalaya to Gurukul education and environmental protection. Every initiative is guided by the principle of "Karuna Seva" — compassionate service without expectation.', hi: 'हमारा कार्य सम्पूर्ण भारतीय क्षेत्र में फैला है, जिसमें दस विशिष्ट सेवाएं शामिल हैं — गौशाला और गौ चिकित्सालय से लेकर गुरुकुल शिक्षा और पर्यावरण संरक्षण तक। प्रत्येक पहल "करुणा सेवा" के सिद्धांत से प्रेरित है — बिना अपेक्षा की करुणामयी सेवा।' },
  'about.p3': { en: 'Vrindavan — the land of Lord Krishna\'s divine pastimes — inspires our mission. Here, the sacred Yamuna flows, cows graze in green pastures, and the eternal sound of Sankirtan fills the air. It is from this holy ground that we carry forward the vision of a compassionate, sustainable world.', hi: 'वृन्दावन — भगवान कृष्ण की दिव्य लीलाओं की भूमि — हमारे मिशन को प्रेरित करता है। यहाँ पवित्र यमुना बहती है, गौएं हरे चारागाहों में चरती हैं, और संकीर्तन का शाश्वत ध्वनि वातावरण को भर देता है। इसी पवित्र भूमि से हम एक करुणामयी, टिकाऊ दुनिया की दृष्टि को आगे बढ़ाते हैं।' },

  // Sevas
  'sevas.title': { en: 'Our Mission Pillars', hi: 'हमारे मिशन के स्तंभ' },
  'sevas.subtitle': { en: 'Ten Objects of Sacred Service', hi: 'पवित्र सेवा के दस उद्देश्य' },

  'seva.gaushala.title': { en: 'Gaushala / Gau Seva', hi: 'गौशाला / गौ सेवा' },
  'seva.gaushala.desc': { en: 'Establishing sanctuaries for the lifelong protection of unclaimed cows and bulls — providing shelter, fodder, and veterinary care with love and reverence.', hi: 'अनाथ गौओं और बैलों के आजीवन संरक्षण के लिए आश्रय स्थलों की स्थापना — प्रेम और श्रद्धा से आश्रय, चारा और पशु चिकित्सा प्रदान करना।' },

  'seva.chikitsalaya.title': { en: 'Gau Chikitsalaya', hi: 'गौ चिकित्सालय' },
  'seva.chikitsalaya.desc': { en: 'Operating Ayurvedic veterinary hospitals for cattle and injured animals — blending ancient healing wisdom with modern compassion.', hi: 'गौओं और घायल जानवरों के लिए आयुर्वेदिक पशु चिकित्सालय चलाना — प्राचीन चिकित्सा बुद्धि को आधुनिक करुणा के साथ मिलाना।' },

  'seva.gurukul.title': { en: 'Gurukul Vidya', hi: 'गुरुकुल विद्या' },
  'seva.gurukul.desc': { en: 'Maintaining schools based on ancient Hindu mythology and Shastra education systems — nurturing minds in the Vedic tradition of guru-shishya parampara.', hi: 'प्राचीन हिन्दू पौराणिक और शास्त्र शिक्षा प्रणाली पर आधारित विद्यालय संचालन — गुरु-शिष्य परम्परा की वैदिक परंपरा में मन का पोषण।' },

  'seva.katha.title': { en: 'Religious Propagation', hi: 'धार्मिक प्रचार' },
  'seva.katha.desc': { en: 'Organizing Shrimad Bhagwat Kathas and Brij-Parikramas — spreading the divine wisdom of scriptures through immersive spiritual experiences.', hi: 'श्रीमद्भागवत कथा और ब्रज-परिक्रमा का आयोजन — शास्त्रों की दिव्य ज्ञान को आत्मनिवेशक आध्यात्मिक अनुभवों के माध्यम से फैलाना।' },

  'seva.relief.title': { en: 'Karuna Seva — Relief', hi: 'करुणा सेवा — राहत' },
  'seva.relief.desc': { en: 'Providing food, shelter, and clothing during calamities — hunger relief and disaster response rooted in the spirit of selfless compassion.', hi: 'आपदाओं के दौरान भोजन, आश्रय और वस्त्र प्रदान करना — निःस्वार्थ करुणा की भावना से प्रेरित भूख राहत और आपदा प्रतिक्रिया।' },

  'seva.krishna.title': { en: 'Spiritual Awareness', hi: 'आध्यात्मिक जागृति' },
  'seva.krishna.desc': { en: 'Sharing Krishna Consciousness as revealed in the Bhagavad Gita — illuminating hearts with the eternal wisdom of the Supreme Lord.', hi: 'भगवद्गीता में प्रकट कृष्ण चेतना का प्रसार — परम प्रभु की शाश्वत ज्ञान से हृदयों को आलोकित करना।' },

  'seva.sankirtan.title': { en: 'Sankirtan Movement', hi: 'संकीर्तन आंदोलन' },
  'seva.sankirtan.desc': { en: 'Promoting congregational chanting as taught by Lord Chaitanya Mahaprabhu — the simplest and most powerful path to spiritual awakening in this age.', hi: 'श्री चैतन्य महाप्रभु द्वारा शिखित सामूहिक कीर्तन को बढ़ावा देना — इस युग में आध्यात्मिक जागृति का सबसे सरल और शक्तिशाली मार्ग।' },

  'seva.worship.title': { en: 'Worship & Service', hi: 'पूजा और सेवा' },
  'seva.worship.desc': { en: 'Erecting places of worship and serving Prakriti — the sacred Cow, Mother Earth, Trees, and Rivers that sustain all life.', hi: 'पूजा स्थलों का निर्माण और प्रकृति की सेवा — पवित्र गौ, मातृ भूमि, वृक्ष और नदियां जो समस्त जीवन को धारण करती हैं।' },

  'seva.environment.title': { en: 'Environmental Protection', hi: 'पर्यावरण संरक्षण' },
  'seva.environment.desc': { en: 'Working for the active promotion and protection of nature — tree planting, river conservation, and sustainable living as an expression of devotion to Mother Earth.', hi: 'प्रकृति के सक्रिय प्रचार और संरक्षण के लिए कार्य — वृक्षारोपण, नदी संरक्षण और टिकाऊ जीवन जो मातृ भूमि के प्रति भक्ति के रूप में है।' },

  'seva.institution.title': { en: 'Institutional Development', hi: 'संस्थागत विकास' },
  'seva.institution.desc': { en: 'Managing medical, professional, and technical educational institutes from Pre-Primary to Post-Graduation — building institutions that serve society for generations.', hi: 'प्री-प्राइमरी से पोस्ट-ग्रेजुएशन तक चिकित्सा, व्यावसायिक और तकनीकी शैक्षणिक संस्थानों का प्रबंधन — ऐसे संस्थान बनाना जो पीढ़ियों तक समाज की सेवा करें।' },

  // Gallery
  'gallery.title': { en: 'Gallery', hi: 'गैलरी' },
  'gallery.subtitle': { en: 'Glimpses of Our Service', hi: 'हमारी सेवा की झलकियां' },

  // Donate
  'donate.title': { en: 'Support Our Mission', hi: 'हमारे मिशन का समर्थन करें' },
  'donate.subtitle': { en: 'Your Generosity Fuels Compassion', hi: 'आपकी उदारता करुणा को बल देती है' },
  'donate.p1': { en: 'Every contribution, big or small, directly supports our Gaushala, Gurukul, and relief services. Donations to Braj Gopal Trust are eligible for tax exemption under Section 80G of the Income Tax Act.', hi: 'प्रत्येक योगदान, बड़ा या छोटा, सीधे हमारी गौशाला, गुरुकुल और राहत सेवाओं का समर्थन करता है। ब्रज गोपाल ट्रस्ट को दान आयकर अधिनियम की धारा 80G के तहत कर छूट के लिए पात्र है।' },
  'donate.p2': { en: 'Choose an amount below or enter a custom donation. You will receive an automated 80G tax receipt via email.', hi: 'नीचे एक राशि चुनें या अपनी मनचाही राशि दर्ज करें। आपको ईमेल द्वारा स्वचालित 80G कर रसीद प्राप्त होगी।' },
  'donate.custom': { en: 'Custom Amount', hi: 'अपनी राशि' },
  'donate.monthly': { en: 'Monthly', hi: 'मासिक' },
  'donate.once': { en: 'One-time', hi: 'एकमुश्त' },
  'donate.button': { en: 'Donate Now', hi: 'अभी दान करें' },
  'donate.secure': { en: 'Secured by Razorpay — 100% Safe', hi: 'रजोरपे द्वारा सुरक्षित — 100% सुरक्षित' },
  'donate.receipt': { en: '80G Tax Receipt will be sent to your email', hi: '80G कर रसीद आपके ईमेल पर भेजी जाएगी' },

  // Contact
  'contact.title': { en: 'Get in Touch', hi: 'संपर्क करें' },
  'contact.subtitle': { en: 'We Would Love to Hear From You', hi: 'हम आपसे सुनना चाहेंगे' },
  'contact.name': { en: 'Full Name', hi: 'पूरा नाम' },
  'contact.email': { en: 'Email Address', hi: 'ईमेल पता' },
  'contact.phone': { en: 'Phone Number', hi: 'फोन नंबर' },
  'contact.message': { en: 'Your Message', hi: 'आपका संदेश' },
  'contact.send': { en: 'Send Message', hi: 'संदेश भेजें' },
  'contact.address': { en: 'Pani Gaun Khadar, Mohini Nagar, Vrindavan, Mathura, UP — 281121', hi: 'पानी गांव खादर, मोहिनी नगर, वृन्दावन, मथुरा, उ.प्र. — 281121' },
  'contact.success': { en: 'Message sent successfully! We will respond soon.', hi: 'संदेश सफलतापूर्वक भेजा गया! हम जल्द ही जवाब देंगे।' },

  // Footer
  'footer.mission': { en: 'Serving All Beings, Protecting All Nature', hi: 'सर्व भूत हिते रताः, प्रकृति रक्षणम्' },
  'footer.rights': { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।' },
  'footer.quick': { en: 'Quick Links', hi: 'त्वरित लिंक' },
  'footer.sevas': { en: 'Our Sevas', hi: 'हमारी सेवाएं' },
  'footer.legal': { en: 'Legal', hi: 'कानूनी' },
  'footer.privacy': { en: 'Privacy Policy', hi: 'गोपनीयता नीति' },
  'footer.terms': { en: 'Terms of Service', hi: 'सेवा की शर्तें' },
  'footer.80g': { en: '80G Tax Exemption', hi: '80G कर छूट' },
};

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang] || entry.en || key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
