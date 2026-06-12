import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { preventiveCareSteps } from '@/mocks/gynaecologicalExpertiseData';

export default function PreventiveCareSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-shield-check-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Preventive Healthcare</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Preventive Women&apos;s Healthcare
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Proactive care is the foundation of lifelong gynaecological wellness. Follow these essential preventive steps for optimal health at every age.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block"></div>

            <div className="space-y-6 md:space-y-0">
              {preventiveCareSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {/* Step number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-primary-300 flex items-center justify-center shadow-sm">
                      <span className="font-heading text-primary-600 font-bold text-lg">{step.step}</span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-white rounded-2xl p-5 md:p-6 border border-background-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 md:ml-0 w-full">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center">
                        <i className={`${step.icon} text-primary-600`}></i>
                      </div>
                      <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900">{step.title}</h3>
                    </div>
                    <p className="text-foreground-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
