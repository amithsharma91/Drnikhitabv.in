import { useNavigate } from 'react-router-dom';
import PageHeroSection from '@/components/feature/PageHeroSection';

export default function PrePregnancyHeroSection() {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=A%20happy%20Indian%20couple%20consulting%20a%20female%20gynecologist%20in%20a%20bright%20premium%20medical%20clinic%20discussing%20pregnancy%20planning%20warm%20natural%20lighting%20soft%20rose%20blush%20and%20cream%20interior%20design%20professional%20yet%20welcoming%20atmosphere%20modern%20healthcare%20environment%20couple%20smiling%20engaged%20in%20conversation%20with%20doctor&width=1600&height=900&seq=hero-prepregnancy-2026-v1&orientation=landscape"
      badgeText="Preconception Care"
      headline="Prepare For A Healthy Pregnancy Journey"
      description="Comprehensive health evaluation and personalized guidance before conception to support a safe and healthy pregnancy."
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
