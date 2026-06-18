import { useState, useEffect, useCallback, useRef } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import LoadingScreen from '@/components/feature/LoadingScreen';
import PageSEO from '@/components/feature/PageSEO';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import CareTreatmentsSection from './components/CareTreatmentsSection';
import TrustSection from './components/TrustSection';
import WhyChooseSection from './components/WhyChooseSection';
import PatientJourneySection from './components/PatientJourneySection';
import TestimonialsSection from './components/TestimonialsSection';
import HomeGallerySection from './components/HomeGallerySection';
import FAQSection from './components/FAQSection';
import HomeMapSection from './components/HomeMapSection';
import CTASection from './components/CTASection';
import AppointmentModal from './components/AppointmentModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleLoadingComplete = useCallback(() => {
    setContentReady(true);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!contentReady) return;

    const style = document.createElement('style');
    style.textContent = `
      body { font-family: 'Plus Jakarta Sans', sans-serif; }
      ::selection { background-color: rgba(216, 140, 165, 0.2); color: #2D3748; }
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: #FFF8FB; }
      ::-webkit-scrollbar-thumb { background: #E8C4D0; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: #D88CA5; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [contentReady]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <main
        ref={scrollContainerRef}
        className={`min-h-screen bg-background-50 overflow-x-hidden transition-opacity duration-700 ${
          contentReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <PageSEO
          title="Dr. Nikhita B Vadvadgi | Best Gynecologist in Bangalore | Women's Health & Fertility Specialist"
          description="Dr. Nikhita B Vadvadgi — Leading Consultant Obstetrician, Gynecologist, Laparoscopic Surgeon and Infertility Specialist in Bangalore. Expert women's healthcare with 12+ years experience. Book now."
          keywords="gynecologist Bangalore, obstetrician Bangalore, women's health specialist, laparoscopic surgeon Basavanagudi, infertility specialist Bangalore, pregnancy care, Dr. Nikhita Vadvadgi, best gynecologist Banashankari"
          canonicalPath="/"
        />
        <Header onBookAppointment={openModal} />

        <HeroSection onBookAppointment={openModal} />
        <StatsSection />
        <AboutSection />
        <CareTreatmentsSection />
        <WhyChooseSection />
        <TrustSection />
        <PatientJourneySection />
        <TestimonialsSection />
        <HomeGallerySection />
        <HomeMapSection />
        <FAQSection />
        <CTASection onBookAppointment={openModal} />

        <Footer />

        <FloatingWhatsApp />
        <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </>
  );
}
