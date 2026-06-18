import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ovulationDisorderCards } from '@/mocks/fertilityCareData';

export default function OvulationDisordersSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-bubble-chart-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Ovulation Health</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Understanding Ovulation Disorders
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Ovulation disorders are among the most common and treatable causes of female infertility. Understanding the underlying cause is the first step toward effective treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {ovulationDisorderCards.map((card, index) => (
              <div
                key={card.id}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`bg-white rounded-2xl border border-background-200/70 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="h-auto overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-auto object-contain" loading="lazy" />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <i className={`${card.icon} text-accent-600 text-lg`}></i>
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-900">{card.title}</h3>
                  </div>
                  <p className="text-foreground-600 text-sm leading-relaxed mb-4">{card.description}</p>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground-500 uppercase tracking-wider mb-2">Key Effects</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {card.effects.map((e) => (
                        <span key={e} className="px-2.5 py-1 bg-accent-50 text-accent-700 rounded-full text-xs">{e}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground-500 uppercase tracking-wider mb-2">Management Approach</h4>
                    <p className="text-foreground-600 text-xs md:text-sm leading-relaxed">{card.management}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
