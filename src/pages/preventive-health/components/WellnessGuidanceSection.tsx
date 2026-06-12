import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { wellnessGuidance } from '@/mocks/preventiveHealthData';

export default function WellnessGuidanceSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-heart-pulse-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Wellness & Lifestyle</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Lifestyle & Wellness Guidance
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Holistic lifestyle recommendations that support your body's natural defenses, promote hormonal balance, and enhance overall wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {wellnessGuidance.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-background-200/70 p-5 md:p-6 flex items-start space-x-4 hover:border-primary-200 hover:shadow-sm transition-all duration-300 cursor-pointer group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors duration-400">
                  <i className={`${item.icon} text-accent-600 group-hover:text-white text-xl transition-colors duration-400`}></i>
                </div>
                <div>
                  <h3 className="font-heading text-foreground-900 text-base font-semibold mb-1">{item.title}</h3>
                  <p className="text-foreground-500 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
