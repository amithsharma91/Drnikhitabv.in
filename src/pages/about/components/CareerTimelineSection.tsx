import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { careerTimeline } from '@/mocks/aboutData';
import { motion } from 'framer-motion';

export default function CareerTimelineSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background-50 via-white to-background-50">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase">The Journey</span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Career Timeline
          </h2>
          <p className="text-foreground-500 text-sm max-w-xl mx-auto">
            Over a decade of dedicated learning, training, and service — each milestone building toward excellence in women&apos;s healthcare.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 hidden md:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"
              initial={{ height: '0%' }}
              animate={isVisible ? { height: '100%' } : {}}
              transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
            />
          </div>
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 md:hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"
              initial={{ height: '0%' }}
              animate={isVisible ? { height: '100%' } : {}}
              transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
            />
          </div>

          <div className="space-y-8 md:space-y-0">
            {careerTimeline.map((milestone, i) => (
              <motion.div
                key={i}
                className={`relative flex items-start gap-5 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Timeline dot with glow */}
                <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white border-[3px] border-primary-400 flex items-center justify-center shadow-sm transition-all duration-300 hover:border-primary-500 hover:shadow-md hover:shadow-primary-500/20`}>
                  <i className={`${milestone.icon} text-primary-500 text-sm`}></i>
                </div>

                {/* Spacer for desktop alternating */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className="bg-white rounded-2xl p-5 md:p-6 border border-background-200 transition-all duration-300 group cursor-default card-luxury"
                    whileHover={{
                      borderColor: 'rgba(216, 140, 165, 0.3)',
                    }}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 text-xs font-bold mb-3 whitespace-nowrap">
                      {milestone.year}
                    </span>
                    <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-foreground-600 text-sm leading-relaxed mb-3">
                      {milestone.description}
                    </p>
                    {milestone.highlight && (
                      <div className="bg-accent-50/60 border-l-[3px] border-accent-400 rounded-r-lg px-3 py-1.5">
                        <p className="text-xs font-medium text-accent-700 flex items-start gap-1.5">
                          <i className="ri-sparkling-line text-accent-500 mt-0.5 flex-shrink-0"></i>
                          {milestone.highlight}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
