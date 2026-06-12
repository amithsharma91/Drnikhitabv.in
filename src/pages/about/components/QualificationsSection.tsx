import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { doctorInfo } from '@/mocks/doctorData';
import { motion } from 'framer-motion';

export default function QualificationsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="qualifications" className="py-12 md:py-20 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase">Credentials</span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Academic & Professional Qualifications
          </h2>
          <p className="text-foreground-500 text-sm max-w-xl mx-auto">
            A rigorous educational journey spanning India and the United Kingdom, built on a foundation of academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {doctorInfo.qualifications.map((qual, i) => (
            <motion.div
              key={i}
              className="group bg-background-50 rounded-2xl p-6 md:p-7 border border-background-200 hover:border-primary-300 transition-all duration-300 flex flex-col items-center text-center card-luxury"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.08 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                borderColor: 'rgba(216, 140, 165, 0.4)',
              }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                <span className="font-heading text-lg md:text-xl font-bold text-primary-500 group-hover:text-white transition-colors duration-300">
                  {qual.degree.split(' ')[0].charAt(0)}{qual.degree.includes(' ') ? qual.degree.split(' ').pop()?.charAt(0) : ''}
                </span>
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-900 mb-2">{qual.degree}</h3>
              <p className="text-foreground-500 text-xs md:text-sm leading-relaxed">{qual.description}</p>

              <div className="mt-5 pt-4 border-t border-background-200 w-full">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-500">
                  <i className="ri-shield-check-line"></i>
                  Verified Credential
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
