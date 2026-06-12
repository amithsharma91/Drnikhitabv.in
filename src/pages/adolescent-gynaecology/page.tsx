import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import RelatedServicesSection from '@/components/feature/RelatedServicesSection';
import { relatedServicesMap } from '@/mocks/relatedServicesData';
import AdolescentHeroSection from './components/AdolescentHeroSection';
import UnderstandingAdolescentHealthSection from './components/UnderstandingAdolescentHealthSection';
import CommonConcernsSection from './components/CommonConcernsSection';
import GrowthTimelineSection from './components/GrowthTimelineSection';
import PMOSInTeenagersSection from './components/PMOSInTeenagersSection';
import HormonalHealthSection from './components/HormonalHealthSection';
import HealthEducationSection from './components/HealthEducationSection';
import EarlyCareStatsSection from './components/EarlyCareStatsSection';
import AdolescentCTA from './components/AdolescentCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function AdolescentGynaecology() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Adolescent Gynaecology | Teen Women's Health Specialist | Dr. Nikhita B Vadvadgi Bangalore"
        description="Expert adolescent gynecology care in Bangalore — menstrual health, hormonal issues, PMOS management, growth concerns and reproductive health education for teenage girls by Dr. Nikhita."
        keywords="adolescent gynecologist Bangalore, teenage gynecology specialist, teen menstrual health, PMOS treatment for teenagers, adolescent reproductive health Basavanagudi, Dr. Nikhita adolescent care"
        canonicalPath="/services/adolescent-gynaecology"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <AdolescentHeroSection />
      <UnderstandingAdolescentHealthSection />
      <CommonConcernsSection />
      <GrowthTimelineSection />
      <PMOSInTeenagersSection />
      <HormonalHealthSection />
      <HealthEducationSection />
      <EarlyCareStatsSection />
      <FAQSection />
      <RelatedServicesSection services={relatedServicesMap['adolescent-gynaecology']} />
      <AdolescentCTA />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
