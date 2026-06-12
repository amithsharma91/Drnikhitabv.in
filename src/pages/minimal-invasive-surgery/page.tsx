import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import RelatedServicesSection from '@/components/feature/RelatedServicesSection';
import { relatedServicesMap } from '@/mocks/relatedServicesData';
import MISHeroSection from './components/MISHeroSection';
import WhatIsMISSection from './components/WhatIsMISSection';
import BenefitsSection from './components/BenefitsSection';
import ComparisonSection from './components/ComparisonSection';
import LaparoscopicSurgerySection from './components/LaparoscopicSurgerySection';
import HysteroscopicSurgerySection from './components/HysteroscopicSurgerySection';
import ConditionsTreatedSection from './components/ConditionsTreatedSection';
import SurgicalJourneySection from './components/SurgicalJourneySection';
import SafetyPrecisionSection from './components/SafetyPrecisionSection';
import MISCTA from './components/MISCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function MinimalInvasiveSurgery() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Minimally Invasive Surgery | Laparoscopic & Hysteroscopic | Dr. Nikhita B Vadvadgi Bangalore"
        description="Advanced minimally invasive gynecological surgery in Bangalore — laparoscopic and hysteroscopic procedures for faster recovery, minimal scarring and less pain by Dr. Nikhita, FMIS qualified surgeon."
        keywords="minimally invasive surgery Bangalore, laparoscopic surgeon, hysteroscopic surgery, keyhole surgery gynecology, FMIS specialist Basavanagudi, Dr. Nikhita laparoscopic surgery"
        canonicalPath="/services/minimal-invasive-surgery"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <MISHeroSection />
      <WhatIsMISSection />
      <BenefitsSection />
      <ComparisonSection />
      <LaparoscopicSurgerySection />
      <HysteroscopicSurgerySection />
      <ConditionsTreatedSection />
      <SurgicalJourneySection />
      <SafetyPrecisionSection />
      <FAQSection />
      <RelatedServicesSection services={relatedServicesMap['minimal-invasive-surgery']} />
      <MISCTA onBookAppointment={handleBookAppointment} />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
