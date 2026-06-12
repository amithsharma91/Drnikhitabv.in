import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { roadmapSteps } from '@/mocks/prePregnancyData';

export default function PregnancyRoadmapSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-16 md:py-24 bg-background-50">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Your Journey
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Pregnancy Planning Roadmap
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A structured approach to preconception care, guiding you step by step toward a healthy pregnancy.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line - horizontal on desktop, vertical on mobile */}
          <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300"></div>
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-secondary-300 to-primary-300"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
            {roadmapSteps.map((step, i) => (
              <div
                key={i}
                className="relative flex md:flex-col items-center md:items-center gap-4 md:gap-0"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.2 + i * 0.2}s`,
                }}
              >
                {/* Step circle */}
                <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-4 border-primary-500 flex items-center justify-center flex-shrink-0 shadow-sm mb-0 md:mb-5 transition-all duration-400 hover:scale-110 cursor-default group">
                  <span className="font-heading text-lg md:text-xl font-bold text-primary-500 group-hover:text-primary-600">{step.step}</span>
                </div>

                {/* Content */}
                <div className="md:text-center flex-1">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-${i % 2 === 0 ? 'primary' : 'secondary'}-100 mb-2 transition-transform duration-400 hover:scale-110`}>
                    <i className={`${step.icon} text-${i % 2 === 0 ? 'primary' : 'secondary'}-500 text-lg`}></i>
                  </div>
                  <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-1">{step.title}</h3>
                  <span className="inline-block text-xs font-medium text-primary-500 bg-primary-50 px-2.5 py-1 rounded-full mb-2">
                    {step.duration}
                  </span>
                  <p className="text-foreground-600 text-xs md:text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-foreground-500 text-sm italic">
            Every woman's journey is unique. Dr. Nikhita personalizes each step based on your individual health profile and goals.
          </p>
        </div>
      </div>
    </section>
  );
}
