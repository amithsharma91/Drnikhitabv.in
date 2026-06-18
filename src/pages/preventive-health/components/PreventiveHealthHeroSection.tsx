import PageHeroSection from '@/components/feature/PageHeroSection';

interface PreventiveHealthHeroSectionProps {
  onBookAppointment: () => void;
}

export default function PreventiveHealthHeroSection({ onBookAppointment }: PreventiveHealthHeroSectionProps) {
  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20doctor%20discussing%20preventive%20healthcare%20screening%20results%20with%20a%20confident%20middle%20aged%20woman%20patient%20in%20a%20premium%20luxury%20clinic%20consultation%20room%2C%20warm%20rose%20blush%20and%20cream%20interior%20design%2C%20soft%20natural%20daylight%20through%20large%20windows%2C%20compassionate%20healthcare%20atmosphere%2C%20editorial%20photography%20with%20gentle%20warm%20tones%20and%20soft%20shadows&width=1600&height=900&seq=preventive-hero-2026&orientation=landscape"
      badgeText="Preventive Healthcare"
      badgeIcon="ri-shield-check-line"
      headline="Early Detection. Better Protection. Healthier Future."
      description="Comprehensive preventive healthcare and cancer screening services focused on early diagnosis, long-term wellness and proactive women's health management."
      primaryCTA={{
        text: 'Book Appointment',
        onClick: onBookAppointment,
        icon: 'ri-calendar-check-line',
      }}
      secondaryCTA={{
        text: 'WhatsApp Now',
        href: 'https://wa.me/918197301494',
        icon: 'ri-whatsapp-line',
        variant: 'solid',
      }}
      showLogo={false}
    />
  );
}
