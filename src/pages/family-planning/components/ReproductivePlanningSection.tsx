import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ReproductivePlanningSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Female%20gynecologist%20in%20a%20premium%20clinic%20reviewing%20reproductive%20health%20plan%20on%20a%20tablet%20with%20a%20woman%20patient%2C%20rose%20blush%20and%20cream%20interior%2C%20soft%20natural%20daylight%2C%20modern%20elegant%20medical%20office%20with%20plants%2C%20collaborative%20healthcare%20atmosphere%2C%20editorial%20photography&width=800&height=600&seq=family-planning-reproductive-01&orientation=landscape"
                  alt="Reproductive planning with Dr. Nikhita"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary-100/70 border border-secondary-200/50 mb-4">
                <i className="ri-calendar-check-line text-secondary-700 text-xs mr-1.5"></i>
                <span className="text-secondary-700 text-xs font-semibold tracking-wide">Reproductive Planning</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Planning For Your Reproductive Future
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
                Reproductive planning goes beyond choosing contraception — it is about understanding your health, fertility timeline, and making proactive decisions that align with your life goals. Dr. Nikhita helps you create a comprehensive reproductive life plan.
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: 'ri-heart-2-line',
                    title: 'Fertility Awareness',
                    desc: 'Understanding your fertility window, ovarian reserve, and factors that influence your reproductive timeline.',
                  },
                  {
                    icon: 'ri-shield-check-line',
                    title: 'Preventive Health',
                    desc: 'Cervical cancer screening, STI testing, vaccination updates, and general wellness optimization as part of your reproductive plan.',
                  },
                  {
                    icon: 'ri-file-list-line',
                    title: 'Health Condition Management',
                    desc: 'Addressing conditions like PMOS, thyroid disorders, or endometriosis that may affect your reproductive choices and future fertility.',
                  },
                  {
                    icon: 'ri-seedling-line',
                    title: 'Future Pregnancy Preparation',
                    desc: 'Preconception counselling and health optimization for when you are ready to grow your family.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-white rounded-xl p-4 border border-background-200/70">
                    <div className="w-9 h-9 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className={`${item.icon} text-secondary-600`}></i>
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
