import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { trimesterData } from '@/mocks/pregnancyCareData';

export default function PregnancyTimelineSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-16 md:py-24 bg-background-50">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Your Journey
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Pregnancy Journey Timeline
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Understanding each stage of your pregnancy and what to expect along the way.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal connector line */}
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300"></div>
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-secondary-300 to-primary-300"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {trimesterData.map((tri, i) => (
              <div
                key={i}
                className="relative flex md:flex-col items-center md:items-center gap-4 md:gap-0"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.2 + i * 0.2}s`,
                }}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-${tri.color}-500 border-4 border-white shadow-sm flex items-center justify-center flex-shrink-0 mb-0 md:mb-5 transition-all duration-400 hover:scale-110 cursor-default`}>
                  <i className={`${tri.icon} text-white text-lg`}></i>
                </div>

                {/* Content */}
                <div className="md:text-center flex-1 bg-white rounded-2xl p-5 md:p-6 border border-background-200 hover:border-primary-200 transition-all duration-400">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-${tri.color}-100 text-${tri.color}-700 mb-2`}>
                    {tri.weeks}
                  </span>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-900 mb-3">{tri.trimester}</h3>
                  <p className="text-foreground-600 text-sm leading-relaxed mb-3">{tri.description}</p>
                  <ul className="text-left space-y-1.5">
                    {tri.highlights.map((h, j) => (
                      <li key={j} className="flex items-start text-xs text-foreground-600">
                        <i className={`ri-checkbox-circle-line text-${tri.color}-500 mr-1.5 mt-0.5 flex-shrink-0 text-xs`}></i>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
