import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

interface CTASectionProps {
  onBookAppointment: () => void;
}

export default function CTASection({ onBookAppointment }: CTASectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden" aria-label="Book consultation">
      {/* Animated background with floating gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 via-secondary-50/40 to-accent-100/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-200/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full animate-float" style={{ animationDuration: '15s' }}>
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary-200/10 blur-[80px]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full animate-float" style={{ animationDuration: '18s', animationDelay: '3s' }}>
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-200/10 blur-[80px]" />
        </div>
      </div>

      <div
        ref={ref}
        className={`relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 text-center transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <motion.h2
          className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground-900 mb-4 md:mb-6 leading-tight"
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Expert Women&apos;s Healthcare{' '}
          <span className="text-primary-500 italic">You Can Trust</span>
        </motion.h2>
        <motion.p
          className="text-foreground-600 text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Book your consultation today and receive personalized care for pregnancy, fertility and gynecological health.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            onClick={onBookAppointment}
            className="px-8 py-3.5 bg-primary-500 text-white rounded-full text-sm md:text-base font-semibold whitespace-nowrap cursor-pointer btn-luxury"
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 24px -6px rgba(216, 140, 165, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="inline-flex items-center gap-2">
              <i className="ri-calendar-check-line text-lg"></i>
              Book Appointment
            </span>
          </motion.button>
          <motion.a
            href="https://wa.me/918050816686?text=Hello%20Dr.%20Nikhita%2C%20I%20would%20like%20to%20consult%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white border-2 border-foreground-200 text-foreground-800 rounded-full text-sm md:text-base font-semibold whitespace-nowrap cursor-pointer flex items-center gap-2 btn-luxury"
            whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(216, 140, 165, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="ri-whatsapp-line text-green-600 text-lg"></i>
            <span>WhatsApp Now</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
