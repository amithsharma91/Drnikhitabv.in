import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { postnatalCareItems } from '@/mocks/pregnancyCareData';

export default function PostnatalCareSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-16 md:py-24 bg-background-50">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            After Delivery
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Postnatal Care
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Comprehensive support throughout your postpartum recovery and early motherhood journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {postnatalCareItems.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-5 md:p-6 border border-background-200 hover:border-primary-200 transition-all duration-400 cursor-default text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.08 + i * 0.1}s`,
              }}
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-primary-100 flex items-center justify-center mb-4 transition-all duration-400 group-hover:scale-110 group-hover:bg-primary-200">
                <i className={`${item.icon} text-primary-500 text-xl`}></i>
              </div>
              <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-2">{item.title}</h3>
              <p className="text-foreground-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex flex-col lg:flex-row items-center gap-8 bg-white rounded-3xl p-6 md:p-10 border border-background-200">
          <div className="w-full lg:w-1/2">
            <img
              src="https://readdy.ai/api/search-image?query=New%20mother%20with%20newborn%20baby%20receiving%20postnatal%20care%20checkup%20from%20a%20caring%20female%20gynecologist%20in%20a%20premium%20clinic%20warm%20natural%20lighting%20soft%20cream%20and%20rose%20blush%20tones%20happy%20mother%20bonding%20with%20baby%20professional%20healthcare%20environment&width=800&height=500&seq=pregcare-postnatal-01&orientation=landscape"
              alt="Postnatal care checkup"
              className="w-full h-auto rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-900 mb-3">
              Supporting Your Recovery & Wellbeing
            </h3>
            <p className="text-foreground-600 text-sm leading-relaxed mb-4">
              The postpartum period is a time of immense physical and emotional change. Dr. Nikhita provides continuous care through regular postnatal check-ups, breastfeeding guidance, emotional wellbeing screening, and family planning counselling.
            </p>
            <p className="text-foreground-600 text-sm leading-relaxed">
              Your 6-week postnatal visit is comprehensive — covering physical recovery assessment, contraception planning, mental health screening, and guidance on returning to normal activities. We're here for you throughout the fourth trimester and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
