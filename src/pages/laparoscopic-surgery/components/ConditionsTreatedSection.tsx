import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { laparoscopicConditions } from '@/mocks/laparoscopicSurgeryData';

export default function ConditionsTreatedSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary-100/70 border border-secondary-200/50 mb-4">
              <i className="ri-stethoscope-line text-secondary-700 text-xs mr-1.5"></i>
              <span className="text-secondary-700 text-xs font-semibold tracking-wide">Conditions We Treat</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Conditions Treated With Laparoscopy
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              A wide range of gynaecological conditions can be effectively managed through laparoscopic surgery. Tap any card to learn about symptoms, diagnosis and treatment options.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {laparoscopicConditions.map((condition, index) => {
              const isExpanded = expandedId === condition.id;
              return (
                <div
                  key={condition.id}
                  onClick={() => toggleExpand(condition.id)}
                  className={`bg-white rounded-2xl border border-background-200/70 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group overflow-hidden ${
                    isExpanded ? 'lg:col-span-2 shadow-md' : ''
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="p-5 md:p-6">
                    <div className="w-11 h-11 rounded-xl bg-secondary-100 flex items-center justify-center mb-4 group-hover:bg-secondary-500 transition-colors duration-300">
                      <i className={`${condition.icon} text-secondary-600 group-hover:text-white text-lg transition-colors duration-300`}></i>
                    </div>
                    <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-2">{condition.title}</h3>
                    <p className="text-foreground-500 text-xs md:text-sm leading-relaxed mb-3">{condition.description}</p>
                    <span className="inline-flex items-center text-primary-600 text-xs font-semibold">
                      <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                      <i className={`ml-1 transition-transform duration-300 ${isExpanded ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                    </span>
                  </div>

                  {/* Expanded content */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-background-100 pt-4">
                      <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-2/5">
                          <img
                            src={condition.image}
                            alt={condition.title}
                            className="w-full rounded-xl object-contain h-auto"
                            loading="lazy"
                          />
                        </div>
                        <div className="w-full lg:w-3/5 space-y-3">
                          <div>
                            <p className="text-foreground-400 text-xs font-semibold uppercase tracking-wide mb-1">Symptoms</p>
                            <p className="text-foreground-600 text-xs leading-relaxed">{condition.symptoms}</p>
                          </div>
                          <div>
                            <p className="text-foreground-400 text-xs font-semibold uppercase tracking-wide mb-1">Diagnosis</p>
                            <p className="text-foreground-600 text-xs leading-relaxed">{condition.diagnosis}</p>
                          </div>
                          <div>
                            <p className="text-foreground-400 text-xs font-semibold uppercase tracking-wide mb-1">Treatment Options</p>
                            <p className="text-foreground-600 text-xs leading-relaxed">{condition.treatmentOptions}</p>
                          </div>
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
