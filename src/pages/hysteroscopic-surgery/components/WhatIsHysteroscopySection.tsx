import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WhatIsHysteroscopySection() {
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
              src="https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20in%20white%20coat%20standing%20beside%20modern%20hysteroscopy%20equipment%20tower%20in%20premium%20outpatient%20procedure%20suite%2C%20pointing%20to%20HD%20monitor%20displaying%20clear%20uterine%20cavity%20view%2C%20thin%20hysteroscope%20instrument%20visible%20on%20sterile%20tray%2C%20bright%20clean%20contemporary%20clinical%20environment%20with%20warm%20balanced%20lighting%2C%20comfortable%20modern%20women%20healthcare%20setting%20with%20soft%20feminine%20aesthetic%2C%20realistic%20editorial%20medical%20photography%20with%20professional%20reassuring%20atmosphere&width=700&height=500&seq=hsc-whatis-v3&orientation=landscape"
              alt="What Is Hysteroscopy"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-microscope-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Understanding Hysteroscopy</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              What Is Hysteroscopic Surgery?
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Hysteroscopy is a remarkable minimally invasive procedure that allows direct visualization of the inside of the uterus without any abdominal incisions. A thin, lighted telescope called a hysteroscope is gently passed through the vagina and cervix into the uterine cavity.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              The hysteroscope transmits high-definition images to a monitor, giving Dr. Nikhita a crystal-clear magnified view of the uterine lining. This enables both accurate <strong>diagnosis</strong> of uterine conditions and precise <strong>treatment</strong> using specialized micro-instruments passed through the scope.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              Because the procedure uses the body&apos;s natural pathway, there are <strong>no incisions, no scars, and remarkably quick recovery</strong>. Most patients go home the same day and return to normal activities within 1-3 days — making it the least invasive surgical approach in gynaecology.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'ri-magic-line', label: 'No Abdominal Incisions' },
                { icon: 'ri-home-line', label: 'Same-Day Discharge' },
                { icon: 'ri-timer-line', label: '1-3 Day Recovery' },
                { icon: 'ri-contrast-drop-line', label: 'No Visible Scarring' },
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
