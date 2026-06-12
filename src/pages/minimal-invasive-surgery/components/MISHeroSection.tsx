import { useNavigate } from 'react-router-dom';
import PageHeroSection from '@/components/feature/PageHeroSection';

export default function MinimalInvasiveSurgeryHeroSection() {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Modern%20operating%20theatre%20with%20a%20female%20surgeon%20in%20scrubs%20standing%20confidently%20alongside%20advanced%20laparoscopic%20surgical%20technology%20and%20high%20definition%20monitors%2C%20clean%20sterile%20environment%20with%20warm%20professional%20lighting%2C%20state%20of%20the%20art%20medical%20equipment%2C%20minimally%20invasive%20surgery%20suite%2C%20editorial%20medical%20photography%20style%20with%20soft%20blue%20and%20white%20tones&width=1800&height=1200&seq=mis-hero-01&orientation=landscape"
      badgeText="Advanced Surgical Care"
      badgeIcon="ri-surgical-mask-line"
      headline="Modern Surgical Solutions With Faster Recovery"
      description="Advanced minimally invasive surgical procedures offering greater precision, reduced discomfort and quicker recovery."
      primaryCTA={{
        text: 'Book Appointment',
        onClick: () => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); },
        icon: 'ri-calendar-check-line',
      }}
      secondaryCTA={{
        text: 'WhatsApp Now',
        href: 'https://wa.me/918050816686',
        icon: 'ri-whatsapp-line',
        variant: 'solid',
      }}
    />
  );
}
