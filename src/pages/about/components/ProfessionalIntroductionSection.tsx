import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { professionalBio, philosophyPoints } from '@/mocks/aboutData';
import { motion } from 'framer-motion';

export default function ProfessionalIntroductionSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-12 md:py-20 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Doctor Photo */}
          <motion.div
            className="flex justify-center mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full sm:w-[300px] md:w-[340px] group cursor-default">
              <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-br from-primary-200/50 to-secondary-200/40 rounded-2xl rotate-2 transition-transform duration-500 group-hover:rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/ec78a88f-8f70-4e21-89b9-f3b1d02fe58c_compressed_IMG_20260617_220911.webp"
                  alt="Dr. Nikhita B Vadvadgi — Consultant Obstetrician and Gynecologist"
                  title="Dr. Nikhita B Vadvadgi — Obstetrician, Gynecologist & Laparoscopic Surgeon in Bangalore"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mb-6 md:mb-8 text-center">
              Professional Introduction
            </h2>
            <div className="bg-background-50 rounded-2xl p-6 md:p-10 border border-background-200 hover:border-primary-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <i className="ri-double-quotes-l text-primary-500 text-xl"></i>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-primary-200 to-transparent" />
              </div>
              {professionalBio.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Philosophy of Care */}
          <div>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mb-6 md:mb-8 text-center">
              Philosophy of Care
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {philosophyPoints.map((point, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 md:gap-4 bg-background-50 rounded-xl p-4 md:p-5 border border-background-200 hover:border-primary-200 transition-all duration-300 group card-luxury"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300 group-hover:scale-110">
                    <i className="ri-check-line text-primary-500 group-hover:text-white transition-colors duration-300 text-sm"></i>
                  </div>
                  <p className="text-foreground-700 text-sm pt-0.5 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
