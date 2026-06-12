import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WhyPreconceptionSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://readdy.ai/api/search-image?query=Happy%20Indian%20couple%20sitting%20with%20a%20female%20gynecologist%20in%20a%20bright%20premium%20clinic%20discussing%20pregnancy%20planning%20warm%20natural%20lighting%20soft%20cream%20and%20rose%20blush%20tones%20professional%20yet%20welcoming%20atmosphere%20modern%20healthcare%20interior&width=800&height=600&seq=prepreg-why-01&orientation=landscape"
                alt="Preconception consultation"
                className="w-full h-auto object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3">
              Preconception Planning
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 md:mb-5 leading-tight">
              Why Preconception Care{' '}
              <span className="text-primary-500 italic">Matters</span>
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Preconception care is one of the most important steps you can take toward a healthy pregnancy. It involves evaluating and optimizing your health before conception to reduce risks and improve outcomes for both mother and baby.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
              Dr. Nikhita provides comprehensive preconception assessments that identify potential health concerns early, allowing time for interventions that can significantly impact your pregnancy journey. From nutritional optimization to managing existing conditions, every aspect is addressed with personalized care.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-primary-500 text-sm"></i>
                </div>
                <span className="text-foreground-700 text-sm font-medium">Reduces Pregnancy Risks</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-heart-pulse-line text-secondary-600 text-sm"></i>
                </div>
                <span className="text-foreground-700 text-sm font-medium">Optimizes Fertility</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-heart-line text-accent-600 text-sm"></i>
                </div>
                <span className="text-foreground-700 text-sm font-medium">Healthy Baby Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
