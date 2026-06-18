import { useNavigate } from 'react-router-dom';
import PageHeroSection from '@/components/feature/PageHeroSection';

export default function ServicesHeroSection() {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Premium%20healthcare%20scene%20representing%20pregnancy%20care%20and%20fertility%20support%20and%20gynecology%20and%20womens%20wellness%2C%20soft%20rose%20blush%20and%20sky%20blue%20tones%2C%20elegant%20clinic%20environment%20with%20fresh%20flowers%20and%20warm%20lighting%2C%20sophisticated%20feminine%20medical%20aesthetic%2C%20calming%20and%20trustworthy%20atmosphere%2C%20editorial%20style%2C%20comprehensive%20womens%20health%20care%20visual%20narrative%2C%20beautiful%20medical%20setting&width=1600&height=900&seq=hero-services-2026-v3&orientation=landscape"
      badgeText="Care & Treatments"
      headline="Care & Treatments"
      description="Comprehensive healthcare services for women at every stage of life, from adolescence to menopause."
      primaryCTA={{
        text: 'Book Appointment',
        onClick: () => navigate('/contact'),
      }}
      secondaryCTA={{
        text: 'WhatsApp Now',
        href: 'https://wa.me/918197301494',
        variant: 'solid',
      }}
    />
  );
}
