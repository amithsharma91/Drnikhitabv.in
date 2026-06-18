import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';

export default function TestimonialsCTA() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background-50 via-primary-50/40 to-primary-50/70">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 text-center transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-white rounded-3xl p-8 md:p-14 border border-primary-100 max-w-3xl mx-auto">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-5 md:mb-6">
            <i className="ri-heart-2-line text-primary-500 text-3xl md:text-4xl"></i>
          </div>

          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mb-3 md:mb-4">
            Ready To Be Our Next Success Story?
          </h2>
          <p className="text-foreground-500 text-sm md:text-base max-w-lg mx-auto mb-8 md:mb-10">
            Every journey starts with a single step. Book your consultation today and experience the compassionate, expert care that hundreds of women trust.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <button
              onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-8 py-3.5 bg-primary-500 text-white rounded-full text-sm md:text-base font-semibold hover:bg-primary-600 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105"
            >
              Book Appointment
            </button>
            <a
              href="https://wa.me/918197301494"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-green-500 text-white rounded-full text-sm md:text-base font-semibold hover:bg-green-600 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105 flex items-center justify-center gap-2"
            >
              <i className="ri-whatsapp-line text-lg"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
