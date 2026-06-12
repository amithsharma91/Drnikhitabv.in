import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WhyPreventiveSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-10 md:gap-14 transition-all duration-900 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-full lg:w-1/2">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20explaining%20preventive%20healthcare%20importance%20to%20a%20woman%20patient%20in%20a%20modern%20premium%20clinic%20consultation%20room%2C%20warm%20rose%20cream%20interior%2C%20soft%20natural%20daylight%2C%20compassionate%20educational%20atmosphere%2C%20editorial%20healthcare%20photography&width=700&height=500&seq=prev-why-01&orientation=landscape"
              alt="Why Preventive Healthcare Matters"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-shield-check-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Proactive Women's Health</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              Why Preventive Healthcare Matters
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Preventive healthcare is the cornerstone of long-term women's wellness. Rather than waiting for symptoms to appear, regular screenings and checkups allow for early detection of potential health issues — when they are most treatable and manageable.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              For women, this means consistent gynaecological screenings, cancer prevention strategies, hormonal health monitoring, and lifestyle assessments that together create a comprehensive picture of your health at every life stage.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              Dr. Nikhita B Vadvadgi brings over 12 years of experience to preventive care, combining advanced diagnostic expertise with genuine compassion. Her proactive approach ensures that you are not just treated for illness but actively supported in maintaining optimal health.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'ri-checkbox-circle-line', label: 'Early Cancer Detection' },
                { icon: 'ri-checkbox-circle-line', label: 'Hormonal Health Monitoring' },
                { icon: 'ri-checkbox-circle-line', label: 'Personalized Screening Plan' },
                { icon: 'ri-checkbox-circle-line', label: 'Long-Term Wellness Strategy' },
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-2 text-foreground-700 text-sm">
                  <i className={`${item.icon} text-primary-500`}></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
