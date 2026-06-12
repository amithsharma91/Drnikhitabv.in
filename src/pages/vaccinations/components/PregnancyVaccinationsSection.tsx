import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { pregnancyVaccinations } from '@/mocks/vaccinationsData';

export default function PregnancyVaccinationsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14 mb-12">
            <div className="w-full lg:w-1/2">
              <img
                src="https://readdy.ai/api/search-image?query=Pregnant%20woman%20receiving%20gentle%20vaccination%20care%20from%20a%20female%20doctor%20in%20a%20warm%20premium%20maternity%20clinic%2C%20compassionate%20healthcare%20atmosphere%2C%20rose%20cream%20interior%20design&width=700&height=500&seq=vax-pregnancy-01&orientation=landscape"
                alt="Vaccinations During Pregnancy"
                className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
                <i className="ri-user-heart-line text-primary-600 text-xs mr-1.5"></i>
                <span className="text-primary-700 text-xs font-semibold tracking-wide">Maternal Protection</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Vaccinations During Pregnancy
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
                Pregnancy is a critical window for vaccination — protecting not just the mother but also passing protective antibodies to the baby. Some vaccines are essential during pregnancy, while others should be completed before conception.
              </p>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
                Dr. Nikhita provides clear, evidence-based guidance on which vaccines are safe and recommended during each trimester, ensuring both you and your baby receive optimal protection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {pregnancyVaccinations.map((vax, index) => (
              <div
                key={vax.title}
                className={`rounded-2xl border p-5 md:p-6 transition-all duration-300 ${
                  vax.priority === 'Essential'
                    ? 'bg-white border-accent-300'
                    : vax.priority === 'Contraindicated'
                      ? 'bg-background-50 border-background-300'
                      : 'bg-white border-background-200/70'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    vax.priority === 'Essential' ? 'bg-accent-100' : vax.priority === 'Contraindicated' ? 'bg-background-200' : 'bg-primary-100'
                  }`}>
                    <i className={`${
                      vax.priority === 'Essential' ? 'text-accent-600' : vax.priority === 'Contraindicated' ? 'text-foreground-400' : 'text-primary-600'
                    } text-lg ${vax.icon}`}></i>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-heading text-foreground-900 text-base font-semibold">{vax.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        vax.priority === 'Essential' ? 'bg-accent-100 text-accent-700' : vax.priority === 'Contraindicated' ? 'bg-background-200 text-foreground-500' : 'bg-primary-100 text-primary-600'
                      }`}>{vax.priority}</span>
                    </div>
                    <p className="text-foreground-500 text-xs md:text-sm leading-relaxed mb-2">{vax.description}</p>
                    <span className="text-foreground-400 text-xs font-medium">{vax.timing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
