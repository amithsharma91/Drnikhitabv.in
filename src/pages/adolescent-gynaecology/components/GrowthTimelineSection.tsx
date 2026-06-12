import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { adolescentTimeline } from '@/mocks/adolescentGynaecologyData';

export default function GrowthTimelineSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Growth Journey
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Adolescent Growth Timeline
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Understanding the key stages of adolescent development and when to seek expert guidance.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-secondary-300 to-primary-200 md:-translate-x-px hidden md:block"></div>
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-secondary-300 to-primary-200 md:hidden"></div>

          <div className="space-y-8 md:space-y-12">
            {adolescentTimeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.15 + i * 0.15}s`,
                }}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white shadow-sm -translate-x-1/2 z-10 mt-1.5"></div>

                {/* Content */}
                <div className={`pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <div className="bg-background-50 rounded-2xl p-5 md:p-6 border border-background-200 hover:border-primary-200 transition-all duration-300 group cursor-default">
                    <div className="flex items-center md:items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-${i % 2 === 0 ? 'primary' : 'secondary'}-100 flex items-center justify-center flex-shrink-0 ${i % 2 === 0 ? 'md:order-last md:ml-auto' : ''}`}>
                        <i className={`${item.icon} text-${i % 2 === 0 ? 'primary' : 'secondary'}-500 text-lg`}></i>
                      </div>
                      <div className={i % 2 === 0 ? 'md:text-right' : ''}>
                        <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-${i % 2 === 0 ? 'primary' : 'secondary'}-100 text-${i % 2 === 0 ? 'primary' : 'secondary'}-700 mb-1`}>
                          {item.age}
                        </span>
                        <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-900">
                          {item.stage}
                        </h3>
                      </div>
                    </div>
                    <p className={`text-foreground-600 text-sm leading-relaxed ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
