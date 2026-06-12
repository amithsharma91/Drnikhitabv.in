import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

export interface RelatedService {
  id: string;
  title: string;
  icon: string;
  description: string;
  link: string;
  image: string;
}

interface RelatedServicesSectionProps {
  title?: string;
  subtitle?: string;
  services: RelatedService[];
}

export default function RelatedServicesSection({
  title = 'Related Services',
  subtitle = 'Explore other specialised healthcare services tailored for your wellness journey.',
  services,
}: RelatedServicesSectionProps) {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  if (!services || services.length === 0) return null;

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div
          ref={ref}
          className={`text-center mb-10 md:mb-14 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Continue Exploring
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-3">
            {title}
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="group bg-white rounded-2xl border border-background-200 cursor-pointer overflow-hidden card-luxury"
              onClick={() => { navigate(service.link); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.05 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                borderColor: 'rgba(216, 140, 165, 0.3)',
              }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top card-image"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-4 md:p-5">
                <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center mb-3 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-400">
                  <i className={`${service.icon} text-primary-500 text-base group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3 className="font-heading text-sm md:text-base font-semibold text-foreground-900 mb-1.5 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground-500 text-xs leading-relaxed mb-3 line-clamp-2">
                  {service.description}
                </p>
                <span className="inline-flex items-center space-x-1 text-primary-500 text-xs font-semibold group-hover:space-x-2 transition-all duration-300">
                  <span>Learn More</span>
                  <i className="ri-arrow-right-line text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
