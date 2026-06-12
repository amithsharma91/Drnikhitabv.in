import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { polypRemovalInfo } from '@/mocks/hysteroscopicSurgeryData';

export default function PolypRemovalSection() {
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
              src="https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20in%20white%20coat%20having%20consultation%20with%20woman%20patient%20in%20bright%20modern%20premium%20clinic%20examination%20room%2C%20digital%20tablet%20showing%20hysteroscopic%20view%20of%20endometrial%20polyp%20on%20screen%2C%20doctor%20explaining%20procedure%20with%20caring%20professional%20demeanor%2C%20warm%20natural%20daylight%20through%20large%20windows%2C%20clean%20contemporary%20women%20healthcare%20interior%20with%20soft%20pastel%20tones%2C%20realistic%20editorial%20medical%20photography%20with%20genuine%20doctor%20patient%20interaction%20and%20reassuring%20clinical%20atmosphere&width=700&height=500&seq=hsc-polyp-v3&orientation=landscape"
              alt="Hysteroscopic Polyp Removal"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-plant-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Polyp Treatment</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              {polypRemovalInfo.title}
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              {polypRemovalInfo.description}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {polypRemovalInfo.benefits.map((benefit) => (
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
