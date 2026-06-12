import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HPVVaccinationSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14 mb-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
                <i className="ri-syringe-line text-primary-600 text-xs mr-1.5"></i>
                <span className="text-primary-700 text-xs font-semibold tracking-wide">Featured Awareness</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                HPV Vaccination — Preventing Cervical Cancer
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
                The HPV vaccine is a genuine cancer prevention breakthrough. By protecting against the Human Papillomavirus types responsible for over 90% of cervical cancers, this vaccine saves lives. It also protects against vaginal, vulvar, anal, and oropharyngeal cancers, as well as genital warts.
              </p>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
                The HPV vaccine is most effective when administered before exposure to the virus — ideally between ages 9-14 when only 2 doses are required. For individuals aged 15-45, 3 doses are given at 0, 2, and 6 months for full protection.
              </p>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
                Over 270 million doses have been administered globally with an excellent safety record. The World Health Organization, CDC, and leading medical bodies unanimously recommend HPV vaccination.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20healthcare%20awareness%20display%20about%20HPV%20vaccination%20and%20cervical%20cancer%20prevention%2C%20educational%20medical%20infographic%20in%20a%20warm%20clinic%20environment%20with%20rose%20blush%20interior%20design&width=700&height=500&seq=vax-hpv-01&orientation=landscape"
                alt="HPV Vaccination Awareness"
                className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Key Facts Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { icon: 'ri-women-line', title: 'Ideal Age', desc: '9-45 years (ideally 9-14) for maximum immune response' },
              { icon: 'ri-shield-check-line', title: 'Protection', desc: 'Against 90% of cervical cancers and HPV-related diseases' },
              { icon: 'ri-global-line', title: 'Global Safety', desc: '270M+ doses given worldwide with excellent safety profile' },
              { icon: 'ri-calendar-check-line', title: 'Dosing Schedule', desc: '2 doses for ages 9-14 (6 months apart), 3 doses for ages 15-45 (0, 2, 6 months)' },
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-primary-50 to-background-50 rounded-2xl p-5 border border-primary-100/50 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <i className={`${item.icon} text-primary-600 text-lg`}></i>
                </div>
                <h4 className="font-heading text-primary-700 text-base font-semibold mb-1">{item.title}</h4>
                <p className="text-foreground-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
