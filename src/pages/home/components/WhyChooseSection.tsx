import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const whyChooseItems = [
  {
    icon: 'ri-time-line',
    number: '12+',
    label: 'Years Experience',
    description: 'Over a decade of dedicated clinical practice in obstetrics, gynecology and advanced laparoscopic surgery.',
  },
  {
    icon: 'ri-star-line',
    number: '100+',
    label: 'Five Star Reviews',
    description: 'Consistently rated 5 stars by patients across Google and other healthcare platforms for exceptional care.',
  },
  {
    icon: 'ri-global-line',
    number: 'MRCOG',
    label: 'International Qualification',
    description: 'Member of the Royal College of Obstetricians and Gynaecologists (UK) — cleared all parts in first attempt.',
  },
  {
    icon: 'ri-heart-pulse-line',
    number: 'Expert',
    label: 'High-Risk Pregnancy',
    description: 'Specialized expertise in managing complex pregnancies with international-standard care and vigilant monitoring.',
  },
];

export default function WhyChooseSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-background-50" aria-label="Why choose Dr. Nikhita">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase">Why Choose</span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Why Choose Dr. Nikhita
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            International qualifications, extensive experience, and a genuine passion for women's health — discover what makes Dr. Nikhita one of Bangalore's most trusted specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {whyChooseItems.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-6 md:p-7 border border-background-200 hover:border-primary-300 transition-all duration-500 cursor-default hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary-200/20 overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${0.1 + i * 0.12}s`,
              }}
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent-50 group-hover:bg-accent-100 flex items-center justify-center mb-5 transition-all duration-400 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-accent-300/30">
                <i className={`${item.icon} text-accent-500 text-2xl md:text-3xl transition-transform duration-400 group-hover:scale-110`}></i>
              </div>

              {/* Number/Badge */}
              <div className="mb-2">
                <span className="font-heading text-2xl md:text-3xl font-bold text-primary-500 transition-colors duration-300 group-hover:text-primary-600">
                  {item.number}
                </span>
              </div>

              {/* Label */}
              <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-2 transition-colors duration-300 group-hover:text-foreground-950">
                {item.label}
              </h3>

              {/* Description */}
              <p className="text-foreground-500 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
