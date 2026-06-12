import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { temporaryMethods } from '@/mocks/familyPlanningData';

export default function TemporaryMethodsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary-100/70 border border-secondary-200/50 mb-4">
                <i className="ri-timer-line text-secondary-700 text-xs mr-1.5"></i>
                <span className="text-secondary-700 text-xs font-semibold tracking-wide">Temporary Methods</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Short-Term Contraceptive Methods
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
                Short-term contraceptive methods offer flexibility for women who are spacing pregnancies, want cycle control, or prefer options they can start and stop on their own schedule. These methods are ideal when you want reliable contraception with rapid return to fertility.
              </p>
              <div className="space-y-3">
                {temporaryMethods.map((method, index) => (
                  <div
                    key={method.title}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    className={`bg-white rounded-xl p-4 border border-background-200/70 hover:border-secondary-200 hover:shadow-md transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className={`${method.icon} text-secondary-600`}></i>
                      </div>
                      <div>
                        <h4 className="text-foreground-900 text-sm font-semibold mb-1">{method.title}</h4>
                        <p className="text-foreground-600 text-xs leading-relaxed mb-2">{method.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {method.features.map((f) => (
                            <span key={f} className="px-2 py-0.5 bg-secondary-50 text-secondary-700 rounded-full text-xs">{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Female%20doctor%20in%20a%20luxury%20clinic%20discussing%20short%20term%20contraceptive%20pill%20options%20with%20a%20young%20woman%2C%20rose%20blush%20and%20cream%20interior%2C%20educational%20contraceptive%20chart%20on%20wall%2C%20warm%20natural%20lighting%2C%20empowering%20healthcare%20consultation%2C%20editorial%20photography&width=800&height=600&seq=family-planning-temporary-01&orientation=landscape"
                  alt="Temporary contraceptive methods"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
