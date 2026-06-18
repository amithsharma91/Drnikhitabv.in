import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { googleReviews } from '@/mocks/testimonialData';

function StarRating() {
  return (
    <div className="flex items-center space-x-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} className="ri-star-fill text-amber-400 text-xs md:text-sm"></i>
      ))}
    </div>
  );
}

function GoogleGBadge() {
  return (
    <div className="w-5 h-5 rounded-full bg-white border border-background-200 flex items-center justify-center shadow-sm flex-shrink-0">
      <span className="text-[13px] font-bold" style={{ color: '#4285F4' }}>G</span>
    </div>
  );
}

export default function TestimonialsSection() {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const cardWidth = 340;
  const totalCards = googleReviews.length;
  const totalWidth = totalCards * cardWidth;

  const allReviews = [...googleReviews, ...googleReviews];

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
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Testimonials
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            What Our Patients Say
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-[18px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#4285F4' }}>G</span>
              <span className="text-[18px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#EA4335' }}>o</span>
              <span className="text-[18px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#FBBC05' }}>o</span>
              <span className="text-[18px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#4285F4' }}>g</span>
              <span className="text-[18px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#34A853' }}>l</span>
              <span className="text-[18px] font-bold tracking-tight" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif", color: '#EA4335' }}>e</span>
            </div>
            <span className="text-foreground-400 text-sm">&bull;</span>
            <StarRating />
            <span className="font-heading text-lg font-bold text-foreground-900">4.9</span>
            <span className="text-foreground-400 text-sm">&bull;</span>
            <span className="text-foreground-500 text-sm">102+ Reviews</span>
          </div>
        </div>

        {/* Infinite Auto-Scroll Marquee */}
        <div className="relative max-w-full mx-auto">
          <style>{`
            @keyframes testimonialsMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-${totalWidth}px); }
            }
            .testimonials-track {
              animation: testimonialsMarquee 50s linear infinite;
              width: ${totalWidth * 2}px;
            }
            .testimonials-container:hover .testimonials-track {
              animation-play-state: paused;
            }
            @media (hover: none) {
              .testimonials-container:hover .testimonials-track {
                animation-play-state: running;
              }
            }
          `}</style>

          <div className="testimonials-container overflow-hidden rounded-2xl">
            <div className="testimonials-track flex">
              {allReviews.map((review, i) => (
                <div
                  key={`${review.id}-${i}`}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="bg-white rounded-2xl p-5 md:p-6 border border-background-200 hover:border-primary-200 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center flex-shrink-0 border-2 border-background-100">
                        <span className="text-sm font-bold text-primary-700">
                          {review.avatarLetter}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading text-sm font-semibold text-foreground-900 truncate">{review.name}</h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <StarRating />
                          <span className="text-[10px] text-foreground-400">{review.date}</span>
                        </div>
                      </div>
                      <GoogleGBadge />
                    </div>

                    <p className="text-foreground-600 text-sm leading-relaxed flex-1 line-clamp-4">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Reviews CTA */}
        <div className="text-center mt-10 md:mt-14">
          <button
            onClick={() => { navigate('/testimonials'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
            className="px-7 py-3 bg-white border-2 border-primary-200 text-primary-600 rounded-full text-sm md:text-base font-semibold whitespace-nowrap cursor-pointer inline-flex items-center space-x-2 hover:bg-primary-50 transition-all duration-300"
          >
            <span>View All Reviews</span>
            <i className="ri-arrow-right-line text-lg"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
