import PageHeroSection from '@/components/feature/PageHeroSection';

export default function AboutHeroSection() {
  return (
    <PageHeroSection
      bgImageUrl="https://readdy.ai/api/search-image?query=Professional%20female%20Indian%20doctor%20portrait%20in%20a%20luxury%20healthcare%20environment%2C%20soft%20cream%20and%20rose%20blush%20tones%2C%20elegant%20medical%20interior%20with%20sophisticated%20decor%2C%20warm%20natural%20lighting%2C%20premium%20gynecology%20practice%2C%20confident%20compassionate%20expression%2C%20editorial%20portrait%20photography%2C%20shallow%20depth%20of%20field%2C%20professional%20yet%20approachable%20atmosphere%2C%20modern%20healthcare%20branding&width=1600&height=900&seq=hero-about-2026-v3&orientation=landscape"
      badgeText="About The Doctor"
      headline="Dr. Nikhita B Vadvadgi"
      description="Consultant Obstetrician, Gynecologist, Laparoscopic Surgeon & Fertility Specialist providing compassionate and evidence-based care."
      primaryCTA={{
        text: 'Book Appointment',
        onClick: () => {
          const el = document.getElementById('appointment-form');
          if (!el) {
            window.location.href = '/contact';
            return;
          }
          const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        },
      }}
      secondaryCTA={{
        text: 'View Credentials',
        onClick: () => {
          const el = document.getElementById('qualifications');
          if (el) {
            const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }
        },
        icon: 'ri-award-line',
        variant: 'outline',
      }}
    />
  );
}
