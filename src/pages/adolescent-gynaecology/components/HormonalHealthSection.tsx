import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { adolescentNutrition } from '@/mocks/adolescentGynaecologyData';

export default function HormonalHealthSection() {
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
            Nutrition & Wellbeing
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Hormonal Health & Nutrition
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Building healthy habits during adolescence supports lifelong hormonal balance and overall wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {adolescentNutrition.map((item, i) => {
            const color = item.color === 'primary' ? 'primary' : 'secondary';
            return (
              <div
                key={i}
                className="group bg-background-50 rounded-2xl p-5 md:p-6 border border-background-200 hover:border-primary-200 transition-all duration-400 cursor-default"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.06 + i * 0.07}s`,
                }}
              >
                <div className={`w-12 h-12 rounded-xl bg-${color}-100 flex items-center justify-center mb-4 transition-all duration-400 group-hover:scale-110 group-hover:bg-${color}-200`}>
                  <i className={`${item.icon} text-${color}-500 text-xl`}></i>
                </div>
                <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
