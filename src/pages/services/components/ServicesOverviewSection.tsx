import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const serviceCards = [
  {
    id: 'adolescent-gynaecology',
    icon: 'ri-flower-line',
    title: 'Adolescent Gynaecology',
    description: 'Compassionate and confidential gynecological care for adolescent girls and young women navigating puberty and reproductive health.',
    link: '/services/adolescent-gynaecology',
  },
  {
    id: 'pre-pregnancy-checkup',
    icon: 'ri-heart-pulse-line',
    title: 'Pre-Pregnancy Check-Up',
    description: 'Comprehensive pre-conception health assessment to ensure you are in optimal health before embarking on your pregnancy journey.',
    link: '/services/pre-pregnancy-checkup',
  },
  {
    id: 'pregnancy-care',
    icon: 'ri-user-heart-line',
    title: 'Pregnancy Care',
    description: 'Complete antenatal, delivery, and postnatal care with personalized attention for a healthy pregnancy and safe delivery.',
    link: '/services/pregnancy-care',
  },
  {
    id: 'gynaecological-expertise',
    icon: 'ri-psychotherapy-line',
    title: 'Gynaecological Expertise',
    description: 'Expert diagnosis and comprehensive treatment for a full spectrum of gynecological conditions affecting women of all ages.',
    link: '/services/gynaecological-expertise',
  },
  {
    id: 'minimal-invasive-surgery',
    icon: 'ri-surgical-mask-line',
    title: 'Minimal Invasive Surgery',
    description: 'Advanced laparoscopic and hysteroscopic surgical procedures offering faster recovery, minimal scarring, and excellent outcomes.',
    link: '/services/minimal-invasive-surgery',
  },
  {
    id: 'fertility-care',
    icon: 'ri-seedling-line',
    title: 'Fertility Care',
    description: 'Comprehensive fertility evaluation, counselling and personalized treatment plans to support your dream of parenthood.',
    link: '/services/fertility-care',
  },
  {
    id: 'family-planning',
    icon: 'ri-calendar-check-line',
    title: 'Family Planning',
    description: 'Personalized guidance and evidence-based family planning solutions tailored to your health, lifestyle and future goals.',
    link: '/services/family-planning',
  },
  {
    id: 'preventive-health',
    icon: 'ri-shield-check-line',
    title: 'Preventive Health & Screening',
    description: 'Proactive preventive healthcare including cancer screening, routine check-ups, and wellness assessments for women.',
    link: '/services/preventive-health-screening',
  },
  {
    id: 'vaccinations',
    icon: 'ri-syringe-line',
    title: 'Vaccinations',
    description: 'Essential vaccinations and immunization guidance for women and adolescent girls to protect long-term health.',
    link: '/services/vaccinations',
  },
  {
    id: 'menopause-care',
    icon: 'ri-leaf-line',
    title: 'Menopause Care & Support',
    description: 'Comprehensive menopause management helping women navigate this natural transition with confidence, comfort, and vitality.',
    link: '/services/menopause-care',
  },
];

export default function ServicesOverviewSection() {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="py-14 md:py-20 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            What We Offer
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Care & Treatments
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            From adolescence through menopause and every stage in between, we offer comprehensive healthcare tailored to women&apos;s unique needs. Click any service to explore in detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {serviceCards.map((service, i) => (
            <motion.div
              key={service.id}
              className="group bg-background-50 rounded-2xl p-5 md:p-6 border border-background-200 cursor-pointer card-luxury overflow-hidden"
              onClick={() => { navigate(service.link); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.04 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                borderColor: 'rgba(216, 140, 165, 0.3)',
                transition: { duration: 0.3 },
              }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary-100/40 via-transparent to-secondary-100/30" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-400">
                  <i className={`${service.icon} text-primary-500 text-xl md:text-2xl group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground-500 text-xs md:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center space-x-1 text-primary-500 text-xs md:text-sm font-semibold group-hover:space-x-3 transition-all duration-300">
                  <span>Explore Service</span>
                  <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
