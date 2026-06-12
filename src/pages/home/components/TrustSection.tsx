import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { trustFactors } from '@/mocks/doctorData';

export default function TrustSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-accent-50/50 to-white" aria-label="Why patients trust Dr. Nikhita">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Why Patients Trust Dr. Nikhita
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Every patient deserves a doctor who listens, understands, and provides the highest quality care with genuine compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {trustFactors.map((factor, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-6 md:p-8 text-center border border-background-200 hover:border-primary-300 transition-all duration-500 cursor-default hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary-200/20"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(40px) rotate(1deg)',
                transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${0.1 + i * 0.15}s`,
              }}
            >
              <div className="w-16 h-16 md:w-18 md:h-18 mx-auto rounded-2xl bg-primary-100 group-hover:bg-primary-500 flex items-center justify-center mb-5 transition-all duration-400 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                <i className={`${factor.icon} text-primary-500 text-2xl md:text-3xl group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground-900 mb-3">{factor.title}</h3>
              <p className="text-foreground-600 text-xs md:text-sm leading-relaxed">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
