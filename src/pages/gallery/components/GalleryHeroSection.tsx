import { useNavigate } from 'react-router-dom';
import PageHeroSection from '@/components/feature/PageHeroSection';

export default function GalleryHeroSection() {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Luxury%20womens%20health%20clinic%20interior%20with%20elegant%20consultation%20spaces%20and%20premium%20healthcare%20design%2C%20soft%20rose%20blush%20cream%20tones%2C%20modern%20sophisticated%20medical%20facility%20with%20marble%20accents%20and%20fresh%20flowers%2C%20warm%20ambient%20lighting%2C%20pristine%20clean%20aesthetic%2C%20editorial%20architecture%20photography%2C%20no%20people%20visible%2C%20high-end%20gynecology%20practice%20environment%2C%20welcoming%20tranquil%20atmosphere&width=1600&height=900&seq=hero-gallery-2026-v3&orientation=landscape"
      badgeText="Visual Journey"
      headline="Gallery"
      description="Explore our healthcare environment, facilities, patient-focused care and commitment to women's wellness."
      primaryCTA={{
        text: 'Book Appointment',
        onClick: () => navigate('/contact'),
      }}
      secondaryCTA={{
        text: 'WhatsApp Now',
        href: 'https://wa.me/918050816686',
        variant: 'outline',
      }}
    />
  );
}
