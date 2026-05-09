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
  'about.p2': { en: 'Our work spans the entire Indian territory, encompassing service to sacred cows and saints. Every initiative is guided by the principle of "Karuna Seva" — compassionate service without expectation.', hi: 'हमारा कार्य सम्पूर्ण भारतीय क्षेत्र में फैला है, जिसमें पवित्र गौओं और संतों की सेवा शामिल है। प्रत्येक पहल "करुणा सेवा" के सिद्धांत से प्रेरित है — बिना अपेक्षा की करुणामयी सेवा।' },
  'about.p3': { en: 'Vrindavan — the land of Lord Krishna\'s divine pastimes — inspires our mission. Here, the sacred Yamuna flows, cows graze in green pastures, and the eternal sound of Sankirtan fills the air. It is from this holy ground that we carry forward the vision of a compassionate, sustainable world.', hi: 'वृन्दावन — भगवान कृष्ण की दिव्य लीलाओं की भूमि — हमारे मिशन को प्रेरित करता है। यहाँ पवित्र यमुना बहती है, गौएं हरे चारागाहों में चरती हैं, और संकीर्तन का शाश्वत ध्वनि वातावरण को भर देता है। इसी पवित्र भूमि से हम एक करुणामयी, टिकाऊ दुनिया की दृष्टि को आगे बढ़ाते हैं।' },

  // Sevas
  'sevas.title': { en: 'Our Sevas', hi: 'हमारी सेवाएं' },
  'sevas.subtitle': { en: 'Sacred Service in the Land of Krishna', hi: 'कृष्ण भूमि में पवित्र सेवा' },

  'seva.gauseva.title': { en: 'Gau Seva', hi: 'गौ सेवा' },
  'seva.gauseva.desc': { en: 'Protecting and serving sacred cows — providing shelter, fodder, and veterinary care with love and reverence in the holy land of Vrindavan.', hi: 'पवित्र गौओं का संरक्षण और सेवा — वृन्दावन की पवित्र भूमि में प्रेम और श्रद्धा से आश्रय, चारा और पशु चिकित्सा प्रदान करना।' },

  'seva.sadhu.title': { en: 'Sadhu Seva', hi: 'साधु सेवा' },
  'seva.sadhu.desc': { en: 'Kirtan, Bhagawat Katha, and food to people monthly once — serving saints and nourishing the spiritual fabric of Vrindavan.', hi: 'कीर्तन, भागवत कथा और मासिक एक बार लोगों को भोजन — संतों की सेवा और वृन्दावन की आध्यात्मिक नींव को पोषित करना।' },

  // Gallery
  'gallery.title': { en: 'Gallery', hi: 'गैलरी' },
  'gallery.subtitle': { en: 'Glimpses of Our Service', hi: 'हमारी सेवा की झलकियां' },

  // Donate
  'donate.title': { en: 'Support Our Mission', hi: 'हमारे मिशन का समर्थन करें' },
  'donate.subtitle': { en: 'Your Generosity Fuels Compassion', hi: 'आपकी उदारता करुणा को बल देती है' },
  'donate.p1': { en: 'Every contribution, big or small, directly supports our Gau Seva and Sadhu Seva. Donations to Braj Gopal Trust are eligible for tax exemption under Section 80G of the Income Tax Act.', hi: 'प्रत्येक योगदान, बड़ा या छोटा, सीधे हमारी गौ सेवा और साधु सेवा का समर्थन करता है। ब्रज गोपाल ट्रस्ट को दान आयकर अधिनियम की धारा 80G के तहत कर छूट के लिए पात्र है।' },
  'donate.p2': { en: 'Scan the QR code to donate. For 80G tax exemption, provide your PAN details above.', hi: 'दान करने के लिए QR कोड स्कैन करें। 80G कर छूट के लिए, ऊपर अपना PAN विवरण दें।' },
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
