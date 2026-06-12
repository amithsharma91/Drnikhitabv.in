import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WhyFamilyPlanningSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-heart-2-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Why It Matters</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Why Family Planning Matters
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Family planning is one of the most impactful health decisions a woman can make — affecting physical health, emotional wellbeing, family dynamics, and life opportunities.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Confident%20woman%20in%20a%20luxury%20clinic%20consultation%20with%20a%20female%20gynecologist%20discussing%20family%20planning%20goals%20and%20reproductive%20health%2C%20rose%20blush%20and%20cream%20interior%2C%20warm%20natural%20lighting%2C%20empowered%20healthcare%20atmosphere%2C%20editorial%20photography&width=800&height=600&seq=family-planning-why-01&orientation=landscape"
                  alt="Why family planning matters"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: 'ri-heart-pulse-line',
                    stat: '30%',
                    title: 'Reduced Maternal Mortality',
                    desc: 'Access to family planning prevents an estimated 30% of maternal deaths by reducing unintended and high-risk pregnancies.',
                  },
                  {
                    icon: 'ri-user-heart-line',
                    stat: '25%',
                    title: 'Reduced Infant Mortality',
                    desc: 'Healthy birth spacing of 2+ years reduces infant mortality by approximately 25% according to WHO data.',
                  },
                  {
                    icon: 'ri-mental-health-line',
                    stat: '3x',
                    title: 'Better Mental Health',
                    desc: 'Women with access to family planning report significantly lower rates of anxiety and stress related to reproductive concerns.',
                  },
                  {
                    icon: 'ri-briefcase-line',
                    stat: '40%',
                    title: 'Increased Economic Opportunity',
                    desc: 'Family planning access is associated with higher education completion and workforce participation rates for women.',
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    style={{ transitionDelay: `${index * 120}ms` }}
                    className={`bg-white rounded-2xl p-5 border border-background-200/70 hover:border-accent-200 hover:shadow-md transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center mb-3">
                      <i className={`${item.icon} text-accent-600 text-lg`}></i>
                    </div>
                    <span className="font-heading text-2xl font-bold text-accent-600 block mb-1">{item.stat}</span>
                    <h4 className="text-foreground-900 text-sm font-semibold mb-1.5">{item.title}</h4>
                    <p className="text-foreground-500 text-xs leading-relaxed">{item.desc}</p>
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
