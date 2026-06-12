import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { doctorInfo } from '@/mocks/doctorData';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="about" className="relative py-16 md:py-24 bg-background-50" aria-label="About Dr. Nikhita">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            About The Doctor
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Dedicated To Women&apos;s Health & Well-Being
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Dr. Nikhita B Vadvadgi is a highly experienced Obstetrician, Gynecologist, Laparoscopic Surgeon and Fertility Specialist dedicated to providing evidence-based and compassionate care for women.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Image with subtle parallax and hover effect */}
          <motion.div
            className="flex-shrink-0 w-full sm:w-[340px] md:w-[380px] lg:w-[420px]"
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group cursor-default">
              <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-br from-primary-200/50 to-secondary-200/40 rounded-2xl rotate-2 transition-transform duration-500 group-hover:rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/a4c7d0f9-74a6-4da7-94ab-5b2fed3e7524_IMG_20260613_010036.png"
                  alt="Dr. Nikhita B Vadvadgi — About the Doctor"
                  title="Dr. Nikhita B Vadvadgi — Obstetrician and Gynecologist in Bangalore"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Glass overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>

          {/* Content with staggered animation */}
          <div className="flex-1">
            <motion.p
              className="text-foreground-700 text-sm md:text-base leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              With over 12 years of clinical experience across premier medical institutions, Dr. Nikhita combines international training with deep understanding of women&apos;s healthcare needs. Her patient-first approach ensures every woman receives personalized, compassionate care backed by the latest medical evidence.
            </motion.p>

            <motion.h3
              className="font-heading text-xl font-semibold text-foreground-900 mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Qualifications
            </motion.h3>

            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"
                  initial={{ height: '0%' }}
                  animate={isVisible ? { height: '100%' } : {}}
                  transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
                />
              </div>

              <div className="space-y-5">
                {doctorInfo.qualifications.map((qual, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start space-x-5 group cursor-default"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="relative z-10 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/30">
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <div className="pt-1.5">
                      <h4 className="font-semibold text-foreground-900 text-sm md:text-base group-hover:text-primary-600 transition-colors duration-300">{qual.degree}</h4>
                      <p className="text-foreground-500 text-xs md:text-sm mt-0.5">{qual.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
