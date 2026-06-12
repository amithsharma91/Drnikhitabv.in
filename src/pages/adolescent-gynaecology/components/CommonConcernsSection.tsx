import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { adolescentConcerns } from '@/mocks/adolescentGynaecologyData';

export default function CommonConcernsSection() {
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
            Common Concerns
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            We're Here To Help With
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Common adolescent health concerns addressed with expertise, empathy and age-appropriate care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {adolescentConcerns.map((item, i) => {
            const isExpanded = expandedIndex === i;
            const accentColor = item.color === 'primary' ? 'primary' : 'secondary';
            return (
              <div
                key={i}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className="group bg-white rounded-2xl p-5 md:p-6 cursor-pointer transition-all duration-500 border border-background-200 hover:border-primary-200 hover:shadow-md"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.08 + i * 0.08}s`,
                }}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-${accentColor}-100 flex items-center justify-center mb-4 transition-transform duration-400 group-hover:scale-110`}>
                  <i className={`${item.icon} text-${accentColor}-500 text-xl md:text-2xl`}></i>
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-900 mb-2">
                  {item.title}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-foreground-600 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="flex items-center mt-3 text-xs font-medium">
                  <span className={`text-${accentColor}-500`}>
                    {isExpanded ? 'Show Less' : 'Learn More'}
                  </span>
                  {isExpanded ? (
                    <i className={`ri-arrow-up-s-line text-${accentColor}-500 ml-1`}></i>
                  ) : (
                    <i className={`ri-arrow-down-s-line text-${accentColor}-500 ml-1`}></i>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
