import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import RelatedServicesSection from '@/components/feature/RelatedServicesSection';
import { relatedServicesMap } from '@/mocks/relatedServicesData';
import HysteroscopicHeroSection from './components/HysteroscopicHeroSection';
import WhatIsHysteroscopySection from './components/WhatIsHysteroscopySection';
import HysteroscopicBenefitsSection from './components/HysteroscopicBenefitsSection';
import HysteroscopicConditionsSection from './components/HysteroscopicConditionsSection';
import FibroidRemovalSection from './components/FibroidRemovalSection';
import PolypRemovalSection from './components/PolypRemovalSection';
import DiagnosticHysteroscopySection from './components/DiagnosticHysteroscopySection';
import TreatmentProcessSection from './components/TreatmentProcessSection';
import ProcedureComparisonSection from './components/ProcedureComparisonSection';
import RecoveryInfoSection from './components/RecoveryInfoSection';
import HysteroscopicTimelineSection from './components/HysteroscopicTimelineSection';
import HysteroscopicPatientBenefitsSection from './components/HysteroscopicPatientBenefitsSection';
import HysteroscopicCTA from './components/HysteroscopicCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function HysteroscopicSurgery() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Hysteroscopic Surgery | Uterine Diagnostic & Operative | Dr. Nikhita B Vadvadgi Bangalore"
        description="Expert hysteroscopic surgery in Bangalore — diagnostic hysteroscopy, fibroid removal, polyp removal and uterine procedures. No incisions, faster recovery by Dr. Nikhita B Vadvadgi, FMIS surgeon."
        keywords="hysteroscopic surgery Bangalore, hysteroscopy procedure, uterine fibroid removal, endometrial polyp removal, diagnostic hysteroscopy, Dr. Nikhita hysteroscopy, FMIS specialist Basavanagudi"
        canonicalPath="/services/hysteroscopic-surgery"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <HysteroscopicHeroSection />
      <WhatIsHysteroscopySection />
      <HysteroscopicBenefitsSection />
      <HysteroscopicConditionsSection />
      <FibroidRemovalSection />
      <PolypRemovalSection />
      <DiagnosticHysteroscopySection />
      <TreatmentProcessSection />
      <ProcedureComparisonSection />
      <RecoveryInfoSection />
      <HysteroscopicTimelineSection />
      <HysteroscopicPatientBenefitsSection />
      <FAQSection />
      <RelatedServicesSection services={relatedServicesMap['hysteroscopic-surgery']} />
      <HysteroscopicCTA onBookAppointment={handleBookAppointment} />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
