import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sevas from './components/Sevas';
import Gallery from './components/Gallery';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <Sevas />
        <Gallery />
        <Donate />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
