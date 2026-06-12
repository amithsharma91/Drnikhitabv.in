import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fibroidRemovalInfo } from '@/mocks/hysteroscopicSurgeryData';

export default function FibroidRemovalSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-10 md:gap-14 transition-all duration-900 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-full lg:w-1/2 lg:order-2">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20female%20gynecological%20surgeon%20in%20white%20coat%20consulting%20woman%20patient%20in%20premium%20clinic%20room%2C%20digital%20display%20on%20wall%20showing%20uterine%20cavity%20diagram%20with%20submucosal%20fibroid%20highlighted%2C%20doctor%20explaining%20treatment%20options%20with%20compassionate%20expression%2C%20warm%20natural%20daylight%20through%20window%2C%20modern%20healthcare%20environment%20with%20soft%20blush%20and%20cream%20feminine%20decor%2C%20realistic%20editorial%20medical%20photography%20with%20authentic%20reassuring%20doctor%20patient%20consultation&width=700&height=500&seq=hsc-fibroid-v3&orientation=landscape"
              alt="Hysteroscopic Fibroid Removal"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-bubble-chart-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Fibroid Treatment</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              {fibroidRemovalInfo.title}
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              {fibroidRemovalInfo.description}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {fibroidRemovalInfo.benefits.map((benefit) => (
                <div key={benefit.label} className="flex items-center space-x-2 text-foreground-700 text-sm">
                  <i className={`${benefit.icon} text-primary-500`}></i>
                  <span>{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
