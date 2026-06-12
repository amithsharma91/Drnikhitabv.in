import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import RelatedServicesSection from '@/components/feature/RelatedServicesSection';
import { relatedServicesMap } from '@/mocks/relatedServicesData';
import PrePregnancyHeroSection from './components/PrePregnancyHeroSection';
import WhyPreconceptionSection from './components/WhyPreconceptionSection';
import HealthScreeningSection from './components/HealthScreeningSection';
import MedicalHistorySection from './components/MedicalHistorySection';
import LifestyleAssessmentSection from './components/LifestyleAssessmentSection';
import NutritionGuidanceSection from './components/NutritionGuidanceSection';
import FolicAcidSection from './components/FolicAcidSection';
import RiskAssessmentSection from './components/RiskAssessmentSection';
import PregnancyRoadmapSection from './components/PregnancyRoadmapSection';
import PrePregnancyCTA from './components/PrePregnancyCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function PrePregnancy() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Pre-Pregnancy Check-Up | Preconception Care & Planning | Dr. Nikhita B Vadvadgi Bangalore"
        description="Comprehensive pre-pregnancy check-up and preconception counselling in Bangalore. Health screening, nutrition guidance, risk assessment and fertility planning by Dr. Nikhita B Vadvadgi."
        keywords="pre-pregnancy checkup Bangalore, preconception counselling, fertility planning Bangalore, pre-pregnancy health screening, Dr. Nikhita preconception care, pregnancy planning Basavanagudi"
        canonicalPath="/services/pre-pregnancy-checkup"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <PrePregnancyHeroSection />
      <WhyPreconceptionSection />
      <HealthScreeningSection />
      <MedicalHistorySection />
      <LifestyleAssessmentSection />
      <NutritionGuidanceSection />
      <FolicAcidSection />
      <RiskAssessmentSection />
      <PregnancyRoadmapSection />
      <FAQSection />
      <RelatedServicesSection services={relatedServicesMap['pre-pregnancy-checkup']} />
      <PrePregnancyCTA />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
