import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { menopauseSymptoms } from '@/mocks/menopauseData';

export default function CommonSymptomsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-emotion-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Symptom Support</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Common Menopause Symptoms
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Understanding your symptoms is the first step toward effective management. Each woman's experience is unique — you may have some, all, or none of these symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {menopauseSymptoms.map((symptom, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={symptom.title}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="bg-white rounded-2xl border border-background-200/70 p-5 md:p-6 cursor-pointer transition-all duration-400 hover:border-primary-200 hover:shadow-sm group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors duration-400">
                    <i className={`${symptom.icon} text-primary-600 group-hover:text-white text-xl transition-colors duration-400`}></i>
                  </div>
                  <h3 className="font-heading text-foreground-900 text-base font-semibold mb-2">{symptom.title}</h3>
                  <p className="text-foreground-500 text-xs leading-relaxed mb-3">{symptom.description}</p>
                  <div className={`overflow-hidden transition-all duration-400 ${isExpanded ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="border-t border-background-100 pt-3">
                      <p className="text-foreground-400 text-xs font-semibold uppercase tracking-wider mb-1">Management</p>
                      <p className="text-foreground-600 text-xs leading-relaxed">{symptom.management}</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-3 text-primary-500 text-xs font-medium">
                    <span>{isExpanded ? 'Show Less' : 'Management Options'}</span>
                    <i className={`${isExpanded ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'} ml-1 transition-transform duration-300`}></i>
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
