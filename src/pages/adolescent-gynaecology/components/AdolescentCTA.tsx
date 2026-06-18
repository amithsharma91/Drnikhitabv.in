import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AdolescentCTA() {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Elegant%20soft%20gradient%20abstract%20background%20with%20cream%20and%20rose%20blush%20tones%20subtle%20flowing%20shapes%20medical%20wellness%20aesthetic%20premium%20healthcare%20brand%20backdrop%20warm%20and%20calming%20atmosphere%20minimalist%20elegant%20design&width=1600&height=600&seq=adolescent-cta-bg&orientation=landscape"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div
        ref={ref}
        className={`relative w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 text-center transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mb-4">
          Supporting Your Daughter's{' '}
          <span className="text-primary-500 italic">Health Journey</span>
        </h2>
        <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Book a consultation for compassionate, age-appropriate adolescent gynecological care.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <button
            onClick={() => navigate('/contact')}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 shadow-sm inline-flex items-center space-x-2"
          >
            <i className="ri-calendar-check-line text-lg"></i>
            <span>Book Appointment</span>
          </button>
          <a
            href="https://wa.me/918197301494"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 shadow-sm inline-flex items-center space-x-2"
          >
            <i className="ri-whatsapp-line text-lg"></i>
            <span>WhatsApp Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
