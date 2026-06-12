import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MedicalHistorySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3">
              Medical Evaluation
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 md:mb-5 leading-tight">
              Medical History{' '}
              <span className="text-primary-500 italic">Evaluation</span>
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              A detailed review of your medical and surgical history is fundamental to preconception care. Understanding past pregnancies, existing conditions, medications, and family history helps identify potential risk factors early.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
              Dr. Nikhita takes time to thoroughly understand your unique health profile — including any chronic conditions like diabetes, thyroid disorders, hypertension, or autoimmune conditions — and creates a personalized plan to optimize your health before pregnancy.
            </p>
            <div className="space-y-3">
              {[
                { icon: 'ri-file-list-3-line', text: 'Detailed personal & family medical history' },
                { icon: 'ri-surgical-mask-line', text: 'Previous pregnancy & surgical history review' },
                { icon: 'ri-capsule-line', text: 'Current medication assessment & adjustments' },
                { icon: 'ri-mental-health-line', text: 'Mental health & emotional wellbeing evaluation' },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-primary-500 text-sm`}></i>
                  </div>
                  <span className="text-foreground-700 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20female%20doctor%20reviewing%20medical%20records%20and%20history%20with%20a%20female%20patient%20in%20a%20premium%20clinic%20consultation%20room%20soft%20natural%20lighting%20elegant%20cream%20and%20rose%20blush%20tones%20modern%20healthcare%20environment%20warm%20professional%20atmosphere&width=800&height=600&seq=prepreg-history-01&orientation=landscape"
                alt="Medical history evaluation"
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
