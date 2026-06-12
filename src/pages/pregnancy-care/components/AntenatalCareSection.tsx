import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AntenatalCareSection() {
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
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://readdy.ai/api/search-image?query=Pregnant%20Indian%20woman%20in%20second%20trimester%20receiving%20antenatal%20checkup%20from%20a%20caring%20female%20gynecologist%20in%20a%20premium%20maternity%20clinic%20soft%20natural%20lighting%20elegant%20cream%20and%20rose%20blush%20interior%20modern%20medical%20equipment%20warm%20reassuring%20atmosphere&width=800&height=600&seq=pregcare-antenatal-01&orientation=landscape"
                alt="Antenatal care consultation"
                className="w-full h-auto object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3">
              Antenatal Care
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 md:mb-5 leading-tight">
              Comprehensive Care For{' '}
              <span className="text-primary-500 italic">Every Pregnancy</span>
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Antenatal care is the foundation of a healthy pregnancy. Regular check-ups throughout your pregnancy allow us to monitor your health and your baby's development, identify potential concerns early, and provide timely interventions when needed.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
              Dr. Nikhita follows international antenatal care protocols combining her MRCOG training with personalized attention. Every visit includes thorough monitoring, open discussion of your questions, and guidance tailored to your unique pregnancy journey.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Regular Check-ups', 'Growth Monitoring', 'Nutrition Guidance', 'Birth Planning'].map((item, i) => (
                <span key={i} className="inline-flex items-center space-x-1.5 bg-primary-50 text-primary-700 px-3 py-1.5 rounded-full text-xs font-medium">
                  <i className="ri-checkbox-circle-line text-xs"></i>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
