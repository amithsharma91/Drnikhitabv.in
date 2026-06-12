import PageHeroSection from '@/components/feature/PageHeroSection';

export default function ContactHeroSection() {
  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Modern%20healthcare%20reception%20with%20appointment%20desk%20and%20welcoming%20clinic%20atmosphere%2C%20soft%20rose%20blush%20and%20cream%20tones%2C%20elegant%20medical%20front%20desk%20with%20fresh%20floral%20arrangement%2C%20warm%20ambient%20lighting%2C%20pristine%20clean%20professional%20environment%2C%20premium%20gynecology%20practice%2C%20welcoming%20and%20calming%20aesthetic%2C%20editorial%20interior%20photography%2C%20no%20people%20visible%2C%20sophisticated%20healthcare%20design&width=1600&height=900&seq=hero-contact-2026-v3&orientation=landscape"
      badgeText="Get In Touch"
      headline="Contact & Appointments"
      description="Reach out for appointments, consultations and personalized women's healthcare support."
      primaryCTA={{
        text: 'Book Appointment',
        onClick: () => {
          const el = document.getElementById('appointment-form');
          if (el) {
            const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }
        },
      }}
      secondaryCTA={{
        text: 'Call Now',
        href: 'tel:+918050816686',
        icon: 'ri-phone-line',
        variant: 'outline',
      }}
    />
  );
}
