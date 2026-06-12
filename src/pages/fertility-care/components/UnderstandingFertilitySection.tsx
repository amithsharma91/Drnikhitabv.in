import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function UnderstandingFertilitySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Compassionate%20female%20fertility%20specialist%20explaining%20reproductive%20health%20with%20an%20anatomical%20model%20to%20a%20woman%20in%20a%20luxury%20clinic%2C%20warm%20rose%20blush%20and%20cream%20interior%2C%20soft%20natural%20daylight%2C%20educational%20yet%20reassuring%20atmosphere%2C%20fresh%20flowers%20on%20desk%2C%20editorial%20healthcare%20photography&width=800&height=600&seq=fertility-understanding-01&orientation=landscape"
                  alt="Understanding fertility with Dr. Nikhita"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
                <i className="ri-lightbulb-line text-primary-700 text-xs mr-1.5"></i>
                <span className="text-primary-700 text-xs font-semibold tracking-wide">Understanding Fertility</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Your Fertility, Your Journey
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
                Fertility is a complex interplay of hormonal, anatomical, and lifestyle factors. Understanding your unique reproductive health is the foundation of every fertility journey. Dr. Nikhita takes time to explain the science of conception in clear, compassionate terms, empowering you with knowledge at every step.
              </p>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
                Whether you are just beginning to think about pregnancy, have been trying to conceive, or want to understand your fertility potential for future family planning, a comprehensive evaluation provides clarity and direction.
              </p>
              <div className="space-y-3">
                {[
                  { icon: 'ri-checkbox-circle-line', text: 'Complete hormonal and ovarian reserve assessment' },
                  { icon: 'ri-checkbox-circle-line', text: 'Uterine and tubal health evaluation' },
                  { icon: 'ri-checkbox-circle-line', text: 'Personalized conception timeline and guidance' },
                  { icon: 'ri-checkbox-circle-line', text: 'Evidence-based treatment planning' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-2.5">
                    <i className={`${item.icon} text-primary-500 mt-0.5 flex-shrink-0`}></i>
                    <span className="text-foreground-700 text-sm">{item.text}</span>
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
