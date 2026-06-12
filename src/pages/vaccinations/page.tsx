import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import RelatedServicesSection from '@/components/feature/RelatedServicesSection';
import { relatedServicesMap } from '@/mocks/relatedServicesData';
import VaccinationsHeroSection from './components/VaccinationsHeroSection';
import ImportanceOfVaccinationSection from './components/ImportanceOfVaccinationSection';
import AdolescentVaccinationsSection from './components/AdolescentVaccinationsSection';
import HPVVaccinationSection from './components/HPVVaccinationSection';
import AdultVaccinationsSection from './components/AdultVaccinationsSection';
import PregnancyVaccinationsSection from './components/PregnancyVaccinationsSection';
import VaccinationScheduleSection from './components/VaccinationScheduleSection';
import LongTermBenefitsSection from './components/LongTermBenefitsSection';
import VaccinationJourneySection from './components/VaccinationJourneySection';
import VaccinationsCTA from './components/VaccinationsCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function Vaccinations() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Vaccinations | HPV & Women's Health Vaccines | Dr. Nikhita B Vadvadgi Bangalore"
        description="Comprehensive vaccination services for women in Bangalore — HPV vaccine, adolescent vaccinations, adult vaccines and pregnancy-related immunizations by Dr. Nikhita B Vadvadgi."
        keywords="HPV vaccination Bangalore, women's health vaccines, adolescent vaccines, pregnancy vaccinations, immunization specialist Basavanagudi, Dr. Nikhita vaccinations"
        canonicalPath="/services/vaccinations"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <VaccinationsHeroSection onBookAppointment={handleBookAppointment} />
      <ImportanceOfVaccinationSection />
      <AdolescentVaccinationsSection />
      <HPVVaccinationSection />
      <AdultVaccinationsSection />
      <PregnancyVaccinationsSection />
      <VaccinationScheduleSection />
      <LongTermBenefitsSection />
      <VaccinationJourneySection />
      <FAQSection />
      <RelatedServicesSection services={relatedServicesMap['vaccinations']} />
      <VaccinationsCTA onBookAppointment={handleBookAppointment} />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
