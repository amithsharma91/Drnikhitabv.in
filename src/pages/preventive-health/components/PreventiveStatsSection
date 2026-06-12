import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { preventiveHealthStats } from '@/mocks/preventiveHealthData';

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp({ end: value, duration: 2500, startOnView: true });

  return (
    <div ref={ref} className="text-center p-5 md:p-6 bg-white rounded-2xl border border-background-200/70 shadow-sm">
      <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-1">
        {count}{suffix}
      </div>
      <p className="text-foreground-500 text-sm">{label}</p>
    </div>
  );
}

export default function PreventiveStatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-star-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Why Choose Preventive Care</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Trusted Preventive Healthcare Expertise
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              With over a decade of specialized experience, Dr. Nikhita has helped thousands of women take control of their health through proactive, preventive care.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {preventiveHealthStats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: 'ri-global-line', title: 'MRCOG (UK) Qualified', desc: 'International standard of preventive care' },
              { icon: 'ri-shield-check-line', title: 'Evidence-Based Screening', desc: 'Following global best practice guidelines' },
              { icon: 'ri-heart-2-line', title: 'Compassionate Approach', desc: 'Gentle, respectful, judgment-free environment' },
            ].map((badge) => (
              <div key={badge.title} className="flex items-center space-x-3 bg-white rounded-xl p-4 border border-background-200/70">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className={`${badge.icon} text-primary-600 text-lg`}></i>
                </div>
                <div>
                  <p className="text-foreground-900 text-sm font-semibold">{badge.title}</p>
                  <p className="text-foreground-500 text-xs">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
