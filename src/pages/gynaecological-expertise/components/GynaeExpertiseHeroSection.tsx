import { useNavigate } from 'react-router-dom';
import PageHeroSection from '@/components/feature/PageHeroSection';

export default function GynaecologicalExpertiseHeroSection() {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Premium%20realistic%20consultation%20between%20a%20female%20gynecologist%20and%20a%20woman%20patient%20inside%20a%20luxury%20healthcare%20clinic%2C%20warm%20rose%20blush%20and%20cream%20interior%20design%2C%20soft%20natural%20lighting%20through%20large%20windows%2C%20elegant%20medical%20office%20with%20fresh%20flowers%2C%20compassionate%20professional%20atmosphere%2C%20women%20healthcare%2C%20editorial%20photography%20style%20with%20gentle%20warm%20tones%20and%20shallow%20depth%20of%20field&width=1800&height=1200&seq=gynae-expertise-hero-01&orientation=landscape"
      badgeText="Women's Health Specialist"
      badgeIcon="ri-heart-pulse-line"
      headline="Comprehensive Gynaecological Care For Every Stage Of Life"
      description="Expert diagnosis, treatment and long-term management of common and complex gynaecological conditions through compassionate and personalized care."
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
