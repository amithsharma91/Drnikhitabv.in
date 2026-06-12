import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CervicalCancerScreeningSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14 mb-12 md:mb-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
                <i className="ri-test-tube-line text-primary-600 text-xs mr-1.5"></i>
                <span className="text-primary-700 text-xs font-semibold tracking-wide">Cancer Screening</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Cervical Cancer Screening
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
                Cervical cancer is one of the most preventable cancers — yet thousands of women are diagnosed every year, often because they missed regular screenings. With consistent Pap smears and HPV testing, cervical cancer can be detected at pre-cancerous stages when treatment is simple and highly effective.
              </p>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
                Dr. Nikhita follows international screening guidelines, recommending Pap smears starting at age 25, with HPV co-testing from age 25. Each screening is performed with the utmost gentleness and respect in a comfortable, private setting.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20medical%20diagnostic%20room%20with%20premium%20healthcare%20equipment%2C%20female%20doctor%20preparing%20cervical%20cancer%20screening%20tools%20in%20a%20clean%20warm%20clinic%20environment%20with%20rose%20cream%20interior%20design&width=700&height=500&seq=prev-cervical-01&orientation=landscape"
                alt="Cervical Cancer Screening"
                className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Screening Infographic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { icon: 'ri-calendar-check-line', title: 'Age 25+', desc: 'Start Pap Smear screening every 3 years regardless of sexual activity' },
              { icon: 'ri-test-tube-line', title: 'Age 25–60', desc: 'Pap + HPV co-testing every 5 years, or Pap alone every 3 years' },
              { icon: 'ri-shield-check-line', title: 'HPV Vaccine', desc: 'Protection against high-risk HPV types that cause 90% of cervical cancers' },
              { icon: 'ri-heart-pulse-line', title: 'Early Detection', desc: 'Over 90% cure rate when cervical pre-cancers are detected and treated early' },
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
