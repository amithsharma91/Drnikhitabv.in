import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import FloatingWhatsApp from '@/components/feature/FloatingWhatsApp';
import PageSEO from '@/components/feature/PageSEO';
import GalleryHeroSection from './components/GalleryHeroSection';
import MasonryGallerySection from './components/MasonryGallerySection';
import VideoGallerySection from './components/VideoGallerySection';
import GalleryCTA from './components/GalleryCTA';

export default function Gallery() {
  return (
    <main className="min-h-screen bg-background-50 overflow-x-hidden">
      <PageSEO
        title="Gallery | Clinic & Patient Care Facilities | Dr. Nikhita B Vadvadgi Bangalore"
        description="View our clinic facilities, consultation rooms, surgical setup and patient care environment at Dr. Nikhita B Vadvadgi's practice in Bangalore. Modern women's healthcare facility."
        keywords="gynecologist clinic Bangalore photos, women's health clinic Basavanagudi, Dr. Nikhita clinic gallery, healthcare facility Bangalore, gynecology clinic images"
        canonicalPath="/gallery"
      />
      <Header onBookAppointment={() => {}} />

      <GalleryHeroSection />
      <MasonryGallerySection />
      <VideoGallerySection />
      <GalleryCTA />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
