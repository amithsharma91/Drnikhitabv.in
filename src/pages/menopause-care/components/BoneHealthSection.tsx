import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { boneHealthTips } from '@/mocks/menopauseData';

export default function BoneHealthSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14 mb-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
                <i className="ri-run-line text-primary-600 text-xs mr-1.5"></i>
                <span className="text-primary-700 text-xs font-semibold tracking-wide">Bone Health</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Bone Health & Osteoporosis Prevention
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
                Estrogen plays a crucial role in maintaining bone density. As estrogen levels decline during menopause, bone loss accelerates — increasing the risk of osteoporosis and fractures. In fact, women can lose up to 20% of their bone density in the first 5-7 years after menopause.
              </p>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
                The good news is that osteoporosis is largely preventable with the right combination of nutrition, exercise, and medical management. Dr. Nikhita takes a proactive approach to protecting your bone health before problems develop.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20medical%20infographic%20about%20bone%20health%20and%20osteoporosis%20prevention%20for%20women%2C%20elegant%20healthcare%20design%20with%20warm%20rose%20tones%2C%20premium%20clinic%20aesthetic&width=700&height=500&seq=meno-bone-01&orientation=landscape"
                alt="Bone Health and Osteoporosis Prevention"
                className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {boneHealthTips.map((tip, index) => (
              <div
                key={tip.title}
                className="bg-white rounded-2xl border border-background-200/70 p-5 hover:border-accent-200 transition-all duration-300 cursor-pointer group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-3 group-hover:bg-accent-500 transition-colors duration-400">
                  <i className={`${tip.icon} text-accent-600 group-hover:text-white text-xl transition-colors duration-400`}></i>
                </div>
                <h4 className="font-heading text-foreground-900 text-sm font-semibold mb-1">{tip.title}</h4>
                <p className="text-foreground-500 text-xs leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
