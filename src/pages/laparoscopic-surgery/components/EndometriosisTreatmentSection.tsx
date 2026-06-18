import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { endometriosisInfo } from '@/mocks/laparoscopicSurgeryData';

export default function EndometriosisTreatmentSection() {
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
              src="https://readdy.ai/api/search-image?query=Professional%20female%20surgeon%20wearing%20white%20coat%20having%20empathetic%20conversation%20with%20woman%20patient%20in%20premium%20women%20health%20clinic%20consultation%20room%2C%20digital%20screen%20on%20wall%20showing%20pelvic%20anatomy%20with%20endometriosis%20lesions%20highlighted%2C%20comfortable%20modern%20medical%20environment%20with%20natural%20window%20light%20and%20soft%20warm%20artificial%20lighting%2C%20clean%20feminine%20aesthetic%20with%20blush%20and%20cream%20tones%2C%20realistic%20editorial%20healthcare%20photography%20with%20authentic%20compassionate%20doctor%20patient%20interaction&width=700&height=500&seq=lap-endo-v3&orientation=landscape"
              alt="Laparoscopic Endometriosis Treatment"
              className="w-full rounded-2xl object-contain h-auto"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-heart-pulse-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Endometriosis Care</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              {endometriosisInfo.title}
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              {endometriosisInfo.description}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {endometriosisInfo.benefits.map((benefit) => (
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
