import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { lifestyleFactors } from '@/mocks/prePregnancyData';

export default function LifestyleAssessmentSection() {
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
            Lifestyle
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Lifestyle Assessment
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Your daily habits and lifestyle choices play a crucial role in fertility and pregnancy health.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {lifestyleFactors.map((factor, i) => {
            const color = factor.color === 'primary' ? 'primary' : 'secondary';
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl p-5 md:p-6 border border-background-200 hover:border-primary-200 transition-all duration-400 cursor-default text-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.08 + i * 0.1}s`,
                }}
              >
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-${color}-100 flex items-center justify-center mb-4 transition-all duration-400 group-hover:scale-110 group-hover:bg-${color}-200`}>
                  <i className={`${factor.icon} text-${color}-500 text-xl`}></i>
                </div>
                <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-2">
                  {factor.title}
                </h3>
                <p className="text-foreground-600 text-sm leading-relaxed">{factor.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
