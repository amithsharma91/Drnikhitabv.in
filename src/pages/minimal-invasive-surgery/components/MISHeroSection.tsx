import { useNavigate } from 'react-router-dom';
import PageHeroSection from '@/components/feature/PageHeroSection';

export default function MinimalInvasiveSurgeryHeroSection() {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      bgImageUrl="https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/fae8eb9e-b955-4593-9a8a-bfbedad0e608_IMG_20260617_152505.jpg"
      badgeText="Advanced Surgical Care"
      badgeIcon="ri-surgical-mask-line"
      headline="Modern Surgical Solutions With Faster Recovery"
      description="Advanced minimally invasive surgical procedures offering greater precision, reduced discomfort and quicker recovery."
      primaryCTA={{
        text: 'Book Appointment',
        onClick: () => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); },
        icon: 'ri-calendar-check-line',
      }}
      secondaryCTA={{
        text: 'WhatsApp Now',
        href: 'https://wa.me/918197301494',
        icon: 'ri-whatsapp-line',
        variant: 'solid',
      }}
    />
  );
}
