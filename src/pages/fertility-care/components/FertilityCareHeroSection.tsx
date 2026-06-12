import { useNavigate } from 'react-router-dom';
import PageHeroSection from '@/components/feature/PageHeroSection';

export default function FertilityCareHeroSection() {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Hopeful%20couple%20consulting%20a%20female%20fertility%20specialist%20in%20a%20luxury%20fertility%20clinic%20environment%2C%20warm%20rose%20blush%20and%20cream%20interior%20design%2C%20soft%20natural%20lighting%20through%20large%20windows%2C%20elegant%20medical%20office%20with%20fresh%20flowers%20and%20tissue%20box%20on%20desk%2C%20compassionate%20professional%20atmosphere%2C%20premium%20healthcare%20setting%2C%20editorial%20photography%20style%20with%20gentle%20warm%20tones%20and%20shallow%20depth%20of%20field&width=1800&height=1200&seq=fertility-care-hero-01&orientation=landscape"
      badgeText="Fertility & Reproductive Health"
      badgeIcon="ri-seedling-line"
      headline="Guiding Your Journey Towards Parenthood"
      description="Comprehensive fertility evaluation, counselling and personalized treatment plans designed to support your dream of starting or growing your family."
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
