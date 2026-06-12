import PageHeroSection from '@/components/feature/PageHeroSection';

export default function HeroSection({ onBookAppointment }: { onBookAppointment: () => void }) {
  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20gynecologist%20consulting%20a%20pregnant%20woman%20in%20a%20premium%20clinic%20environment%2C%20soft%20rose%20blush%20cream%20tones%2C%20elegant%20medical%20office%20with%20natural%20window%20light%2C%20warm%20compassionate%20atmosphere%2C%20sophisticated%20healthcare%20branding%2C%20editorial%20photography%20style%2C%20no%20harsh%20shadows%2C%20luxurious%20womens%20health%20clinic%20aesthetic%2C%20calm%20trusting%20interaction%20between%20doctor%20and%20patient&width=1600&height=900&seq=hero-home-2026-v3&orientation=landscape"
      badgeText="Trusted Women's Health Specialist"
      headline="Compassionate Care For Every Stage Of A Woman's Journey"
      description="Expert care in Pregnancy, Gynecology, Fertility and Minimally Invasive Surgery with a patient-first approach."
      showLogo={true}
      primaryCTA={{
        text: 'Book Appointment',
        onClick: onBookAppointment,
      }}
      secondaryCTA={{
        text: 'WhatsApp Now',
        href: 'https://wa.me/918050816686?text=Hello%20Dr.%20Nikhita%2C%20I%20would%20like%20to%20consult%20you.',
        variant: 'solid',
      }}
    />
  );
}
