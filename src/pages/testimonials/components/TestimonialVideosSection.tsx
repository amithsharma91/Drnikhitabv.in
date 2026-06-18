import { useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface VideoTestimonial {
  id: number;
  thumbnail: string;
  title: string;
  patientName: string;
  duration: string;
  description: string;
  videoUrl?: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    thumbnail: 'https://readdy.ai/api/search-image?query=Warm%20candid%20interview%20scene%20of%20an%20Indian%20woman%20in%20her%20early%2030s%20sitting%20in%20a%20comfortable%20softly%20lit%20consultation%20room%2C%20wearing%20casual%20elegant%20attire%2C%20gentle%20genuine%20smile%2C%20cream%20and%20rose%20blush%20tones%2C%20professional%20healthcare%20setting%2C%20soft%20natural%20window%20light%2C%20editorial%20portrait%20photography%2C%20premium%20healthcare%20atmosphere%2C%20emotional%20connection%2C%20storytelling%20moment&width=600&height=340&seq=video-thumb-01&orientation=landscape',
    title: 'My High-Risk Pregnancy Journey',
    patientName: 'Priya Sharma',
    duration: '4:32',
    description: 'From diagnosis to a healthy delivery — Priya shares her complete pregnancy journey under Dr. Nikhita\'s care.',
  },
  {
    id: 2,
    thumbnail: 'https://readdy.ai/api/search-image?query=Candid%20interview%20scene%20of%20an%20Indian%20woman%20in%20her%20late%2030s%20sitting%20in%20a%20warm%20softly%20lit%20consultation%20room%2C%20wearing%20elegant%20casual%20attire%2C%20genuine%20warm%20expression%2C%20cream%20and%20soft%20rose%20background%20tones%2C%20professional%20healthcare%20setting%2C%20soft%20natural%20lighting%2C%20emotional%20storytelling%20portrait%2C%20premium%20gynecology%20practice%20atmosphere%2C%20heartfelt%20conversation%20moment&width=600&height=340&seq=video-thumb-02&orientation=landscape',
    title: 'Laparoscopic Surgery — My Recovery Story',
    patientName: 'Anjali Rao',
    duration: '3:18',
    description: 'Anjali talks about her fibroid surgery experience and how minimally invasive surgery changed her life.',
  },
  {
    id: 3,
    thumbnail: 'https://readdy.ai/api/search-image?query=Candid%20interview%20scene%20of%20an%20Indian%20woman%20in%20her%20late%2020s%20sitting%20in%20a%20softly%20lit%20comfortable%20consultation%20room%2C%20wearing%20casual%20elegant%20attire%2C%20warm%20genuine%20smile%2C%20cream%20and%20soft%20rose%20background%2C%20professional%20healthcare%20setting%2C%20soft%20natural%20window%20light%2C%20emotional%20storytelling%20portrait%2C%20premium%20gynecology%20practice%2C%20heartfelt%20conversation%20moment&width=600&height=340&seq=video-thumb-03&orientation=landscape',
    title: 'Overcoming PMOS — My Transformation',
    patientName: 'Meera Patel',
    duration: '5:02',
    description: 'Meera opens up about her PMOS struggle and how the right treatment plan transformed her health completely.',
  },
  {
    id: 4,
    thumbnail: 'https://readdy.ai/api/search-image?query=Candid%20interview%20scene%20of%20an%20Indian%20couple%20in%20their%20early%2030s%20sitting%20together%20in%20a%20warm%20softly%20lit%20consultation%20room%2C%20wearing%20casual%20elegant%20attire%2C%20genuine%20happy%20expressions%2C%20cream%20and%20soft%20rose%20background%20tones%2C%20professional%20healthcare%20setting%2C%20soft%20natural%20lighting%2C%20emotional%20storytelling%20portrait%2C%20premium%20gynecology%20practice%2C%20joyful%20celebration%20moment&width=600&height=340&seq=video-thumb-04&orientation=landscape',
    title: 'From Infertility to Twin Boys',
    patientName: 'Meera & Rohan Patel',
    duration: '6:15',
    description: 'A couple shares their emotional three-year journey from infertility struggles to welcoming healthy twin boys.',
  },
  {
    id: 5,
    thumbnail: 'https://readdy.ai/api/search-image?query=Candid%20interview%20scene%20of%20an%20Indian%20woman%20in%20her%20mid%2040s%20sitting%20in%20a%20warm%20softly%20lit%20consultation%20room%2C%20wearing%20casual%20elegant%20attire%2C%20calm%20confident%20smile%2C%20cream%20and%20soft%20rose%20background%20tones%2C%20professional%20healthcare%20setting%2C%20soft%20natural%20lighting%2C%20emotional%20storytelling%20portrait%2C%20premium%20gynecology%20practice%2C%20empowering%20conversation%20moment&width=600&height=340&seq=video-thumb-05&orientation=landscape',
    title: 'Navigating Menopause with Confidence',
    patientName: 'Shalini Kapoor',
    duration: '4:48',
    description: 'Shalini discusses how holistic menopause care helped her regain control and feel like herself again.',
  },
  {
    id: 6,
    thumbnail: 'https://readdy.ai/api/search-image?query=Candid%20interview%20scene%20of%20an%20Indian%20woman%20in%20her%20mid%2030s%20holding%20a%20newborn%20baby%2C%20sitting%20in%20a%20warm%20softly%20lit%20consultation%20room%2C%20wearing%20casual%20elegant%20attire%2C%20radiant%20joyful%20smile%2C%20cream%20and%20soft%20rose%20background%20tones%2C%20professional%20healthcare%20setting%2C%20soft%20natural%20lighting%2C%20emotional%20storytelling%20portrait%2C%20premium%20gynecology%20practice%2C%20new%20mother%20celebration%20moment&width=600&height=340&seq=video-thumb-06&orientation=landscape',
    title: 'VBAC Success — Natural Birth After C-Section',
    patientName: 'Ayesha Begum',
    duration: '5:30',
    description: 'Ayesha tells her powerful story of achieving a vaginal birth after cesarean with Dr. Nikhita\'s unwavering support.',
  },
];

