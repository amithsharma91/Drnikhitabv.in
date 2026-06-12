import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HormonalHealthSection() {
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
              src="https://readdy.ai/api/search-image?query=Professional%20female%20doctor%20in%20a%20luxury%20wellness%20clinic%20discussing%20hormonal%20balance%20and%20women%20health%20with%20a%20smiling%20woman%20patient%2C%20rose%20blush%20and%20cream%20interior%20design%2C%20natural%20lighting%2C%20healthy%20lifestyle%20consultation%2C%20editorial%20photography%20style%20with%20warm%20gentle%20tones&width=700&height=500&seq=gynae-hormonal-detail-01&orientation=landscape"
              alt="Hormonal Health & Balance"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-test-tube-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Endocrine Wellness</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              Hormonal Health &amp; Balance
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Hormones orchestrate nearly every aspect of women&apos;s health — from menstrual cycles and fertility to metabolism, mood, sleep, skin health, and bone density. When hormonal balance is disrupted, the effects ripple across multiple body systems.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              Dr. Nikhita takes a holistic approach to hormonal health, combining detailed diagnostic testing with personalised treatment strategies. Whether you&apos;re dealing with thyroid dysfunction, perimenopausal changes, PMOS-related imbalances, or unexplained symptoms, a comprehensive evaluation will identify the root cause and guide targeted treatment.
            </p>
            <div className="space-y-3">
              {[
                { icon: 'ri-checkbox-circle-line', label: 'Comprehensive hormonal panel testing', color: 'text-primary-500' },
                { icon: 'ri-checkbox-circle-line', label: 'Thyroid function assessment and management', color: 'text-accent-500' },
                { icon: 'ri-checkbox-circle-line', label: 'Perimenopause and menopause hormone support', color: 'text-secondary-500' },
                { icon: 'ri-checkbox-circle-line', label: 'Lifestyle and nutrition-based hormone optimisation', color: 'text-primary-500' },
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-3">
                  <i className={`${item.icon} ${item.color}`}></i>
                  <span className="text-foreground-700 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
