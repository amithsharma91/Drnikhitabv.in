import { useCountUp } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { adolescentEarlyCareStats } from '@/mocks/adolescentGynaecologyData';

export default function EarlyCareStatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Early Care Impact
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Why Early Care Matters
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Early gynecological care during adolescence leads to better long-term health outcomes.
          </p>
        </div>

        <div className="bg-gradient-to-r from-background-50 via-accent-50 to-background-50 rounded-3xl p-6 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {adolescentEarlyCareStats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: { value: number; suffix: string; label: string }; index: number }) {
  const { count, ref } = useCountUp({ end: stat.value, startOnView: true, duration: 2200 });

  return (
    <div ref={ref} className="text-center px-4 py-6 relative group cursor-default">
      <div className="relative inline-block">
        <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-2 tabular-nums tracking-tight">
          {count}{stat.suffix}
        </div>
        <div className="absolute inset-0 bg-primary-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
      </div>
      <p className="text-foreground-600 text-xs md:text-sm font-medium transition-colors duration-300 group-hover:text-primary-600">
        {stat.label}
      </p>
    </div>
  );
}
