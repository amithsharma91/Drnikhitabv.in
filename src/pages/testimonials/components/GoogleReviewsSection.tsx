import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { googleReviews } from '@/mocks/testimonialData';
import { motion } from 'framer-motion';

function GoogleGLogo() {
  return (
    <div className="w-6 h-6 flex items-center justify-center">
      <span className="text-[20px] font-bold" style={{ color: '#4285F4' }}>G</span>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <i
          key={i}
          className={`text-sm ${i < rating ? 'ri-star-fill text-amber-400' : 'ri-star-line text-foreground-300'}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: typeof googleReviews[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 220;
  const isLong = review.text.length > maxLength;
  const displayText = isExpanded ? review.text : isLong ? review.text.slice(0, maxLength) + '...' : review.text;

  return (
    <motion.div
      className="bg-white rounded-2xl p-5 md:p-6 border border-background-200 hover:border-primary-200 transition-all duration-300 flex flex-col h-full relative"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.06 + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center flex-shrink-0 border-2 border-background-100">
          <span className="text-sm font-bold text-primary-700">
            {review.avatarLetter}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-foreground-900 truncate">{review.name}</h4>
          <div className="flex items-center gap-1.5 mt-0.5">
            <StarRating rating={review.rating} />
          </div>
        </div>
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white border border-background-200 flex items-center justify-center shadow-sm">
          <GoogleGLogo />
        </div>
      </div>

      <p className="text-foreground-600 text-sm leading-relaxed flex-1 mb-3">
        {displayText}
      </p>

      {isLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors mb-2 text-left cursor-pointer"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-background-100 mt-auto">
        <span className="text-[11px] text-foreground-400 flex items-center gap-1">
          <i className="ri-google-fill text-[10px] text-[#4285F4]"></i>
          {review.date}
        </span>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-[11px] text-foreground-400 hover:text-foreground-600 transition-colors cursor-pointer">
            <i className="ri-thumb-up-line text-xs"></i>
            <span>Helpful</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function GoogleReviewsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="py-14 md:py-20 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Google Reviews Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex flex-col items-center">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-[28px] md:text-[36px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#4285F4' }}>G</span>
              <span className="text-[28px] md:text-[36px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#EA4335' }}>o</span>
              <span className="text-[28px] md:text-[36px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#FBBC05' }}>o</span>
              <span className="text-[28px] md:text-[36px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#4285F4' }}>g</span>
              <span className="text-[28px] md:text-[36px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#34A853' }}>l</span>
              <span className="text-[28px] md:text-[36px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#EA4335' }}>e</span>
              <span className="text-[12px] md:text-[14px] font-medium text-foreground-400 ml-2 tracking-wide">Reviews</span>
            </div>
            <div className="flex items-center gap-2.5">
              <StarRating rating={5} />
              <span className="text-lg font-bold text-foreground-800">4.9</span>
              <span className="text-foreground-400 text-sm">&bull;</span>
              <span className="text-sm font-medium text-foreground-600">102+ reviews</span>
            </div>
          </div>

          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-5 mb-4">
            What Our Patients Say on Google
          </h2>
          <p className="text-foreground-500 text-sm max-w-xl mx-auto leading-relaxed">
            Verified reviews from real patients who have experienced Dr. Nikhita&apos;s care firsthand.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {googleReviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
