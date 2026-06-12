import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HighRiskPregnancySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative py-16 md:py-24 bg-background-50">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3">
              Specialized Care
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 md:mb-5 leading-tight">
              High-Risk Pregnancy{' '}
              <span className="text-primary-500 italic">Management</span>
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Some pregnancies require specialized monitoring and care due to maternal age, pre-existing medical conditions, pregnancy-related complications, or multiple pregnancies. Dr. Nikhita's extensive experience and MRCOG training ensure expert management of complex pregnancies.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
              Conditions managed include gestational diabetes, pregnancy-induced hypertension, preeclampsia, placenta previa, preterm labor risk, multiple gestations, and pregnancies complicated by thyroid disorders, autoimmune conditions, or previous pregnancy complications.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'ri-heart-pulse-line', label: 'Gestational Diabetes' },
                { icon: 'ri-mental-health-line', label: 'Preeclampsia Care' },
                { icon: 'ri-user-star-line', label: 'Multiple Pregnancy' },
                { icon: 'ri-stethoscope-line', label: 'Preterm Labor Prevention' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-3 border border-background-200 flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-primary-500 text-sm`}></i>
                  </div>
                  <span className="text-foreground-700 text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20providing%20specialized%20high%20risk%20pregnancy%20care%20to%20a%20pregnant%20woman%20in%20a%20premium%20clinic%20setting%20advanced%20monitoring%20equipment%20soft%20lighting%20elegant%20medical%20environment%20rose%20blush%20tones%20compassionate%20atmosphere&width=800&height=600&seq=pregcare-highrisk-01&orientation=landscape"
                alt="High-risk pregnancy care"
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
