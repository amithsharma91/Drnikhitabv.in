import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { procedureOverviewSteps } from '@/mocks/laparoscopicSurgeryData';

export default function ProcedureOverviewSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-information-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">What To Expect</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Procedure Overview
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Understanding the laparoscopic surgery process helps reduce anxiety and ensures you feel prepared and confident every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {procedureOverviewSteps.map((item, index) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-5 md:p-6 border border-background-200/70 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default relative"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold">
                  {item.step}
                </div>
                <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <i className={`${item.icon} text-primary-600 group-hover:text-white text-lg transition-colors duration-300`}></i>
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground-900 mb-2">{item.title}</h3>
                <p className="text-foreground-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
