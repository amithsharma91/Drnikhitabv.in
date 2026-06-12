import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { gynaeConditions } from '@/mocks/gynaecologicalExpertiseData';

export default function CommonConcernsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-stethoscope-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Common Health Concerns</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Common Women&apos;s Health Concerns
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Understanding common gynaecological conditions — their symptoms, diagnosis and treatment options. Tap any card to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {gynaeConditions.map((condition, index) => {
              const isExpanded = expandedId === condition.id;
              return (
                <div
                  key={condition.id}
                  onClick={() => toggleExpand(condition.id)}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className={`bg-white rounded-2xl p-5 md:p-6 cursor-pointer transition-all duration-500 ease-out border hover:shadow-lg hover:-translate-y-1 ${
                    isExpanded
                      ? 'border-primary-300 shadow-md ring-1 ring-primary-200'
                      : 'border-background-200/70 shadow-sm'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                >
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isExpanded ? 'bg-primary-500 text-white' : 'bg-primary-100 text-primary-600'
                    }`}>
                      <i className={`${condition.icon} text-lg`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-1">
                        {condition.title}
                      </h3>
                      <p className="text-foreground-500 text-xs md:text-sm leading-relaxed">
                        {condition.shortDescription}
                      </p>
                    </div>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <i className="ri-arrow-down-s-line text-foreground-400"></i>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isExpanded ? 'max-h-[600px] mt-5 opacity-100' : 'max-h-0 mt-0 opacity-0'
                    }`}
                  >
                    <div className="border-t border-background-200 pt-4 space-y-4">
                      <div className="rounded-xl overflow-hidden h-40 sm:h-48">
                        <img
                          src={condition.image}
                          alt={condition.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-foreground-500 uppercase tracking-wider mb-2">Symptoms</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {condition.symptoms.map((s) => (
                            <span key={s} className="px-2.5 py-1 bg-primary-50 text-primary-700 rounded-full text-xs">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-foreground-500 uppercase tracking-wider mb-2">Diagnosis</h4>
                        <p className="text-foreground-600 text-xs md:text-sm">{condition.diagnosis}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-foreground-500 uppercase tracking-wider mb-2">Treatment Options</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {condition.treatmentOptions.map((t) => (
                            <span key={t} className="px-2.5 py-1 bg-accent-50 text-accent-700 rounded-full text-xs">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
