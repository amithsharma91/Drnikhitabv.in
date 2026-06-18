import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import RelatedServicesSection from '@/components/feature/RelatedServicesSection';
import { relatedServicesMap } from '@/mocks/relatedServicesData';
import FertilityCareHeroSection from './components/FertilityCareHeroSection';
import UnderstandingFertilitySection from './components/UnderstandingFertilitySection';
import FertilityAssessmentSection from './components/FertilityAssessmentSection';
import FemaleFertilityEvaluationSection from './components/FemaleFertilityEvaluationSection';
import OvulationDisordersSection from './components/OvulationDisordersSection';
import HormonalBalanceSection from './components/HormonalBalanceSection';
import FertilityCounsellingSection from './components/FertilityCounsellingSection';
import PersonalizedTreatmentSection from './components/PersonalizedTreatmentSection';
import SuccessJourneySection from './components/SuccessJourneySection';
import FertilityStatsSection from './components/FertilityStatsSection';
import FertilityCTA from './components/FertilityCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function FertilityCare() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Fertility Care | Infertility Evaluation & Treatment | Dr. Nikhita B Vadvadgi Bangalore"
        description="Comprehensive fertility care in Bangalore — infertility evaluation, ovulation disorders, hormonal balance, fertility counselling and personalized treatment plans by Dr. Nikhita, FRM qualified specialist."
        keywords="fertility specialist Bangalore, infertility treatment, fertility evaluation, ovulation induction, reproductive medicine Bangalore, FRM fertility doctor, Dr. Nikhita fertility care, Basavanagudi"
        canonicalPath="/services/fertility-care"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <FertilityCareHeroSection />
      <UnderstandingFertilitySection />
      <FertilityAssessmentSection />
      <FemaleFertilityEvaluationSection />
      <OvulationDisordersSection />
      <HormonalBalanceSection />
      <FertilityCounsellingSection />
      <PersonalizedTreatmentSection />
      <SuccessJourneySection />
      <FertilityStatsSection />
      <FAQSection />
      <RelatedServicesSection services={relatedServicesMap['fertility-care']} />
      <FertilityCTA onBookAppointment={handleBookAppointment} />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
