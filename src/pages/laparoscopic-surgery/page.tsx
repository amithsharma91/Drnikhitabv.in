import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import RelatedServicesSection from '@/components/feature/RelatedServicesSection';
import { relatedServicesMap } from '@/mocks/relatedServicesData';
import LaparoscopicHeroSection from './components/LaparoscopicHeroSection';
import WhatIsLaparoscopicSection from './components/WhatIsLaparoscopicSection';
import BenefitsOfLaparoscopySection from './components/BenefitsOfLaparoscopySection';
import ConditionsTreatedSection from './components/ConditionsTreatedSection';
import FibroidSurgerySection from './components/FibroidSurgerySection';
import OvarianCystSurgerySection from './components/OvarianCystSurgerySection';
import EndometriosisTreatmentSection from './components/EndometriosisTreatmentSection';
import ProcedureOverviewSection from './components/ProcedureOverviewSection';
import RecoveryTimelineSection from './components/RecoveryTimelineSection';
import VSComparisonSection from './components/VSComparisonSection';
import PatientBenefitsSection from './components/PatientBenefitsSection';
import LaparoscopicCTA from './components/LaparoscopicCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function LaparoscopicSurgery() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Laparoscopic Surgery | Keyhole Gynecological Surgery | Dr. Nikhita B Vadvadgi Bangalore"
        description="Advanced laparoscopic gynecological surgery in Bangalore — fibroid removal, ovarian cyst surgery, endometriosis treatment, hysterectomy. Faster recovery, minimal scarring by Dr. Nikhita, FMIS surgeon."
        keywords="laparoscopic surgery Bangalore, keyhole gynecology surgery, laparoscopic hysterectomy, fibroid removal laparoscopy, endometriosis surgery, FMIS laparoscopic surgeon, Dr. Nikhita surgery, Basavanagudi"
        canonicalPath="/services/laparoscopic-surgery"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <LaparoscopicHeroSection />
      <WhatIsLaparoscopicSection />
      <BenefitsOfLaparoscopySection />
      <ConditionsTreatedSection />
      <FibroidSurgerySection />
      <OvarianCystSurgerySection />
      <EndometriosisTreatmentSection />
      <ProcedureOverviewSection />
      <VSComparisonSection />
      <RecoveryTimelineSection />
      <PatientBenefitsSection />
      <FAQSection />
      <RelatedServicesSection services={relatedServicesMap['laparoscopic-surgery']} />
      <LaparoscopicCTA onBookAppointment={handleBookAppointment} />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
