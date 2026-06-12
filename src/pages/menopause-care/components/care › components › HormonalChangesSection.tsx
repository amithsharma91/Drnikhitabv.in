import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { hormonalChanges } from '@/mocks/menopauseData';

export default function HormonalChangesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14 mb-12">
            <div className="w-full lg:w-1/2">
              <img
                src="https://readdy.ai/api/search-image?query=Educational%20medical%20infographic%20about%20women%20hormonal%20changes%20during%20menopause%2C%20elegant%20healthcare%20design%20with%20warm%20rose%20and%20cream%20tones%2C%20modern%20clinic%20environment&width=700&height=500&seq=meno-hormonal-01&orientation=landscape"
                alt="Hormonal Changes During Menopause"
                className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
                <i className="ri-test-tube-line text-primary-600 text-xs mr-1.5"></i>
                <span className="text-primary-700 text-xs font-semibold tracking-wide">Hormonal Science</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Understanding Hormonal Changes
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
                Menopause is fundamentally a hormonal transition. As ovarian function declines, three key hormones — estrogen, progesterone, and testosterone — undergo significant changes that affect virtually every system in a woman's body.
              </p>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed">
                Understanding these hormonal shifts helps explain why symptoms occur and guides effective treatment decisions, including whether hormone replacement therapy may be appropriate for you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {hormonalChanges.map((hormone, index) => (
              <div
                key={hormone.hormone}
                className="bg-white rounded-2xl border border-background-200/70 p-5 md:p-6 hover:border-primary-200 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <i className={`${hormone.icon} text-primary-600 text-xl`}></i>
                </div>
                <h3 className="font-heading text-foreground-900 text-lg font-semibold mb-2">{hormone.hormone}</h3>
                <p className="text-foreground-500 text-xs md:text-sm leading-relaxed mb-3">{hormone.description}</p>
                <div className="border-t border-background-100 pt-3">
                  <p className="text-foreground-400 text-xs font-semibold uppercase tracking-wider mb-2">Effects of Decline</p>
                  <div className="flex flex-wrap gap-1.5">
                    {hormone.effects.map((effect) => (
                      <span key={effect} className="inline-block px-2 py-1 rounded-full bg-accent-50 text-accent-700 text-xs border border-accent-100">
                        {effect}
                      </span>
                    ))}
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
