import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import PageSEO from '@/components/feature/PageSEO';
import TestimonialsHeroSection from './components/TestimonialsHeroSection';
import GoogleReviewsSection from './components/GoogleReviewsSection';
import TestimonialVideosSection from './components/TestimonialVideosSection';
import TestimonialsCTA from './components/TestimonialsCTA';
import FAQSection from '@/pages/home/components/FAQSection';

export default function Testimonials() {
  const navigate = useNavigate();

  const handleBookAppointment = useCallback(() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Patient Testimonials & Reviews | Dr. Nikhita B Vadvadgi | Best Gynecologist Bangalore"
        description="Read genuine patient reviews and testimonials for Dr. Nikhita B Vadvadgi — trusted gynecologist and obstetrician in Bangalore. 100+ five-star Google reviews from satisfied patients."
        keywords="Dr. Nikhita reviews, gynecologist patient testimonials Bangalore, best gynecologist reviews Basavanagudi, women's health doctor feedback, pregnancy care reviews"
        canonicalPath="/testimonials"
      />
      <Header onBookAppointment={handleBookAppointment} />

      <TestimonialsHeroSection />
      <GoogleReviewsSection />
      <TestimonialVideosSection />
      <TestimonialsCTA />
      <FAQSection />

      <Footer />
    </main>
  );
}
