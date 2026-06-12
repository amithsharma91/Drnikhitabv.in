import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FemaleFertilityEvaluationSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary-100/70 border border-secondary-200/50 mb-4">
              <i className="ri-women-line text-secondary-700 text-xs mr-1.5"></i>
              <span className="text-secondary-700 text-xs font-semibold tracking-wide">Female Fertility</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Female Fertility Evaluation
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              A detailed assessment of the key factors that influence female reproductive potential.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20performing%20transvaginal%20ultrasound%20examination%20in%20a%20luxury%20fertility%20clinic%2C%20modern%20medical%20equipment%20with%20monitor%20showing%20scan%20results%2C%20warm%20rose%20and%20cream%20interior%2C%20soft%20natural%20lighting%2C%20reassuring%20professional%20atmosphere%2C%20editorial%20healthcare%20photography&width=800&height=600&seq=fertility-female-eval-01&orientation=landscape"
                alt="Female fertility evaluation"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-900 mb-4">What We Evaluate</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: 'ri-test-tube-line',
                    title: 'Ovarian Reserve Testing',
                    desc: 'AMH levels and antral follicle count via ultrasound to assess your egg supply and reproductive timeline.',
                  },
                  {
                    icon: 'ri-calendar-check-line',
                    title: 'Ovulation Assessment',
                    desc: 'Mid-luteal progesterone, cycle monitoring, and basal body temperature tracking to confirm regular ovulation.',
                  },
                  {
                    icon: 'ri-scan-line',
                    title: 'Uterine & Tubal Evaluation',
                    desc: 'Transvaginal ultrasound, sonohysterography, and hysterosalpingography to assess uterine cavity and tubal patency.',
                  },
                  {
                    icon: 'ri-heart-pulse-line',
                    title: 'Hormonal Profiling',
                    desc: 'Comprehensive endocrine panel including thyroid function, prolactin, and androgen levels.',
                  },
                  {
                    icon: 'ri-microscope-line',
                    title: 'Genetic & Medical Screening',
                    desc: 'Evaluation of medical conditions, medications, and genetic factors that may influence fertility.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className={`${item.icon} text-primary-600`}></i>
                    </div>
                    <div>
                      <h4 className="text-foreground-900 text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-foreground-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
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
