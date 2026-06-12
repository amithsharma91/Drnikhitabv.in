import { useCallback } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FAQSection from '@/pages/home/components/FAQSection';
import ContactHeroSection from './components/ContactHeroSection';
import AppointmentFormSection from './components/AppointmentFormSection';
import ContactDetailsSection from './components/ContactDetailsSection';
import StickyCTA from './components/StickyCTA';

export default function Contact() {
  const scrollToForm = useCallback(() => {
    const el = document.getElementById('appointment-form');
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Contact & Book Appointment | Dr. Nikhita B Vadvadgi | Gynecologist Bangalore"
        description="Book your appointment with Dr. Nikhita B Vadvadgi at South End Speciality Clinic, Basavanagudi, Bangalore. Call +91 80508 16686 or fill the online form. Mon-Sat: 9AM-10AM & 4PM-9PM."
        keywords="book gynecologist appointment Bangalore, Dr. Nikhita contact number, gynecologist clinic Basavanagudi, women's health consultation Bangalore, obstetrician appointment"
        canonicalPath="/contact"
      />
      <Header onBookAppointment={scrollToForm} />

      <ContactHeroSection />
      <AppointmentFormSection />
      <ContactDetailsSection />
      <FAQSection />

      <Footer />

      <StickyCTA />
    </main>
  );
}
