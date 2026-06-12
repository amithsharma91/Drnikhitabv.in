import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import AboutHeroSection from './components/AboutHeroSection';
import ProfessionalIntroductionSection from './components/ProfessionalIntroductionSection';
import CareerTimelineSection from './components/CareerTimelineSection';
import QualificationsSection from './components/QualificationsSection';
import MembershipsSection from './components/MembershipsSection';
import AboutCTA from './components/AboutCTA';

export default function About() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="About Dr. Nikhita B Vadvadgi | Qualifications & Experience | Bangalore Gynecologist"
        description="Learn about Dr. Nikhita B Vadvadgi — MBBS, MS, DNB, MRCOG (UK), FMIS, FRM qualified gynecologist in Bangalore with 12+ years experience in obstetrics, gynecology and laparoscopic surgery."
        keywords="Dr. Nikhita Vadvadgi qualifications, gynecologist Bangalore experience, MRCOG UK gynecologist, laparoscopic surgeon Bangalore, best obstetrician Basavanagudi"
        canonicalPath="/about"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <AboutHeroSection />
      <ProfessionalIntroductionSection />
      <CareerTimelineSection />
      <QualificationsSection />
      <MembershipsSection />
      <AboutCTA />

      <Footer />
    </main>
  );
}
