import { useNavigate } from 'react-router-dom';
import PageHeroSection from '@/components/feature/PageHeroSection';

export default function LaparoscopicSurgeryHeroSection() {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Modern%20operating%20theatre%20with%20advanced%20laparoscopic%20equipment%2C%20high%20definition%20surgical%20monitors%20displaying%20internal%20views%2C%20female%20surgeon%20in%20scrubs%20standing%20confidently%20beside%20surgical%20tower%2C%20clean%20sterile%20environment%20with%20soft%20blue%20and%20white%20professional%20lighting%2C%20state%20of%20the%20art%20minimally%20invasive%20surgery%20suite&width=1800&height=1200&seq=lap-hero-01&orientation=landscape"
      badgeText="Advanced Laparoscopic Surgery"
      badgeIcon="ri-surgical-mask-line"
      headline="Precision Surgery With Faster Recovery"
      description="Modern minimally invasive laparoscopic procedures designed to provide effective treatment, reduced discomfort and quicker recovery."
      primaryCTA={{
        text: 'Book Appointment',
        onClick: () => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); },
        icon: 'ri-calendar-check-line',
      }}
      secondaryCTA={{
        text: 'WhatsApp Now',
        href: 'https://wa.me/918197301494',
        icon: 'ri-whatsapp-line',
        variant: 'solid',
      }}
    />
  );
}
