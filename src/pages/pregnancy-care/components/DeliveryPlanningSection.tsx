import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { deliveryOptions } from '@/mocks/pregnancyCareData';

export default function DeliveryPlanningSection() {
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
            Birth Planning
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Delivery Planning & Birth Options
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Personalized delivery plans that respect your preferences while prioritizing safety for you and your baby.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {deliveryOptions.map((option, i) => {
            const color = option.color === 'primary' ? 'primary' : 'secondary';
            return (
              <div
                key={i}
                className="group bg-background-50 rounded-2xl p-5 md:p-6 border border-background-200 hover:border-primary-200 transition-all duration-400 cursor-default text-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.08 + i * 0.1}s`,
                }}
              >
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-${color}-100 flex items-center justify-center mb-4 transition-all duration-400 group-hover:scale-110 group-hover:bg-${color}-200`}>
                  <i className={`${option.icon} text-${color}-500 text-xl`}></i>
                </div>
                <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-2">{option.title}</h3>
                <p className="text-foreground-600 text-sm leading-relaxed">{option.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary-50/60 via-background-50 to-secondary-50/60 rounded-3xl p-6 md:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
            <div className="w-full lg:w-1/2">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20discussing%20birth%20plan%20options%20with%20a%20pregnant%20woman%20in%20a%20premium%20clinic%20consultation%20room%20warm%20natural%20lighting%20elegant%20soft%20tones%20documents%20and%20educational%20materials%20on%20table%20reassuring%20supportive%20atmosphere&width=800&height=500&seq=pregcare-delivery-01&orientation=landscape"
                alt="Birth plan consultation"
                className="w-full h-auto rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-900 mb-3">
                Normal Delivery Support
              </h3>
              <p className="text-foreground-600 text-sm leading-relaxed mb-4">
                Dr. Nikhita is a strong advocate for normal vaginal delivery whenever it is safe and appropriate. She supports natural birthing preferences including labour physiotherapy and minimal intervention approaches. VBAC (Vaginal Birth After Cesarean) is offered after careful evaluation of suitability.
              </p>
              <div className="space-y-2.5">
                {[
                  'Respect for individual birth preferences',
                  'Continuous monitoring and support during labor',
                  'Pain management options including epidural when desired',
                  'Partner involvement encouraged throughout the process',
                ].map((item, j) => (
                  <div key={j} className="flex items-center space-x-2.5">
                    <i className="ri-checkbox-circle-line text-primary-500 text-sm flex-shrink-0"></i>
                    <span className="text-foreground-700 text-sm">{item}</span>
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
