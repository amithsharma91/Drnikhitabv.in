import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { healthScreeningCards } from '@/mocks/prePregnancyData';

export default function HealthScreeningSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
            Health Screening
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Comprehensive Health Evaluation
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A thorough health assessment ensures you are in the best possible health before conception.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {healthScreeningCards.map((card, i) => {
            const isExpanded = expandedIndex === i;
            const color = card.color === 'primary' ? 'primary' : 'secondary';
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 md:p-7 border border-background-200 cursor-pointer transition-all duration-500 hover:shadow-md ${
                  isExpanded ? `border-${color}-300 shadow-md` : `hover:border-${color}-200`
                }`}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.08 + i * 0.1}s`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-${color}-100 flex items-center justify-center flex-shrink-0 transition-transform duration-400 group-hover:scale-110`}>
                    <i className={`${card.icon} text-${color}-500 text-xl md:text-2xl`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-foreground-600 text-sm leading-relaxed mb-3">{card.description}</p>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="space-y-1.5">
                        {card.items.map((item, j) => (
                          <li key={j} className="flex items-center text-sm text-foreground-600">
                            <i className={`ri-checkbox-circle-line text-${color}-500 mr-2 text-sm`}></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className={`inline-flex items-center text-xs font-medium text-${color}-500 mt-2`}>
                      {isExpanded ? 'Show Less' : 'View Details'}
                      {isExpanded ? (
                        <i className="ri-arrow-up-s-line ml-1"></i>
                      ) : (
                        <i className="ri-arrow-down-s-line ml-1"></i>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
