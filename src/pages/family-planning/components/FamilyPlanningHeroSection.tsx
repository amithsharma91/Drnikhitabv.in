import { useNavigate } from 'react-router-dom';
import PageHeroSection from '@/components/feature/PageHeroSection';

export default function FamilyPlanningHeroSection() {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Female%20gynecologist%20consulting%20a%20young%20couple%20regarding%20family%20planning%20in%20a%20premium%20healthcare%20setting%2C%20warm%20rose%20blush%20and%20cream%20interior%20design%2C%20soft%20natural%20daylight%20through%20large%20windows%2C%20elegant%20modern%20clinic%20consultation%20room%2C%20professional%20and%20reassuring%20atmosphere%2C%20family%20planning%20educational%20materials%20on%20desk%2C%20editorial%20healthcare%20photography%20with%20gentle%20warm%20tones&width=1800&height=1200&seq=family-planning-hero-01&orientation=landscape"
      badgeText="Family Planning & Reproductive Wellness"
      badgeIcon="ri-calendar-check-line"
      headline="Helping You Make Informed Family Planning Decisions"
      description="Personalized guidance and evidence-based family planning solutions tailored to your health, lifestyle and future goals."
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
