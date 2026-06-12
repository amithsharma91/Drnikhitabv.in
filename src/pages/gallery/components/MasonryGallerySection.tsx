import { useState, useCallback, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { galleryCategories, galleryImages } from '@/mocks/galleryPageData';
import { motion, AnimatePresence } from 'framer-motion';

export default function MasonryGallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

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
      return prev === 0 ? filtered.length - 1 : prev - 1;
    });
  }, [filtered.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === filtered.length - 1 ? 0 : prev + 1;
    });
  }, [filtered.length]);

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

  const lightboxImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section id="gallery-masonry" className="py-14 md:py-20 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8 md:mb-10">
          <span className="text-secondary-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Gallery Categories</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-12">
          {galleryCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-secondary-500 text-white shadow-sm'
                  : 'bg-background-50 text-foreground-600 hover:bg-background-100 hover:text-foreground-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((image, i) => (
              <motion.div
                key={image.id}
                className="break-inside-avoid mb-4 md:mb-5 group cursor-pointer"
                onClick={() => openLightbox(i)}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                layout
              >
                <div className="relative rounded-2xl overflow-hidden bg-background-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-4 md:p-5">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                      <h3 className="text-white text-sm font-semibold">{image.title}</h3>
                      <p className="text-white/70 text-xs mt-0.5">
                        {galleryCategories.find((c) => c.id === image.category)?.label}
                      </p>
                    </div>
                  </div>
                  {/* View icon */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                    <i className="ri-zoom-in-line text-foreground-700 text-sm"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <i className="ri-image-line text-foreground-300 text-5xl mb-4 block"></i>
            <p className="text-foreground-400 text-sm">No images found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox with animation */}
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
                <p className="text-white/60 text-xs mt-1">
                  {galleryCategories.find((c) => c.id === lightboxImage.category)?.label}
                </p>
                <p className="text-white/40 text-xs mt-2">
                  {lightboxIndex !== null ? `${lightboxIndex + 1} / ${filtered.length}` : ''}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
