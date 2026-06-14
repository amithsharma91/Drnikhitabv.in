import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { categorizedTestimonials } from '@/mocks/testimonialData';

export default function TestimonialsSection() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const allTestimonials = [...categorizedTestimonials, ...categorizedTestimonials];
  const cardWidth = 320;
  const totalCards = categorizedTestimonials.length;
  const totalWidth = totalCards * cardWidth;

  const handlePrev = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    // Wrap-around check
    setTimeout(() => {
      if (el.scrollLeft <= 0) {
        el.scrollLeft = totalWidth;
      }
    }, 400);
  }, [cardWidth, totalWidth]);

  const handleNext = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: cardWidth, behavior: 'smooth' });
    // Wrap-around check
    setTimeout(() => {
      if (el.scrollLeft >= totalWidth + cardWidth) {
        el.scrollLeft = 0;
      }
    }, 400);
  }, [cardWidth, totalWidth]);

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-24 bg-background-50 overflow-hidden"
      aria-label="Patient testimonials"
    >
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Testimonials
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            What Our Patients Say
          </h2>

          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map(() => (
                <i key={Math.random()} className="ri-star-fill text-amber-400 text-base md:text-lg"></i>
              ))}
            </div>
            <span className="font-heading text-xl font-bold text-foreground-900">4.9</span>
            <span className="text-foreground-500 text-sm">100+ Reviews</span>
          </div>
        </div>

        {/* CSS auto-scroll carousel — no rAF, no React state updates */}
        <div className="relative max-w-full mx-auto group">
          <style>{`
            @keyframes testimonialsScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-${totalWidth}px); }
            }
            .testimonials-track {
              animation: testimonialsScroll 35s linear infinite;
            }
            .testimonials-carousel:hover .testimonials-track {
              animation-play-state: paused;
            }
          `}</style>

          <div className="testimonials-carousel overflow-hidden rounded-2xl">
            <div
              className="testimonials-track flex"
              style={{ width: `${totalWidth * 2}px` }}
            >
              {allTestimonials.concat(allTestimonials).map((testimonial, i) => (
                <div
                  key={`${testimonial.name}-${i}`}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="bg-white rounded-2xl p-5 md:p-6 border border-background-200 hover:border-primary-200 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center space-x-0.5 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className="ri-star-fill text-amber-400 text-sm"></i>
                      ))}
                    </div>

                    <p className="text-foreground-600 text-sm leading-relaxed flex-1 line-clamp-4">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    <div className="mt-4 pt-3 border-t border-background-100">
                      <h4 className="font-heading text-sm font-semibold text-foreground-900">{testimonial.name}</h4>
                      <p className="text-foreground-400 text-xs mt-0.5">{testimonial.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-1 md:-left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-background-200 flex items-center justify-center cursor-pointer z-10 hover:border-primary-300 transition-colors"
            aria-label="Previous testimonial"
          >
            <i className="ri-arrow-left-s-line text-foreground-600 text-base md:text-lg"></i>
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-1 md:-right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-background-200 flex items-center justify-center cursor-pointer z-10 hover:border-primary-300 transition-colors"
            aria-label="Next testimonial"
          >
            <i className="ri-arrow-right-s-line text-foreground-600 text-base md:text-lg"></i>
          </button>
        </div>

        {/* View All Reviews CTA */}
        <div className="text-center mt-10 md:mt-14">
          <button
            onClick={() => { navigate('/testimonials'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
            className="px-7 py-3 bg-white border-2 border-primary-200 text-primary-600 rounded-full text-sm md:text-base font-semibold whitespace-nowrap cursor-pointer inline-flex items-center space-x-2 btn-luxury"
          >
            <span>View All Reviews</span>
            <i className="ri-arrow-right-line text-lg"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
