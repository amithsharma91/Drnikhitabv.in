import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { recoveryInfo } from '@/mocks/hysteroscopicSurgeryData';

export default function RecoveryInfoSection() {
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
          <div className="w-full lg:w-1/2">
            <img
              src="https://readdy.ai/api/search-image?query=Comfortable%20modern%20outpatient%20recovery%20area%20in%20premium%20gynecology%20clinic%2C%20woman%20resting%20in%20reclining%20chair%20after%20procedure%2C%20warm%20soothing%20ambient%20lighting%2C%20clean%20peaceful%20healthcare%20environment%20with%20caring%20professional%20atmosphere&width=700&height=500&seq=hsc-recovery-01&orientation=landscape"
              alt="Recovery After Hysteroscopic Surgery"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-heart-pulse-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Recovery Information</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              {recoveryInfo.title}
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              {recoveryInfo.description}
            </p>
            <div className="space-y-4">
              {recoveryInfo.points.map((point) => (
                <div key={point.title} className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className={`${point.icon} text-primary-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-foreground-900 text-sm font-semibold mb-0.5">{point.title}</h3>
                    <p className="text-foreground-500 text-xs leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
