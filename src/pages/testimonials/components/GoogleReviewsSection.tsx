import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { googleReviews } from '@/mocks/testimonialData';
import { motion } from 'framer-motion';
import Marquee from '@/components/feature/Marquee';

export default function GoogleReviewsSection() {
  const [visibleCount, setVisibleCount] = useState(6);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const hasMore = visibleCount < googleReviews.length;

  const renderStars = (animate: boolean) => (
    <div className="flex items-center space-x-0.5">
      {[1, 2, 3, 4, 5].map((star, i) => (
        <i
          key={star}
          className="ri-star-fill text-amber-400 text-sm"
        ></i>
      ))}
    </div>
  );

  return (
    <section className="py-14 md:py-20 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-[28px] md:text-[34px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#4285F4' }}>G</span>
              <span className="text-[28px] md:text-[34px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#EA4335' }}>o</span>
              <span className="text-[28px] md:text-[34px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#FBBC05' }}>o</span>
              <span className="text-[28px] md:text-[34px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#4285F4' }}>g</span>
              <span className="text-[28px] md:text-[34px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#34A853' }}>l</span>
              <span className="text-[28px] md:text-[34px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#EA4335' }}>e</span>
              <span className="text-[12px] md:text-[13px] font-medium text-foreground-400 ml-2 tracking-wide">Reviews</span>
            </div>
            <div className="flex items-center gap-2.5">
              {renderStars(true)}
              <span className="text-sm font-bold text-foreground-800">4.9</span>
              <span className="text-foreground-400 text-sm">&bull;</span>
              <span className="text-sm text-foreground-500">100+ reviews</span>
            </div>
          </div>

          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-5 mb-4">
            What Patients Say On Google
          </h2>
          <p className="text-foreground-500 text-sm max-w-xl mx-auto leading-relaxed">
            Verified reviews from real patients who have experienced Dr. Nikhita&apos;s care firsthand.
          </p>
        </div>

        {/* Marquee section for top reviews */}
        <div className="mb-10 md:mb-12">
          <Marquee speed={18} pauseOnHover={true} gap={20}>
            {googleReviews.slice(0, 5).map((review, index) => (
              <div
                key={index}
                className="w-[320px] md:w-[380px] flex-shrink-0 bg-white rounded-2xl p-5 border border-background-200 card-luxury hover:border-primary-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-background-100 to-background-200 flex items-center justify-center flex-shrink-0 border-2 border-background-100">
                    <span className="text-sm font-bold text-foreground-500">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground-900 truncate">{review.name}</h4>
                    <div className="flex items-center gap-1.5">
                      {renderStars(false)}
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-background-200 flex items-center justify-center shadow-sm">
                    <span className="text-[16px] font-bold" style={{ color: '#4285F4' }}>G</span>
                  </div>
                </div>
                <p className="text-foreground-600 text-sm leading-relaxed line-clamp-3">
                  {review.text}
                </p>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {googleReviews.slice(0, visibleCount).map((review, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-5 md:p-6 border border-background-200 hover:border-primary-200 hover:shadow-sm transition-all duration-300 flex flex-col relative card-luxury"
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.06 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-background-100 to-background-200 flex items-center justify-center flex-shrink-0 border-2 border-background-100">
                  <span className="text-sm font-bold text-foreground-500">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground-900 truncate">{review.name}</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-foreground-400">{review.reviews || '1 review'}</span>
                    <span className="text-[10px] text-foreground-300">&bull;</span>
                    {renderStars(false)}
                  </div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-background-200 flex items-center justify-center shadow-sm">
                  <span className="text-[16px] font-bold" style={{ color: '#4285F4' }}>G</span>
                </div>
              </div>

              <p className="text-foreground-600 text-sm leading-relaxed flex-1 mb-3">
                {review.text}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-background-100">
                <span className="text-[11px] text-foreground-400 flex items-center gap-1">
                  <i className="ri-google-fill text-[10px]"></i>
                  {review.date}
                </span>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1 text-[11px] text-foreground-400 hover:text-foreground-600 transition-colors cursor-pointer">
                    <i className="ri-thumb-up-line text-xs"></i>
                    <span>{Math.floor(Math.random() * 8) + 2}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-8 md:mt-10">
            <button
              onClick={() => setVisibleCount(googleReviews.length)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-background-300 text-foreground-600 text-sm font-medium hover:border-primary-300 hover:text-primary-600 transition-all duration-300 cursor-pointer whitespace-nowrap btn-luxury"
            >
              See All {googleReviews.length} Google Reviews
              <i className="ri-arrow-down-line"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
