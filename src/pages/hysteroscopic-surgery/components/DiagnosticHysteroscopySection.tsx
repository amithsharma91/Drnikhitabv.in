import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { diagnosticHysteroscopyInfo } from '@/mocks/hysteroscopicSurgeryData';

export default function DiagnosticHysteroscopySection() {
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
              src="https://readdy.ai/api/search-image?query=Professional%20female%20gynecological%20specialist%20in%20white%20coat%20seated%20at%20consultation%20desk%20discussing%20diagnostic%20hysteroscopy%20with%20woman%20patient%20in%20premium%20clinic%20room%2C%20HD%20monitor%20on%20wall%20displaying%20clear%20healthy%20uterine%20cavity%20with%20visible%20fallopian%20tube%20openings%2C%20modern%20medical%20examination%20chair%20in%20background%2C%20warm%20natural%20lighting%20through%20window%2C%20clean%20contemporary%20women%20healthcare%20environment%20with%20soft%20feminine%20aesthetic%2C%20realistic%20editorial%20medical%20photography%20with%20professional%20reassuring%20doctor%20patient%20conversation&width=700&height=500&seq=hsc-diagnostic-v3&orientation=landscape"
              alt="Diagnostic Hysteroscopy"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-search-eye-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Accurate Diagnosis</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              {diagnosticHysteroscopyInfo.title}
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              {diagnosticHysteroscopyInfo.description}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {diagnosticHysteroscopyInfo.benefits.map((benefit) => (
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
