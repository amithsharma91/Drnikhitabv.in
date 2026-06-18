import PageHeroSection from '@/components/feature/PageHeroSection';

interface VaccinationsHeroSectionProps {
  onBookAppointment: () => void;
}

export default function VaccinationsHeroSection({ onBookAppointment }: VaccinationsHeroSectionProps) {
  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Female%20healthcare%20professional%20doctor%20discussing%20vaccination%20plans%20with%20a%20young%20woman%20and%20her%20mother%20in%20a%20warm%20premium%20clinic%20consultation%20room%2C%20modern%20healthcare%20environment%20with%20rose%20blush%20and%20cream%20interior%20design%2C%20soft%20natural%20daylight%2C%20compassionate%20preventive%20care%20atmosphere%2C%20editorial%20medical%20photography%20with%20gentle%20tones&width=1600&height=900&seq=vaccinations-hero-2026&orientation=landscape"
      badgeText="Vaccination & Protection"
      badgeIcon="ri-shield-check-line"
      headline="Protecting Women's Health Through Preventive Vaccination"
      description="Evidence-based vaccination guidance and preventive healthcare support for women and adolescent girls at every stage of life."
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
