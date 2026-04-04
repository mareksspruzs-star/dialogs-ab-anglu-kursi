import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Calendar from './components/Calendar';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Instructors from './components/Instructors';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setShowPrivacyPolicy(window.location.hash === '#privatuma-politika');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (showPrivacyPolicy) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <PrivacyPolicy />
        <Footer />
        <FloatingWhatsAppButton />
        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Courses />
      <Calendar />
      <Testimonials />
      <Instructors />
      <FAQ />
      <ContactForm />
      <Footer />
      <CookieBanner />
      <FloatingWhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export default App;