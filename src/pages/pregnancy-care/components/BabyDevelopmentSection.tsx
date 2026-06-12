import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { babyDevelopmentMilestones } from '@/mocks/pregnancyCareData';

export default function BabyDevelopmentSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Baby's Growth
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Baby Development Visual Guide
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Follow your baby's incredible journey from a tiny heartbeat to a fully developed newborn.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {babyDevelopmentMilestones.map((milestone, i) => {
            const colors = ['primary', 'secondary', 'accent', 'primary', 'secondary', 'accent', 'primary', 'secondary'];
            const color = colors[i % colors.length];
            return (
              <div
                key={i}
                className={`group bg-background-50 rounded-2xl p-5 md:p-6 border border-background-200 hover:border-${color}-200 transition-all duration-400 cursor-default`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.05 + i * 0.06}s`,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-${color}-100 flex items-center justify-center transition-transform duration-400 group-hover:scale-110`}>
                    <i className={`${milestone.icon} text-${color}-500 text-lg`}></i>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-${color}-100 text-${color}-700`}>
                    {milestone.week}
                  </span>
                </div>
                <h4 className="font-heading text-sm md:text-base font-semibold text-foreground-900 mb-1.5">
                  {milestone.milestone}
                </h4>
                <p className="text-foreground-600 text-xs leading-relaxed">{milestone.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
