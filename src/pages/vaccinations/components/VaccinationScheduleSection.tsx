import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { vaccinationSchedule } from '@/mocks/vaccinationsData';

export default function VaccinationScheduleSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-time-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Vaccination Timeline</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Recommended Vaccination Schedule
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              A life-stage guide to essential vaccinations for women — from adolescence through mature adulthood.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200/60 -translate-x-1/2"></div>

            <div className="space-y-6 md:space-y-0">
              {vaccinationSchedule.map((phase, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={phase.age}
                    className={`relative flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-0 ${
                      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-background-50 z-10 shadow-sm"></div>

                    <div className={`w-full lg:w-[calc(50%-2rem)] ${isLeft ? 'lg:pr-10 lg:text-right' : 'lg:pl-10'}`}>
                      <div
                        className="bg-white rounded-2xl border border-background-200/70 p-5 md:p-6 hover:border-primary-200 transition-all duration-300"
                        style={{ transitionDelay: `${index * 120}ms` }}
                      >
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-3">{phase.age}</span>
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                            <i className={`${phase.icon} text-primary-600 text-lg`}></i>
                          </div>
                          <h3 className="font-heading text-foreground-900 text-base font-semibold">{phase.title}</h3>
                        </div>
                        <p className="text-foreground-500 text-xs md:text-sm leading-relaxed mb-3">{phase.description}</p>
                        <div className="flex flex-wrap gap-1.5 justify-start lg:justify-start">
                          {phase.vaccines.map((v) => (
                            <span key={v} className="inline-block px-2.5 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-medium border border-accent-200/50">
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:block w-[calc(50%-2rem)]"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
