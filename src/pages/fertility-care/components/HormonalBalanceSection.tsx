import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { hormonalBalanceCards } from '@/mocks/fertilityCareData';

export default function HormonalBalanceSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
                <i className="ri-test-tube-line text-primary-700 text-xs mr-1.5"></i>
                <span className="text-primary-700 text-xs font-semibold tracking-wide">Hormonal Health</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Hormonal Balance & Fertility
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
                Reproductive hormones work in a delicate balance. Even subtle disruptions can affect ovulation, implantation, and the ability to sustain a healthy pregnancy. Dr. Nikhita takes a systematic approach to identifying and correcting hormonal imbalances that impact fertility.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {hormonalBalanceCards.map((card, index) => (
                  <div
                    key={card.title}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    className={`bg-white rounded-xl p-4 border border-background-200/70 hover:border-primary-200 hover:shadow-md transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center mb-3">
                      <i className={`${card.icon} text-primary-600 text-base`}></i>
                    </div>
                    <h4 className="text-foreground-900 text-sm font-semibold mb-1.5">{card.title}</h4>
                    <p className="text-foreground-500 text-xs leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Female%20fertility%20specialist%20in%20a%20luxury%20clinic%20reviewing%20hormonal%20test%20results%20on%20a%20digital%20tablet%20with%20a%20woman%20patient%2C%20warm%20rose%20blush%20and%20cream%20interior%2C%20soft%20natural%20daylight%2C%20modern%20elegant%20medical%20office%2C%20hopeful%20supportive%20consultation%20atmosphere%2C%20editorial%20healthcare%20photography&width=800&height=600&seq=fertility-hormonal-balance-01&orientation=landscape"
                  alt="Hormonal balance and fertility"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
