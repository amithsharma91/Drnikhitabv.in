import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { patientJourney } from '@/mocks/doctorData';

/* Each step gets its own IntersectionObserver trigger — no scroll handler, no getBoundingClientRect */
function JourneyStep({ step, index, total }: { step: typeof patientJourney[0]; index: number; total: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start gap-6 md:gap-0">
      {/* Step visible wrapper */}
      <div
        className={`flex w-full transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-5'
        } ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      >
        {/* Timeline dot */}
        <div
          className={`absolute left-[11px] md:left-1/2 w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 transition-all duration-500 ${
            isVisible
              ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30'
              : 'bg-primary-200 text-primary-400'
          }`}
        >
          <span className="text-xs md:text-sm font-bold">{step.step}</span>
        </div>

        {/* Content card */}
        <div
          className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] bg-background-50 rounded-2xl p-4 md:p-6 border transition-all duration-500 cursor-default ${
            isVisible
              ? 'border-primary-200 shadow-sm'
              : 'border-background-200'
          } ${isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}
        >
          <h3 className="font-heading text-sm md:text-lg font-semibold text-foreground-900 mb-1.5 md:mb-2">
            {step.title}
          </h3>
          <p className="text-foreground-600 text-xs md:text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PatientJourneySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="relative py-16 md:py-24 bg-white" aria-label="Patient journey">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Your Journey
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Your Care Journey With Us
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A structured, transparent approach to your healthcare — from your first consultation to complete recovery and beyond.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200/30 md:-translate-x-px"></div>

          <div className="space-y-6 md:space-y-12">
            {patientJourney.map((step, i) => (
              <JourneyStep key={i} step={step} index={i} total={patientJourney.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
