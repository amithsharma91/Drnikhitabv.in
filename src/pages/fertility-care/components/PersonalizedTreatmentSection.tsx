import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PersonalizedTreatmentSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-clipboard-line text-primary-700 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Personalized Care</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Personalized Treatment Planning
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              No two fertility journeys are the same. Your treatment plan is as unique as you are.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
            <div className="lg:w-1/2">
              <img
                src="https://readdy.ai/api/search-image?query=Female%20fertility%20doctor%20in%20a%20luxury%20clinic%20writing%20a%20personalized%20treatment%20plan%20with%20a%20hopeful%20woman%20patient%2C%20warm%20rose%20blush%20and%20cream%20interior%2C%20soft%20natural%20window%20light%2C%20modern%20elegant%20consultation%20room%2C%20collaborative%20healthcare%20atmosphere%2C%20editorial%20photography&width=800&height=600&seq=fertility-personalized-01&orientation=landscape"
                alt="Personalized fertility treatment planning"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-900 mb-4">Your Customized Fertility Pathway</h3>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
                After completing your comprehensive evaluation, Dr. Nikhita designs a treatment plan that aligns with your specific diagnosis, personal preferences, timeline, and goals. Every plan is built on three pillars:
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: 'ri-heart-pulse-line',
                    title: 'Medical Optimization',
                    desc: 'Addressing underlying hormonal, structural, or medical conditions that may be affecting your fertility through evidence-based treatments.',
                  },
                  {
                    icon: 'ri-leaf-line',
                    title: 'Lifestyle Enhancement',
                    desc: 'Personalized nutrition, exercise, stress management, and supplement guidance to create an optimal environment for conception.',
                  },
                  {
                    icon: 'ri-calendar-check-line',
                    title: 'Timed Conception Support',
                    desc: 'Ovulation tracking, timed intercourse guidance, and when needed, ovulation induction with careful monitoring to maximize your chances each cycle.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-white rounded-xl p-4 border border-background-200/70">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-primary-600 text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="text-foreground-900 text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-foreground-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
