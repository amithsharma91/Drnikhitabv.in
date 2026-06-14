import PageHeroSection from '@/components/feature/PageHeroSection';

export default function HeroSection({ onBookAppointment }: { onBookAppointment: () => void }) {
  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Ultra%20realistic%20premium%20healthcare%20photography%20of%20a%20confident%20female%20Indian%20gynecologist%20in%20a%20white%20coat%20consulting%20with%20a%20smiling%20pregnant%20woman%2C%20supportive%20husband%20subtly%20visible%20in%20soft%20focus%20background%2C%20luxury%20maternity%20clinic%20environment%20with%20natural%20daylight%20streaming%20through%20windows%2C%20elegant%20rose%20blush%20pink%20and%20soft%20sky%20blue%20ambient%20tones%2C%20fresh%20floral%20elements%20inspired%20by%20a%20feminine%20clinic%20logo%2C%20cinematic%20lighting%20with%20soft%20bokeh%2C%20editorial%20quality%20composition%2C%20warm%20compassionate%20atmosphere%2C%20professional%20depth%2C%20luxury%20fertility%20clinic%20aesthetic%2C%20natural%20warmth%2C%20trust%20and%20compassion%20visible%20in%20expressions%2C%20motherhood%20symbolism%20through%20gentle%20styling%2C%20premium%20international%20healthcare%20branding%20quality&width=1600&height=900&seq=hero-home-2026-v5&orientation=landscape"
      badgeText="Trusted Women's Health Specialist"
      headline="Compassionate Care For Every Stage Of A"
      headlineHighlight="Woman's Journey"
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
