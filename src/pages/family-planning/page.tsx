import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import RelatedServicesSection from '@/components/feature/RelatedServicesSection';
import { relatedServicesMap } from '@/mocks/relatedServicesData';
import FamilyPlanningHeroSection from './components/FamilyPlanningHeroSection';
import UnderstandingFamilyPlanningSection from './components/UnderstandingFamilyPlanningSection';
import ContraceptiveOptionsSection from './components/ContraceptiveOptionsSection';
import TemporaryMethodsSection from './components/TemporaryMethodsSection';
import LongTermMethodsSection from './components/LongTermMethodsSection';
import BirthSpacingSection from './components/BirthSpacingSection';
import ReproductivePlanningSection from './components/ReproductivePlanningSection';
import FamilyPlanningCounsellingSection from './components/FamilyPlanningCounsellingSection';
import FamilyPlanningRoadmapSection from './components/FamilyPlanningRoadmapSection';
import WhyFamilyPlanningSection from './components/WhyFamilyPlanningSection';
import FamilyPlanningCTA from './components/FamilyPlanningCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function FamilyPlanning() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Family Planning | Contraception Counselling & Methods | Dr. Nikhita B Vadvadgi Bangalore"
        description="Expert family planning and contraception counselling in Bangalore — temporary and long-term methods, birth spacing, reproductive planning by Dr. Nikhita B Vadvadgi. Confidential, judgment-free care."
        keywords="family planning Bangalore, contraception counselling, birth spacing, contraceptive methods, reproductive planning gynecologist, Dr. Nikhita family planning, Basavanagudi"
        canonicalPath="/services/family-planning"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <FamilyPlanningHeroSection />
      <UnderstandingFamilyPlanningSection />
      <ContraceptiveOptionsSection />
      <TemporaryMethodsSection />
      <LongTermMethodsSection />
      <BirthSpacingSection />
      <ReproductivePlanningSection />
      <FamilyPlanningCounsellingSection />
      <FamilyPlanningRoadmapSection />
      <WhyFamilyPlanningSection />
      <FAQSection />
      <RelatedServicesSection services={relatedServicesMap['family-planning']} />
      <FamilyPlanningCTA onBookAppointment={handleBookAppointment} />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
