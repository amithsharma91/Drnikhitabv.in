import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function RiskAssessmentSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const riskFactors = [
    { icon: 'ri-heart-pulse-line', title: 'Chronic Conditions', desc: 'Diabetes, hypertension, thyroid disorders, and other conditions are evaluated and optimized.' },
    { icon: 'ri-dna-line', title: 'Genetic Risk Factors', desc: 'Family history screening and genetic counselling for inherited conditions when indicated.' },
    { icon: 'ri-scales-line', title: 'Weight Assessment', desc: 'BMI evaluation and personalized weight management guidance for optimal fertility.' },
    { icon: 'ri-calendar-event-line', title: 'Age-Related Factors', desc: 'Understanding how maternal age affects pregnancy and personalized planning strategies.' },
    { icon: 'ri-mental-health-line', title: 'Lifestyle Risks', desc: 'Smoking, alcohol, and environmental exposures are assessed with cessation support provided.' },
    { icon: 'ri-history-line', title: 'Previous Pregnancy History', desc: 'Analysis of any previous pregnancy complications to prevent recurrence.' },
  ];

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
            Risk Assessment
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Comprehensive Risk Evaluation
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Identifying and addressing potential risk factors before pregnancy for the safest possible journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {riskFactors.map((item, i) => (
            <div
              key={i}
              className="group bg-background-50 rounded-2xl p-5 md:p-6 border border-background-200 hover:border-primary-200 transition-all duration-400 cursor-default"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.06 + i * 0.08}s`,
              }}
            >
              <div className={`w-11 h-11 rounded-xl bg-${i % 2 === 0 ? 'primary' : 'secondary'}-100 flex items-center justify-center mb-3 transition-transform duration-400 group-hover:scale-110`}>
                <i className={`${item.icon} text-${i % 2 === 0 ? 'primary' : 'secondary'}-500 text-lg`}></i>
              </div>
              <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-2">{item.title}</h3>
              <p className="text-foreground-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
