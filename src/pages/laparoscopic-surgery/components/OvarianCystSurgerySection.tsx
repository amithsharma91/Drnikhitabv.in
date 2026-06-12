import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ovarianCystSurgeryInfo } from '@/mocks/laparoscopicSurgeryData';

export default function OvarianCystSurgerySection() {
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
              src="https://readdy.ai/api/search-image?query=Professional%20female%20surgeon%20in%20white%20coat%20seated%20at%20desk%20in%20premium%20consultation%20room%20discussing%20ovarian%20cyst%20treatment%20options%20with%20woman%20patient%20holding%20anatomical%20model%2C%20digital%20tablet%20on%20desk%20showing%20ovary%20ultrasound%20image%2C%20warm%20natural%20daylight%20streaming%20through%20large%20window%2C%20modern%20feminine%20healthcare%20clinic%20interior%20with%20soft%20pastel%20decor%2C%20realistic%20editorial%20medical%20photography%20with%20genuine%20doctor%20patient%20interaction%20and%20professional%20compassionate%20atmosphere&width=700&height=500&seq=lap-cyst-v3&orientation=landscape"
              alt="Laparoscopic Ovarian Cyst Surgery"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-drop-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Ovarian Cysts</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              {ovarianCystSurgeryInfo.title}
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              {ovarianCystSurgeryInfo.description}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {ovarianCystSurgeryInfo.benefits.map((benefit) => (
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
