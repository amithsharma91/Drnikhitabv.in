import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fertilityGallery } from '@/mocks/fertilityCareData';

export default function FertilityGallerySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary-100/70 border border-secondary-200/50 mb-4">
              <i className="ri-image-line text-secondary-700 text-xs mr-1.5"></i>
              <span className="text-secondary-700 text-xs font-semibold tracking-wide">Visual Journey</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Fertility Success Gallery
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Experience the warmth, professionalism, and hope that defines every consultation at our fertility clinic.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
            {fertilityGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="break-inside-avoid mb-4 md:mb-5 rounded-2xl overflow-hidden cursor-pointer group relative"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-white/80 text-xs">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition-colors"
          >
            <i className="ri-close-line text-white text-xl"></i>
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
