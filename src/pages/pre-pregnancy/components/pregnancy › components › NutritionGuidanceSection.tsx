import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { nutritionGuidelines } from '@/mocks/prePregnancyData';

export default function NutritionGuidanceSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Nutrition
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Nutrition Guidance & Supplements
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Essential nutrients and supplements to prepare your body for a healthy pregnancy.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nutritionGuidelines.map((item, i) => {
                const color = item.color === 'primary' ? 'primary' : 'secondary';
                return (
                  <div
                    key={i}
                    className="group bg-background-50 rounded-2xl p-5 border border-background-200 hover:border-primary-200 transition-all duration-400 cursor-default"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.08 + i * 0.1}s`,
                    }}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-${color}-100 flex items-center justify-center mb-3 transition-transform duration-400 group-hover:scale-110`}>
                      <i className={`${item.icon} text-${color}-500 text-lg`}></i>
                    </div>
                    <h4 className="font-heading text-sm font-semibold text-foreground-900 mb-1.5">{item.title}</h4>
                    <p className="text-foreground-600 text-xs leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20discussing%20nutrition%20and%20supplements%20with%20a%20woman%20planning%20pregnancy%20in%20a%20bright%20premium%20clinic%20consultation%20room%20soft%20natural%20light%20elegant%20cream%20tones%20healthy%20lifestyle%20aesthetic%20fresh%20and%20calming%20atmosphere&width=800&height=600&seq=prepreg-nutrition-01&orientation=landscape"
                alt="Nutrition guidance consultation"
                className="w-full h-auto object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