function VideoLightbox({
  video,
  onClose,
}: {
  video: VideoTestimonial;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${video.title}`}
    >
      <div
        className="relative w-full max-w-4xl mx-4 rounded-2xl overflow-hidden bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full"
            controls
            autoPlay
            playsInline
            poster={video.thumbnail}
            src={video.videoUrl}
          >
            <source src={video.videoUrl} type="video/mp4" />
            <p className="text-white text-center px-4">
              Your browser does not support video playback.
              <br />
              <span className="text-sm text-white/60">
                Video testimonials will be uploaded soon.
              </span>
            </p>
          </video>
        </div>

        <div className="bg-white p-4 md:p-5">
          <h3 className="font-heading text-base font-semibold text-foreground-900 mb-1">
            {video.title}
          </h3>
          <p className="text-foreground-500 text-sm">{video.patientName}</p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer z-10"
          aria-label="Close video"
        >
          <i className="ri-close-line text-xl"></i>
        </button>
      </div>
    </div>
  );
}

export default function TestimonialVideosSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4 bg-white rounded-full px-5 py-2 border border-background-200">
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
              <i className="ri-play-circle-fill text-red-500 text-lg"></i>
            </div>
            <span className="text-xs font-semibold text-foreground-700 tracking-wide uppercase">Video Testimonials</span>
          </div>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-4 mb-4">
            Patient Video Testimonials
          </h2>
          <p className="text-foreground-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Hear directly from women and families who trusted Dr. Nikitha B Vadvadgi for their healthcare journey.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {videoTestimonials.map((video, i) => (
            <div
              key={video.id}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-background-200 hover:border-primary-300 hover:-translate-y-1 transition-all duration-400"
              style={{
                transition: `all 0.4s ease-out, opacity 0.5s ease-out, transform 0.5s ease-out`,
                transitionDelay: `${0.06 + i * 0.08}s, ${0.06 + i * 0.08}s, ${0.06 + i * 0.08}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(25px)',
              }}
              onClick={() => setActiveVideo(video)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveVideo(video);
                }
              }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <i className="ri-play-fill text-primary-500 text-2xl md:text-3xl ml-0.5"></i>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5">
                  <i className="ri-volume-up-line text-[10px]"></i>
                  {video.duration}
                </div>
                <div className="absolute top-3 left-3 bg-primary-500/90 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                  <i className="ri-mic-line mr-1"></i>With Sound
                </div>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-heading text-sm md:text-base font-semibold text-foreground-900 mb-1.5 group-hover:text-primary-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-foreground-500 text-xs leading-relaxed mb-3 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-background-100">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-primary-600">
                      {video.patientName.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-foreground-700">{video.patientName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeVideo && (
        <VideoLightbox video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}
