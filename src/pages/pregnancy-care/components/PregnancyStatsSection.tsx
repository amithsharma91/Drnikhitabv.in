import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { pregnancyStats } from '@/mocks/pregnancyCareData';
import { motion } from 'framer-motion';

export default function PregnancyStatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <motion.div
          className="bg-gradient-to-r from-background-50 via-accent-50 to-background-50 rounded-3xl p-6 md:p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {pregnancyStats.map((stat, i) => (
              <StatItem key={i} stat={stat} index={i} isVisible={isVisible} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ stat, index, isVisible }: { stat: { value: number; suffix: string; label: string }; index: number; isVisible: boolean }) {
  const colors = ['primary', 'secondary', 'accent', 'primary'];
  const color = colors[index % colors.length];
  const { count, ref } = useCountUp({ end: stat.value, startOnView: true, duration: 2200 });

  return (
    <motion.div
      ref={ref}
      className="text-center px-4 py-6 relative group cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative inline-block">
        <div className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-${color}-500 mb-2 tabular-nums tracking-tight`}>
          {count}{stat.suffix}
        </div>
        <div className={`absolute inset-0 bg-${color}-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 animate-glow-pulse`}></div>
      </div>
      <p className={`text-foreground-600 text-xs md:text-sm font-medium transition-colors duration-300 group-hover:text-${color}-600`}>
        {stat.label}
      </p>
    </motion.div>
  );
}
