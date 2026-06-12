import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutCTA() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background-50 via-primary-50/40 to-primary-50/70">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 text-center transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-14 border border-primary-100 max-w-3xl mx-auto card-luxury"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent-100 flex items-center justify-center mx-auto mb-5 md:mb-6">
            <i className="ri-calendar-check-line text-accent-600 text-3xl md:text-4xl"></i>
          </div>

          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mb-3 md:mb-4">
            Experience Expert Care Firsthand
          </h2>
          <p className="text-foreground-500 text-sm md:text-base max-w-lg mx-auto mb-8 md:mb-10">
            With 12+ years of experience, international qualifications, and a patient-first philosophy, Dr. Nikhita is ready to guide you on your healthcare journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <motion.button
              onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-8 py-3.5 bg-primary-500 text-white rounded-full text-sm md:text-base font-semibold whitespace-nowrap cursor-pointer btn-luxury"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Consultation
            </motion.button>
            <motion.button
              onClick={() => { navigate('/testimonials'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-8 py-3.5 bg-background-50 text-foreground-700 rounded-full text-sm md:text-base font-semibold border border-background-300 hover:border-primary-300 hover:text-primary-600 transition-all duration-300 whitespace-nowrap cursor-pointer btn-luxury"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Read Patient Stories
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
