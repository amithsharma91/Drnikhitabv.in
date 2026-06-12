import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import RelatedServicesSection from '@/components/feature/RelatedServicesSection';
import { relatedServicesMap } from '@/mocks/relatedServicesData';
import PregnancyCareHeroSection from './components/PregnancyCareHeroSection';
import AntenatalCareSection from './components/AntenatalCareSection';
import PregnancyTimelineSection from './components/PregnancyTimelineSection';
import HighRiskPregnancySection from './components/HighRiskPregnancySection';
import DeliveryPlanningSection from './components/DeliveryPlanningSection';
import PostnatalCareSection from './components/PostnatalCareSection';
import BabyDevelopmentSection from './components/BabyDevelopmentSection';
import PregnancyStatsSection from './components/PregnancyStatsSection';
import PregnancyCareCTA from './components/PregnancyCareCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function PregnancyCare() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Pregnancy Care | Antenatal, Delivery & Postnatal | Dr. Nikhita B Vadvadgi Bangalore"
        description="Complete pregnancy care in Bangalore — antenatal check-ups, high-risk pregnancy management, normal and cesarean delivery, postnatal care by Dr. Nikhita B Vadvadgi, MRCOG (UK) qualified."
        keywords="pregnancy care Bangalore, antenatal care, high-risk pregnancy specialist, delivery doctor Bangalore, postnatal care, obstetrician Basavanagudi, Dr. Nikhita pregnancy"
        canonicalPath="/services/pregnancy-care"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <PregnancyCareHeroSection />
      <AntenatalCareSection />
      <PregnancyTimelineSection />
      <HighRiskPregnancySection />
      <DeliveryPlanningSection />
      <PostnatalCareSection />
      <BabyDevelopmentSection />
      <PregnancyStatsSection />
      <FAQSection />
      <RelatedServicesSection services={relatedServicesMap['pregnancy-care']} />
      <PregnancyCareCTA />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
