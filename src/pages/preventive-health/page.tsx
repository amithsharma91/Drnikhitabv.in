import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import RelatedServicesSection from '@/components/feature/RelatedServicesSection';
import { relatedServicesMap } from '@/mocks/relatedServicesData';
import PreventiveHealthHeroSection from './components/PreventiveHealthHeroSection';
import WhyPreventiveSection from './components/WhyPreventiveSection';
import HealthCheckupsSection from './components/HealthCheckupsSection';
import CervicalCancerScreeningSection from './components/CervicalCancerScreeningSection';
import BreastHealthSection from './components/BreastHealthSection';
import PreventionStrategiesSection from './components/PreventionStrategiesSection';
import HealthAssessmentsSection from './components/HealthAssessmentsSection';
import WellnessGuidanceSection from './components/WellnessGuidanceSection';
import EarlyDetectionTimelineSection from './components/EarlyDetectionTimelineSection';
import PreventiveStatsSection from './components/PreventiveStatsSection';
import PreventiveCTA from './components/PreventiveCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function PreventiveHealth() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Preventive Health Screening | Women's Wellness Checkups | Dr. Nikhita B Vadvadgi Bangalore"
        description="Comprehensive preventive health screening for women in Bangalore — cervical cancer screening, breast health, wellness assessments and early detection by Dr. Nikhita B Vadvadgi."
        keywords="preventive health screening Bangalore, women's wellness checkup, cervical cancer screening, breast health check, gynecological preventive care Basavanagudi, Dr. Nikhita health screening"
        canonicalPath="/services/preventive-health-screening"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <PreventiveHealthHeroSection onBookAppointment={handleBookAppointment} />
      <WhyPreventiveSection />
      <HealthCheckupsSection />
      <CervicalCancerScreeningSection />
      <BreastHealthSection />
      <PreventionStrategiesSection />
      <HealthAssessmentsSection />
      <WellnessGuidanceSection />
      <EarlyDetectionTimelineSection />
      <PreventiveStatsSection />
      <FAQSection />
      <RelatedServicesSection services={relatedServicesMap['preventive-health']} />
      <PreventiveCTA onBookAppointment={handleBookAppointment} />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
