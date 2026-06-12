import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { safetyFeatures } from '@/mocks/minimalInvasiveSurgeryData';

export default function SafetyPrecisionSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-shield-star-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Trust & Safety</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Safety &amp; Precision
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Your safety is our highest priority. Every procedure is backed by international training, advanced technology, and meticulous surgical protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {safetyFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-5 md:p-6 border border-background-200/70 shadow-sm hover:shadow-md transition-all duration-300 group cursor-default"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-4 group-hover:bg-accent-500 transition-colors duration-300">
                  <i className={`${feature.icon} text-accent-600 group-hover:text-white text-xl transition-colors duration-300`}></i>
                </div>
                <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-2">{feature.title}</h3>
                <p className="text-foreground-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Trust strip */}
          <div className="mt-10 bg-white rounded-2xl border border-background-200/70 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <i className="ri-global-line text-primary-600 text-2xl"></i>
              </div>
              <div>
                <p className="text-foreground-900 font-semibold text-base md:text-lg">MRCOG (UK) Certified Surgeon</p>
                <p className="text-foreground-500 text-sm">Trained to international surgical standards at the Royal College of Obstetricians and Gynaecologists, United Kingdom</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-semibold">
                <i className="ri-shield-check-line mr-1.5"></i>
                Internationally Recognised
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
