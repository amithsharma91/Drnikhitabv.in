import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import RelatedServicesSection from '@/components/feature/RelatedServicesSection';
import { relatedServicesMap } from '@/mocks/relatedServicesData';
import GynaeExpertiseHeroSection from './components/GynaeExpertiseHeroSection';
import UnderstandingGynaeSection from './components/UnderstandingGynaeSection';
import CommonConcernsSection from './components/CommonConcernsSection';
import PMOSManagementSection from './components/PMOSManagementSection';
import FibroidTreatmentSection from './components/FibroidTreatmentSection';
import OvarianCystSection from './components/OvarianCystSection';
import HormonalHealthSection from './components/HormonalHealthSection';
import PreventiveCareSection from './components/PreventiveCareSection';
import WhyChooseSection from './components/WhyChooseSection';
import GynaeCTA from './components/GynaeCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function GynaecologicalExpertise() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Gynaecological Expertise | Women's Health Specialist | Dr. Nikhita B Vadvadgi Bangalore"
        description="Expert gynecological care in Bangalore — PMOS management, fibroid treatment, ovarian cysts, hormonal disorders and preventive gynecology by Dr. Nikhita B Vadvadgi. Evidence-based women's healthcare."
        keywords="gynecologist Bangalore, PMOS treatment, fibroid specialist Bangalore, ovarian cyst treatment, hormonal health gynecologist, women's health Basavanagudi, Dr. Nikhita gynecology"
        canonicalPath="/services/gynaecological-expertise"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <GynaeExpertiseHeroSection />
      <UnderstandingGynaeSection />
      <CommonConcernsSection />
      <PMOSManagementSection />
      <FibroidTreatmentSection />
      <OvarianCystSection />
      <HormonalHealthSection />
      <PreventiveCareSection />
      <WhyChooseSection />
      <FAQSection />
      <RelatedServicesSection services={relatedServicesMap['gynaecological-expertise']} />
      <GynaeCTA onBookAppointment={handleBookAppointment} />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
