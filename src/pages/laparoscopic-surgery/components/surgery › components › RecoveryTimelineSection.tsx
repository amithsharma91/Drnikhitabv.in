import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { recoveryTimeline } from '@/mocks/laparoscopicSurgeryData';

export default function RecoveryTimelineSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-road-map-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Your Journey</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Recovery Timeline
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              From your initial consultation through complete recovery — here&apos;s what to expect at every stage of your laparoscopic surgery journey.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-0.5 bg-primary-200"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-3">
              {recoveryTimeline.map((step, index) => (
                <div
                  key={step.step}
                  className="relative flex flex-col items-center text-center"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-primary-300 flex flex-col items-center justify-center shadow-sm mb-3 md:mb-4">
                    <span className="font-heading text-primary-600 font-bold text-sm">0{step.step}</span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-2 md:mb-3">
                    <i className={`${step.icon} text-primary-600`}></i>
                  </div>

                  <h3 className="font-heading text-sm md:text-base font-semibold text-foreground-900 mb-1">{step.title}</h3>
                  <p className="text-foreground-500 text-xs leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
