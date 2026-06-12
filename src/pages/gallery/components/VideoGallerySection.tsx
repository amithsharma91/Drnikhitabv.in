import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { videoGallery } from '@/mocks/galleryPageData';

export default function VideoGallerySection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const videoCategories = Array.from(new Set(videoGallery.map((v) => v.category)));
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos = activeCategory === 'All'
    ? videoGallery
    : videoGallery.filter((v) => v.category === activeCategory);

  const allCategories = ['All', ...videoCategories];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block text-secondary-600 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Watch & Learn
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-secondary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Video Gallery
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Educational videos and insights to help you understand women&apos;s health better.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'bg-background-50 text-foreground-600 hover:bg-background-100 hover:text-foreground-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {filteredVideos.map((video, i) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(video.id === activeVideo ? null : video.id)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${0.06 + i * 0.08}s`,
              }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-background-100">
                <img
                  src={video.src}
                  alt={video.alt}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="ri-play-fill text-primary-500 text-xl md:text-2xl ml-0.5"></i>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                  {video.duration}
                </div>
              </div>
              <div className="mt-3 px-1">
                <span className="text-primary-500 text-xs font-semibold tracking-wide uppercase">{video.category}</span>
                <h3 className="font-heading text-sm md:text-base font-semibold text-foreground-900 mt-1 line-clamp-2">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <i className="ri-video-line text-foreground-300 text-5xl mb-4 block"></i>
            <p className="text-foreground-400 text-sm">No videos found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
