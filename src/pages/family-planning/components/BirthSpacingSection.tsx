import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { birthSpacingCards } from '@/mocks/familyPlanningData';

export default function BirthSpacingSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-heart-pulse-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Birth Spacing</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Benefits Of Healthy Birth Spacing
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Research consistently shows that appropriate spacing between pregnancies benefits both mother and baby in significant ways.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {birthSpacingCards.map((card, index) => (
                  <div
                    key={card.title}
                    style={{ transitionDelay: `${index * 120}ms` }}
                    className={`bg-white rounded-2xl p-5 border border-background-200/70 hover:border-accent-200 hover:shadow-md transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center mb-3">
                      <i className={`${card.icon} text-accent-600 text-lg`}></i>
                    </div>
                    <h4 className="text-foreground-900 text-sm font-semibold mb-2">{card.title}</h4>
                    <p className="text-foreground-600 text-xs leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Happy%20family%20with%20two%20young%20children%20in%20a%20warm%20consultation%20with%20a%20female%20gynecologist%20in%20a%20luxury%20clinic%20discussing%20birth%20spacing%2C%20rose%20blush%20and%20cream%20interior%2C%20soft%20natural%20lighting%2C%20joyful%20family%20atmosphere%2C%20editorial%20healthcare%20photography&width=800&height=600&seq=family-planning-spacing-01&orientation=landscape"
                  alt="Birth spacing benefits"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 bg-accent-50 border border-accent-200 rounded-2xl p-5 text-center">
                <i className="ri-information-line text-accent-600 text-2xl mb-2 block"></i>
                <p className="text-accent-800 text-sm font-semibold mb-1">WHO Recommendation</p>
                <p className="text-foreground-600 text-xs leading-relaxed">
                  The World Health Organization recommends waiting at least 18-24 months after a live birth before attempting the next pregnancy for optimal maternal and child health outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
