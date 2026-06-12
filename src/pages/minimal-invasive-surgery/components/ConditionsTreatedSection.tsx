import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { treatedConditions } from '@/mocks/minimalInvasiveSurgeryData';

export default function ConditionsTreatedSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary-100/70 border border-secondary-200/50 mb-4">
              <i className="ri-stethoscope-line text-secondary-700 text-xs mr-1.5"></i>
              <span className="text-secondary-700 text-xs font-semibold tracking-wide">Conditions We Treat</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Gynaecological Conditions Treated With MIS
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              A wide range of gynaecological conditions can be effectively managed through minimally invasive surgical approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {treatedConditions.map((condition, index) => (
              <div
                key={condition.id}
                className="bg-white rounded-2xl p-5 border border-background-200/70 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center mb-3 group-hover:bg-secondary-500 transition-colors duration-300">
                  <i className={`${condition.icon} text-secondary-600 group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground-900 mb-1.5">{condition.title}</h3>
                <p className="text-foreground-500 text-xs leading-relaxed">{condition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
