import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { surgeryBenefits } from '@/mocks/minimalInvasiveSurgeryData';

export default function BenefitsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-star-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Why Choose MIS</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Benefits Of Advanced Surgery
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Minimally invasive techniques offer significant advantages over traditional open surgery across every dimension of the surgical experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {surgeryBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-5 md:p-6 border border-background-200/70 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-accent-100 flex items-center justify-center mb-4 group-hover:bg-accent-500 transition-colors duration-300">
                  <i className={`${benefit.icon} text-accent-600 group-hover:text-white text-lg transition-colors duration-300`}></i>
                </div>
                <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-2">{benefit.title}</h3>
                <p className="text-foreground-500 text-xs md:text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
