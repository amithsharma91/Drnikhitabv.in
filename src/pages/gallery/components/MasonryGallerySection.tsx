import { useState, useCallback, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { galleryImages } from '@/mocks/galleryPageData';
import { motion, AnimatePresence } from 'framer-motion';

export default function MasonryGallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? galleryImages.length - 1 : prev - 1;
    });
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === galleryImages.length - 1 ? 0 : prev + 1;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  const handleImageLoad = useCallback((id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  }, []);

  const lightboxImage = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

  return (
    <section id="gallery-masonry" className="py-14 md:py-20 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block text-secondary-600 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Our Gallery
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-secondary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Moments of Care
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A glimpse into our clinic, our team, and the beautiful moments we share with our patients.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-background-100 shadow-sm break-inside-avoid mb-4 md:mb-5"
              onClick={() => openLightbox(i)}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-auto object-cover transition-all duration-700 ease-out md:group-hover:scale-105 ${
                    loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(image.id)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-400 flex items-end p-4 md:p-5">
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
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors duration-200 z-10"
              aria-label="Close lightbox"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
            >
              <i className="ri-close-line text-white text-xl"></i>
            </motion.button>

            <motion.button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors duration-200 z-10"
              aria-label="Previous image"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.15 }}
            >
              <i className="ri-arrow-left-s-line text-white text-xl md:text-2xl"></i>
            </motion.button>

            <motion.button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors duration-200 z-10"
              aria-label="Next image"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.15 }}
            >
              <i className="ri-arrow-right-s-line text-white text-xl md:text-2xl"></i>
            </motion.button>

            <motion.div
              className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-[75vh] object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-sm md:text-base font-semibold">{lightboxImage.title}</h3>
                <p className="text-white/40 text-xs mt-2">
                  {lightboxIndex !== null ? `${lightboxIndex + 1} / ${galleryImages.length}` : ''}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
