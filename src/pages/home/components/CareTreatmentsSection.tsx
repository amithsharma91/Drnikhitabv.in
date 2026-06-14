import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const featuredTreatments = [
  {
    id: 'pregnancy-care',
    icon: 'ri-user-heart-line',
    title: 'Pregnancy Care',
    description: 'Complete antenatal, delivery, and postnatal care with personalized attention for a healthy pregnancy and safe delivery.',
    link: '/services/pregnancy-care',
    imageUrl: 'https://readdy.ai/api/search-image?query=Elegant%20pregnancy%20care%20scene%20with%20soft%20natural%20light%2C%20a%20calm%20expectant%20mother%20in%20a%20comfortable%20modern%20clinic%20setting%2C%20warm%20rose%20blush%20and%20cream%20tones%2C%20premium%20healthcare%20photography%20style%2C%20gentle%20and%20reassuring%20atmosphere%2C%20beautiful%20composition%20with%20natural%20elements%2C%20feminine%20luxury%20aesthetic&width=800&height=600&seq=treatment-pregnancy-care&orientation=landscape',
  },
  {
    id: 'fertility-care',
    icon: 'ri-seedling-line',
    title: 'Fertility Care',
    description: 'Comprehensive fertility evaluation, counselling and personalized treatment plans to support your dream of parenthood.',
    link: '/services/fertility-care',
    imageUrl: 'https://readdy.ai/api/search-image?query=Warm%20and%20hopeful%20fertility%20consultation%20scene%2C%20a%20supportive%20medical%20environment%20with%20soft%20sky%20blue%20and%20cream%20tones%2C%20gentle%20natural%20lighting%2C%20compassionate%20atmosphere%2C%20premium%20healthcare%20aesthetic%2C%20elegant%20clinic%20setting%20with%20fresh%20greenery%2C%20sophisticated%20feminine%20design&width=800&height=600&seq=treatment-fertility-care&orientation=landscape',
  },
  {
    id: 'gynaecological-expertise',
    icon: 'ri-psychotherapy-line',
    title: 'Gynaecological Expertise',
    description: 'Expert diagnosis and comprehensive treatment for a full spectrum of gynecological conditions affecting women of all ages.',
    link: '/services/gynaecological-expertise',
    imageUrl: 'https://readdy.ai/api/search-image?query=Professional%20gynecology%20consultation%20scene%20with%20soft%20rose%20blush%20tones%20and%20cream%20background%2C%20modern%20medical%20clinic%20interior%20with%20warm%20lighting%2C%20calm%20and%20reassuring%20atmosphere%2C%20premium%20healthcare%20photography%2C%20sophisticated%20feminine%20aesthetic%2C%20elegant%20composition%20with%20medical%20equipment%20tastefully%20arranged&width=800&height=600&seq=treatment-gynae-expertise&orientation=landscape',
  },
  {
    id: 'minimal-invasive-surgery',
    icon: 'ri-surgical-mask-line',
    title: 'Minimal Invasive Surgery',
    description: 'Advanced laparoscopic and hysteroscopic surgical procedures offering faster recovery, minimal scarring, and excellent outcomes.',
    link: '/services/minimal-invasive-surgery',
    imageUrl: 'https://readdy.ai/api/search-image?query=Modern%20minimally%20invasive%20surgical%20suite%20with%20advanced%20laparoscopic%20equipment%2C%20clean%20and%20bright%20operating%20environment%2C%20soft%20blue%20and%20cream%20tones%2C%20premium%20medical%20facility%20photography%2C%20professional%20and%20reassuring%20atmosphere%2C%20elegant%20clinical%20setting%20with%20state%20of%20the%20art%20technology&width=800&height=600&seq=treatment-mis-surgery&orientation=landscape',
  },
  {
    id: 'menopause-care',
    icon: 'ri-leaf-line',
    title: 'Menopausal Care',
    description: 'Comprehensive menopause management helping women navigate this natural transition with confidence, comfort, and vitality.',
    link: '/services/menopause-care',
    imageUrl: 'https://readdy.ai/api/search-image?query=Calm%20and%20serene%20wellness%20consultation%20scene%2C%20mature%20woman%20in%20elegant%20comfortable%20clinic%20setting%2C%20soft%20warm%20cream%20and%20sage%20green%20tones%2C%20natural%20lighting%20with%20gentle%20atmosphere%2C%20premium%20healthcare%20aesthetic%2C%20sophisticated%20and%20reassuring%20environment%2C%20feminine%20luxury%20design%20with%20botanical%20elements&width=800&height=600&seq=treatment-menopause-care&orientation=landscape',
  },
];

export default function CareTreatmentsSection() {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="relative py-16 md:py-24 bg-white" aria-label="Care and Treatments">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Care &amp; Treatments
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Care &amp; Treatments
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Comprehensive women&apos;s healthcare services designed for every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {featuredTreatments.map((treatment, i) => (
            <motion.div
              key={treatment.id}
              className="group bg-background-50 rounded-2xl overflow-hidden border border-background-200 cursor-pointer card-luxury"
              onClick={() => { navigate(treatment.link); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                borderColor: 'rgba(216, 140, 165, 0.3)',
              }}
            >
              <div className="relative h-44 md:h-48 overflow-hidden">
                <img
                  src={treatment.imageUrl}
                  alt={treatment.title}
                  className="w-full h-full object-cover object-top card-image"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-3 left-3 w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/90 flex items-center justify-center group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-400">
                  <i className={`${treatment.icon} text-primary-500 text-base md:text-lg group-hover:text-white transition-colors duration-300`}></i>
                </div>
                {/* Learn More button slides in on hover */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 text-primary-600 text-xs font-semibold">
                    Learn More
                    <i className="ri-arrow-right-line text-xs"></i>
                  </span>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {treatment.title}
                </h3>
                <p className="text-foreground-500 text-xs md:text-sm leading-relaxed mb-4">
                  {treatment.description}
                </p>
                <span className="inline-flex items-center space-x-1 text-primary-500 text-xs md:text-sm font-semibold group-hover:space-x-3 transition-all duration-300">
                  <span>Explore</span>
                  <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <motion.button
            onClick={() => { navigate('/services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-7 py-3 bg-primary-500 text-white rounded-full text-sm md:text-base font-semibold whitespace-nowrap cursor-pointer btn-luxury inline-flex items-center space-x-2"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Treatments</span>
            <i className="ri-arrow-right-line text-lg"></i>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
