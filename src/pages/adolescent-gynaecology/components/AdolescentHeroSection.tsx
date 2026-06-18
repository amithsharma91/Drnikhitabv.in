import { useNavigate } from 'react-router-dom';
import PageHeroSection from '@/components/feature/PageHeroSection';

export default function AdolescentHeroSection() {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=A%20realistic%20warm%20consultation%20scene%20between%20a%20female%20Indian%20gynecologist%20and%20a%20teenage%20girl%20with%20her%20mother%20in%20a%20premium%20modern%20clinic%20with%20soft%20rose%20blush%20and%20cream%20tones%20natural%20window%20lighting%20comfortable%20chairs%20elegant%20feminine%20healthcare%20environment%20calm%20and%20reassuring%20atmosphere%20professional%20yet%20gentle%20medical%20aesthetic&width=1600&height=900&seq=hero-adolescent-2026-v1&orientation=landscape"
      badgeText="Adolescent Health Care"
      headline="Supporting Young Girls Through Every Stage Of Growth"
      description="Compassionate and confidential healthcare for adolescents, helping young girls navigate puberty, menstrual health, hormonal changes and overall wellbeing."
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
