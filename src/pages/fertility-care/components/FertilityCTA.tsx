import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FertilityCTAProps {
  onBookAppointment: () => void;
}

export default function FertilityCTA({ onBookAppointment }: FertilityCTAProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-primary-500 via-primary-400 to-accent-400 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 text-center">
        <div
          ref={ref}
          className={`transition-all duration-900 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 border border-white/30 mb-5">
            <i className="ri-calendar-check-line text-white text-xs mr-1.5"></i>
            <span className="text-white text-xs font-semibold tracking-wide">Begin Your Fertility Journey</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Ready To Take The First Step Toward Parenthood?
          </h2>
          <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Schedule a private fertility consultation with Dr. Nikhita B Vadvadgi. Together, we will create a personalized plan to support your dream of starting or growing your family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <button
              onClick={onBookAppointment}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-primary-600 rounded-full text-sm md:text-base font-semibold hover:bg-primary-50 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105 shadow-lg"
            >
              <i className="ri-calendar-check-line mr-2"></i>
              Book Appointment
            </button>
            <a
              href="https://wa.me/918197301494"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/15 border border-white/30 text-white rounded-full text-sm md:text-base font-semibold hover:bg-white/25 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
