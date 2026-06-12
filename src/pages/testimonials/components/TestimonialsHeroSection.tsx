import PageHeroSection from '@/components/feature/PageHeroSection';

export default function TestimonialsHeroSection() {
  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Happy%20Indian%20mother%20with%20newborn%20baby%20interacting%20with%20a%20female%20doctor%20in%20a%20premium%20healthcare%20setting%2C%20soft%20rose%20blush%20and%20cream%20tones%2C%20warm%20intimate%20moment%2C%20elegant%20clinic%20environment%20with%20natural%20window%20light%2C%20genuine%20emotional%20connection%2C%20editorial%20lifestyle%20photography%2C%20compassionate%20womens%20healthcare%2C%20soft%20focus%20background%2C%20beautiful%20maternal%20care%20scene%2C%20professional%20yet%20warm%20atmosphere&width=1600&height=900&seq=hero-testimonials-2026-v3&orientation=landscape"
      badgeText="Patient Stories"
      badgeIcon="ri-heart-line"
      headline="Trusted By Thousands Of Women"
      description="Read real patient experiences and success stories reflecting compassionate care and clinical excellence."
      primaryCTA={{
        text: 'Book Appointment',
        onClick: () => {
          window.location.href = '/contact';
        },
      }}
      secondaryCTA={{
        text: 'WhatsApp Now',
        href: 'https://wa.me/918050816686',
        variant: 'outline',
      }}
    />
  );
}
