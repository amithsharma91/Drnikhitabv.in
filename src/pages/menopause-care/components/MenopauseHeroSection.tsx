import PageHeroSection from '@/components/feature/PageHeroSection';

interface MenopauseHeroSectionProps {
  onBookAppointment: () => void;
}

export default function MenopauseHeroSection({ onBookAppointment }: MenopauseHeroSectionProps) {
  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Confident%20elegant%20middle%20aged%20woman%20consulting%20a%20compassionate%20female%20gynecologist%20in%20a%20luxury%20premium%20healthcare%20clinic%2C%20warm%20rose%20blush%20and%20cream%20interior%20design%2C%20soft%20natural%20daylight%2C%20empowering%20wellness%20atmosphere%2C%20editorial%20photography%20with%20gentle%20warm%20tones%20and%20sophistication&width=1600&height=900&seq=menopause-hero-2026&orientation=landscape"
      badgeText="Menopause & Healthy Aging"
      badgeIcon="ri-heart-pulse-line"
      headline="Supporting Women Through Menopause"
      description="Compassionate care, symptom management and wellness support to help women navigate menopause confidently and comfortably."
      primaryCTA={{
        text: 'Book Appointment',
        onClick: onBookAppointment,
        icon: 'ri-calendar-check-line',
      }}
      secondaryCTA={{
        text: 'WhatsApp Now',
        href: 'https://wa.me/918050816686',
        icon: 'ri-whatsapp-line',
        variant: 'solid',
      }}
      showLogo={false}
    />
  );
}
