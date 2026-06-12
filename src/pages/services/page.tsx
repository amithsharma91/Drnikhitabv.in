import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import PageSEO from '@/components/feature/PageSEO';
import ServicesHeroSection from './components/ServicesHeroSection';
import ServicesOverviewSection from './components/ServicesOverviewSection';
import ServicesCTA from './components/ServicesCTA';

export default function Services() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Care & Treatments | Gynecological & Obstetric Services | Dr. Nikhita B Vadvadgi"
        description="Comprehensive women's healthcare services in Bangalore — pregnancy care, gynecology, fertility care, laparoscopic surgery, menopause care, adolescent health. Expert care by Dr. Nikhita."
        keywords="gynecology services Bangalore, pregnancy care Bangalore, fertility treatment Bangalore, laparoscopic surgery Bangalore, women's health services, obstetric services Basavanagudi"
        canonicalPath="/services"
      />
      <Header onBookAppointment={() => navigate('/contact')} />

      <ServicesHeroSection />
      <ServicesOverviewSection />
      <ServicesCTA />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
