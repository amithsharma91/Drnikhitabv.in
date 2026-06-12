import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { breastHealthCards } from '@/mocks/preventiveHealthData';

export default function BreastHealthSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-heart-pulse-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Breast Health</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Breast Health Awareness
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Breast health vigilance through self-examination, clinical assessment, and appropriate imaging forms a critical component of women's preventive healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-10">
            {breastHealthCards.map((card, index) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-background-200/70 p-5 md:p-6 hover:border-primary-200 hover:shadow-sm transition-all duration-300 cursor-pointer group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors duration-400">
                    <i className={`${card.icon} text-accent-600 group-hover:text-white text-xl transition-colors duration-400`}></i>
                  </div>
                  <div>
                    <h3 className="font-heading text-foreground-900 text-base md:text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-foreground-500 text-xs md:text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image banner */}
          <div className="relative rounded-2xl overflow-hidden h-[280px] sm:h-[360px] md:h-[420px]">
            <img
              src="https://readdy.ai/api/search-image?query=Women%20breast%20health%20awareness%20in%20a%20modern%20healthcare%20setting%2C%20female%20doctor%20demonstrating%20breast%20self%20examination%20with%20a%20model%20in%20a%20warm%20clinic%20environment&width=1200&height=500&seq=prev-breast-01&orientation=landscape"
              alt="Breast Health Awareness"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/60 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-md">
                <p className="text-white text-lg md:text-xl font-heading font-semibold leading-snug">
                  Early detection through regular screening remains the most powerful tool in the fight against breast cancer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
