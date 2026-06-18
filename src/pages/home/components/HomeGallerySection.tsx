import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { galleryImages } from '@/mocks/galleryPageData';
import { motion } from 'framer-motion';

export default function HomeGallerySection() {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const displayImages = galleryImages.slice(-8);

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block text-secondary-600 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Visual Journey
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-secondary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Gallery
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Explore moments of compassionate care, our clinic environment, and the joy we share with our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {displayImages.map((image, i) => (
            <motion.div
              key={image.id}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-background-100 shadow-sm"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out md:group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-all duration-400 flex items-end p-4 md:p-5">
                  <div className="transform translate-y-4 md:group-hover:translate-y-0 transition-transform duration-400">
                    <h3 className="text-white text-sm font-semibold">{image.title}</h3>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform scale-50 md:group-hover:scale-100">
                  <i className="ri-zoom-in-line text-foreground-700 text-sm"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <button
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 shadow-sm"
          >
            <span>View Full Gallery</span>
            <i className="ri-arrow-right-line text-lg"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
