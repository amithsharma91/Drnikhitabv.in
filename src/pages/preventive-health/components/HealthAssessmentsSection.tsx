import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { healthAssessmentChecklist } from '@/mocks/preventiveHealthData';

export default function HealthAssessmentsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-file-list-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Health Assessments</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Routine Health Assessments
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              A comprehensive preventive health checklist covering all essential screening areas for women at every life stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {healthAssessmentChecklist.map((category, index) => (
              <div
                key={category.category}
                className="bg-white rounded-2xl border border-background-200/70 p-5 md:p-6 hover:border-primary-200 transition-all duration-300"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <i className="ri-check-double-line text-primary-600 text-lg"></i>
                  </div>
                  <h3 className="font-heading text-foreground-900 text-base font-semibold">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-foreground-600 text-xs">
                      <i className="ri-check-line text-primary-400 text-xs flex-shrink-0"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
