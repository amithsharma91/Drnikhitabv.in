import { useNavigate } from 'react-router-dom';
import PageHeroSection from '@/components/feature/PageHeroSection';

export default function PregnancyCareHeroSection() {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=A%20pregnant%20Indian%20woman%20in%20her%20third%20trimester%20receiving%20gentle%20prenatal%20care%20from%20a%20female%20gynecologist%20in%20a%20premium%20maternity%20clinic%20soft%20natural%20lighting%20elegant%20rose%20blush%20and%20white%20interior%20warm%20compassionate%20atmosphere%20doctor%20checking%20baby%20bump%20with%20stethoscope%20modern%20healthcare%20setting&width=1600&height=900&seq=hero-pregnancycare-2026-v1&orientation=landscape"
      badgeText="Pregnancy Care"
      headline="Expert Care For You And Your Baby"
      description="Comprehensive antenatal, delivery and postnatal care designed to support a healthy and confident pregnancy journey."
      primaryCTA={{
        text: 'Book Appointment',
        onClick: () => navigate('/contact'),
      }}
      secondaryCTA={{
        text: 'WhatsApp Now',
        href: 'https://wa.me/918050816686',
        variant: 'solid',
      }}
    />
  );
}
