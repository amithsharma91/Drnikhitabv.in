import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { longTermMethods } from '@/mocks/familyPlanningData';

export default function LongTermMethodsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20in%20a%20premium%20clinic%20explaining%20long%20term%20contraceptive%20options%20with%20an%20IUD%20model%20to%20a%20woman%20patient%2C%20rose%20blush%20and%20cream%20interior%2C%20modern%20medical%20setting%2C%20soft%20natural%20daylight%2C%20reassuring%20educational%20consultation%2C%20editorial%20healthcare%20photography&width=800&height=600&seq=family-planning-longterm-01&orientation=landscape"
                  alt="Long-term contraceptive methods"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
                <i className="ri-shield-check-line text-primary-700 text-xs mr-1.5"></i>
                <span className="text-primary-700 text-xs font-semibold tracking-wide">Long-Term Methods</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Long-Acting Reversible Contraception
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
                Long-acting reversible contraceptives (LARCs) are the most effective reversible methods available today — over 99% effective. They are hassle-free, require no daily attention, and can last for years while being completely reversible when you are ready for pregnancy.
              </p>
              <div className="space-y-3">
                {longTermMethods.map((method, index) => (
                  <div
                    key={method.title}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    className={`bg-white rounded-xl p-4 border border-background-200/70 hover:border-primary-200 hover:shadow-md transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className={`${method.icon} text-primary-600`}></i>
                      </div>
                      <div>
                        <h4 className="text-foreground-900 text-sm font-semibold mb-1">{method.title}</h4>
                        <p className="text-foreground-600 text-xs leading-relaxed mb-2">{method.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {method.features.map((f) => (
                            <span key={f} className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded-full text-xs">{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
