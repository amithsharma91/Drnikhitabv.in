import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import RelatedServicesSection from '@/components/feature/RelatedServicesSection';
import { relatedServicesMap } from '@/mocks/relatedServicesData';
import MenopauseHeroSection from './components/MenopauseHeroSection';
import UnderstandingMenopauseSection from './components/UnderstandingMenopauseSection';
import CommonSymptomsSection from './components/CommonSymptomsSection';
import HormonalChangesSection from './components/HormonalChangesSection';
import MenopauseManagementSection from './components/MenopauseManagementSection';
import BoneHealthSection from './components/BoneHealthSection';
import LifestyleNutritionSection from './components/LifestyleNutritionSection';
import EmotionalWellbeingSection from './components/EmotionalWellbeingSection';
import MenopauseCTA from './components/MenopauseCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function MenopauseCare() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Menopause Care | Hormonal Health & Wellness | Dr. Nikhita B Vadvadgi Bangalore"
        description="Expert menopause care and management in Bangalore — hormonal changes, symptom relief, bone health, lifestyle guidance and emotional wellbeing support by Dr. Nikhita B Vadvadgi."
        keywords="menopause treatment Bangalore, menopause specialist, hormonal health gynecologist, menopause symptoms management, bone health women, Dr. Nikhita menopause care, Basavanagudi gynecologist"
        canonicalPath="/services/menopause-care"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <MenopauseHeroSection onBookAppointment={handleBookAppointment} />
      <UnderstandingMenopauseSection />
      <CommonSymptomsSection />
      <HormonalChangesSection />
      <MenopauseManagementSection />
      <BoneHealthSection />
      <LifestyleNutritionSection />
      <EmotionalWellbeingSection />
      <FAQSection />
      <RelatedServicesSection services={relatedServicesMap['menopause-care']} />
      <MenopauseCTA onBookAppointment={handleBookAppointment} />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
