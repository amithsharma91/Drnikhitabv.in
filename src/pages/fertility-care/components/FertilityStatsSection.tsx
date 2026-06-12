import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { fertilityStats } from '@/mocks/fertilityCareData';
import { motion } from 'framer-motion';

function StatCard({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const { count, ref } = useCountUp({ end: value, duration: 2500, startOnView: true });

  return (
    <motion.div
      ref={ref}
      className="text-center p-5 md:p-6 bg-white rounded-2xl border border-background-200/70 shadow-sm hover:border-primary-200 transition-all duration-300 card-luxury"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-1">
        {count}{suffix}
      </div>
      <p className="text-foreground-500 text-sm">{label}</p>
    </motion.div>
  );
}

export default function FertilityStatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-star-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Why Choose Dr. Nikhita</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Trusted Fertility Expertise
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              With over a decade of specialized experience and advanced international qualifications, Dr. Nikhita has helped countless couples on their path to parenthood.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {fertilityStats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} index={i} />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: 'ri-global-line', title: 'MRCOG (UK) Qualified', desc: 'International standard of fertility care' },
              { icon: 'ri-award-line', title: 'FRM Certified', desc: 'Fellowship in Reproductive Medicine' },
              { icon: 'ri-heart-2-line', title: 'Patient-First Philosophy', desc: 'Compassionate, personalized fertility care' },
            ].map((badge, i) => (
              <motion.div
                key={badge.title}
                className="flex items-center space-x-3 bg-white rounded-xl p-4 border border-background-200/70 hover:border-primary-200 transition-all duration-300 card-luxury"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                  <i className={`${badge.icon} text-primary-600 text-lg`}></i>
                </div>
                <div>
                  <p className="text-foreground-900 text-sm font-semibold">{badge.title}</p>
                  <p className="text-foreground-500 text-xs">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
