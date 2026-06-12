import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { familyPlanningRoadmap } from '@/mocks/familyPlanningData';

export default function FamilyPlanningRoadmapSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-16 md:py-24 bg-background-100">
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
            Family Planning Roadmap
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A clear, step-by-step pathway from your initial consultation through implementation and ongoing support.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute top-14 left-[8.33%] right-[8.33%] h-0.5 bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300"></div>
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-secondary-300 to-primary-300"></div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-0">
            {familyPlanningRoadmap.map((step, i) => (
              <div
                key={i}
                className="relative flex lg:flex-col items-center lg:items-center gap-4 lg:gap-0"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.15 + i * 0.15}s`,
                }}
              >
                <div className="relative z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-4 border-primary-500 flex items-center justify-center flex-shrink-0 mb-0 lg:mb-4 shadow-sm transition-all duration-400 hover:scale-110 cursor-default">
                  <span className="font-heading text-base lg:text-lg font-bold text-primary-500">{step.step}</span>
                </div>

                <div className="lg:text-center flex-1 bg-white rounded-2xl p-4 lg:p-5 border border-background-200 hover:border-primary-200 transition-all duration-400">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary-100 mb-2">
                    <i className={`${step.icon} text-primary-600 text-base`}></i>
                  </div>
                  <h3 className="font-heading text-sm lg:text-base font-semibold text-foreground-900 mb-1">{step.title}</h3>
                  <p className="text-foreground-600 text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-foreground-500 text-sm italic">
            Your family planning journey is uniquely yours. Dr. Nikhita supports you at every step with compassion, expertise, and complete respect for your choices.
          </p>
        </div>
      </div>
    </section>
  );
}
