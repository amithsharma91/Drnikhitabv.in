import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { categorizedTestimonials } from '@/mocks/testimonialData';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const allTestimonials = [...categorizedTestimonials, ...categorizedTestimonials];
  const cardWidth = 320;
  const totalWidth = categorizedTestimonials.length * cardWidth;

  const animate = useCallback(() => {
    if (!isPaused) {
      setScrollPosition((prev) => {
        const next = prev + 0.5;
        return next >= totalWidth ? 0 : next;
      });
    }
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, totalWidth]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  const handlePrev = useCallback(() => {
    setScrollPosition((prev) => {
      const next = prev - cardWidth;
      return next < 0 ? totalWidth + next : next;
    });
  }, [cardWidth, totalWidth]);

  const handleNext = useCallback(() => {
    setScrollPosition((prev) => {
      const next = prev + cardWidth;
      return next >= totalWidth ? next - totalWidth : next;
    });
  }, [cardWidth, totalWidth]);

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-24 bg-background-50 overflow-hidden"
      aria-label="Patient testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
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
              {[1, 2, 3, 4, 5].map((star, i) => (
                <motion.i
                  key={star}
                  className="ri-star-fill text-amber-400 text-base md:text-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                ></motion.i>
              ))}
            </div>
            <span className="font-heading text-xl font-bold text-foreground-900">4.9</span>
            <span className="text-foreground-500 text-sm">100+ Reviews</span>
          </div>
        </div>

        {/* Scrolling carousel container */}
        <div className="relative max-w-full mx-auto">
          <div className="overflow-hidden rounded-2xl" ref={scrollRef}>
            <div
              className="flex transition-none"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {allTestimonials.map((testimonial, i) => (
                <div
                  key={`${testimonial.name}-${i}`}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-primary-100/30 hover:border-primary-200/60 transition-all duration-400 h-full flex flex-col card-luxury hover:shadow-lg hover:shadow-primary-100/20">
                    {/* Stars with shimmer */}
                    <div className="flex items-center space-x-0.5 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className="ri-star-fill text-amber-400 text-sm animate-shimmer"></i>
                      ))}
                    </div>

                    {/* Snippet */}
                    <p className="text-foreground-600 text-sm leading-relaxed flex-1 line-clamp-4">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="mt-4 pt-3 border-t border-primary-100/30">
                      <h4 className="font-heading text-sm font-semibold text-foreground-900">{testimonial.name}</h4>
                      <p className="text-foreground-400 text-xs mt-0.5">{testimonial.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <motion.button
            onClick={handlePrev}
            className="absolute -left-1 md:-left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100/30 flex items-center justify-center cursor-pointer z-10 shadow-sm"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.15, borderColor: 'rgba(216, 140, 165, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="ri-arrow-left-s-line text-foreground-600 text-base md:text-lg"></i>
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="absolute -right-1 md:-right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100/30 flex items-center justify-center cursor-pointer z-10 shadow-sm"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.15, borderColor: 'rgba(216, 140, 165, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="ri-arrow-right-s-line text-foreground-600 text-base md:text-lg"></i>
          </motion.button>
        </div>

        {/* View All Reviews CTA */}
        <div className="text-center mt-10 md:mt-14">
          <motion.button
            onClick={() => { navigate('/testimonials'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-7 py-3 bg-white border-2 border-primary-200 text-primary-600 rounded-full text-sm md:text-base font-semibold whitespace-nowrap cursor-pointer inline-flex items-center space-x-2 btn-luxury"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Reviews</span>
            <i className="ri-arrow-right-line text-lg"></i>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
