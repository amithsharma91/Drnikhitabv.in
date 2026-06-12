import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { vaccinationJourney } from '@/mocks/vaccinationsData';

export default function VaccinationJourneySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-road-map-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Your Journey</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Your Vaccination Journey
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              A simple, guided path from assessment to protected wellness — your vaccination journey with Dr. Nikhita.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal connector line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-primary-200/60"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-4">
              {vaccinationJourney.map((item, index) => (
                <div
                  key={item.step}
                  className="relative text-center group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-white border-2 border-primary-200 flex items-center justify-center mb-4 group-hover:border-primary-500 group-hover:bg-primary-500 transition-all duration-400">
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-500 text-white text-xs font-bold flex items-center justify-center">{item.step}</span>
                    <i className={`${item.icon} text-primary-600 group-hover:text-white text-xl transition-colors duration-400`}></i>
                  </div>
                  <h4 className="font-heading text-foreground-900 text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-foreground-500 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
