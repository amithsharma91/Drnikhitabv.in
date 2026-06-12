import { useNavigate } from 'react-router-dom';
import PageHeroSection from '@/components/feature/PageHeroSection';

export default function HysteroscopicSurgeryHeroSection() {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Premium%20gynecology%20procedure%20suite%20with%20modern%20hysteroscopy%20equipment%20setup%2C%20high%20definition%20monitor%20displaying%20uterine%20cavity%20view%2C%20comfortable%20clinical%20environment%20with%20warm%20soothing%20lighting%2C%20professional%20womens%20healthcare%20facility%20with%20clean%20modern%20design&width=1800&height=1200&seq=hsc-hero-01&orientation=landscape"
      badgeText="Advanced Hysteroscopic Surgery"
      badgeIcon="ri-microscope-line"
      headline="Accurate Diagnosis And Treatment With Minimal Discomfort"
      description="State-of-the-art hysteroscopic procedures for diagnosing and treating uterine conditions with precision, safety and faster recovery."
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
