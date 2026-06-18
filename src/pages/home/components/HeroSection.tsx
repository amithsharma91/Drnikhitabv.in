import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onBookAppointment: () => void;
}

const trustStats = [
  { icon: 'ri-calendar-check-line', text: '12+ Years Experience' },
  { icon: 'ri-star-fill', text: '100+ Five Star Reviews' },
  { icon: 'ri-award-line', text: 'MRCOG (UK)' },
  { icon: 'ri-shield-check-line', text: 'FRM Certified' },
];

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[120vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="https://static.readdy.ai/image/f910f9f9f35c7e8506fed365ea8a08aa/5efd28c38430d57739cceb46c57f838f.png"
          alt="Dr. Nikhita B Vadvadgi — Premium Women's Health & Fertility Clinic"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />

        {/* Dark Overlay — top heavier, bottom lighter */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(20,20,20,0.45) 0%, rgba(20,20,20,0.30) 40%, rgba(20,20,20,0.25) 70%, rgba(20,20,20,0.20) 100%)',
          }}
        ></div>

        {/* Subtle warm blush glow for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D88CA5]/8 via-transparent to-[#A8D8F0]/6"></div>

        {/* Soft bottom fade to white for section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-[#FFF8FB]/90 to-transparent"></div>
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 py-6 md:py-10">
        <div className="flex flex-col items-center text-center">

          {/* ---- LOGO IN GLASS CARD ---- */}
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center justify-center p-4 md:p-5 rounded-2xl bg-white/12 backdrop-blur-[4px] border border-white/15"
              style={{ boxShadow: '0 6px 24px -6px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.08) inset' }}
            >
              <img
                src="https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/968d003d-8f3f-4710-a43e-26ce0ca55ac4_7025-removebg-preview.png"
                alt="Dr. Nikhita B Vadvadgi"
                className="h-22 sm:h-26 md:h-36 lg:h-40 w-auto"
                style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' }}
              />
            </div>
          </motion.div>

          {/* ---- TRUST BADGE ---- */}
          <motion.div
            className="inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/18 backdrop-blur-[3px] border border-white/20 mb-5 md:mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ boxShadow: '0 4px 20px -4px rgba(0,0,0,0.10), 0 0 0 1px rgba(255,255,255,0.06) inset' }}
          >
            <i className="ri-shield-check-line text-[#D88CA5] text-xs md:text-sm mr-1.5 md:mr-2"></i>
            <span className="text-white/95 text-xs md:text-sm font-semibold tracking-wider uppercase">Trusted Women&rsquo;s Health Specialist</span>
          </motion.div>

          {/* ---- HEADLINE ---- */}
          <motion.h1
            className="font-heading text-[42px] md:text-[54px] lg:text-[64px] font-semibold leading-[1.05] tracking-[-0.02em] mb-5 md:mb-6 max-w-[750px] px-1 text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ color: '#F8F6F4', textShadow: '0 2px 20px rgba(0,0,0,0.18)' }}
          >
            Compassionate Care{'\n'}
            For Every Stage Of{'\n'}
            A Woman&rsquo;s Journey
          </motion.h1>

          {/* ---- DESCRIPTION ---- */}
          <motion.p
            className="text-[17px] lg:text-[20px] leading-[1.8] max-w-[650px] mb-6 md:mb-8 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 8px rgba(0,0,0,0.1)' }}
          >
            Expert care in Pregnancy, Gynecology, Fertility and Minimally Invasive Surgery with a patient-first approach.
          </motion.p>

          {/* ---- CTA BUTTONS ---- */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-4 md:mt-6"
            initial={{ opacity: 0, y: 24 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Primary CTA */}
            <motion.button
              onClick={onBookAppointment}
              className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-primary-500 text-white rounded-full text-sm md:text-base font-button font-semibold whitespace-nowrap cursor-pointer btn-luxury shadow-lg shadow-primary-500/15"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="inline-flex items-center space-x-2">
                <i className="ri-calendar-check-line text-lg md:text-xl"></i>
                <span>Book Appointment</span>
              </span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.a
              href="https://wa.me/918197301494?text=Hello%20Dr.%20Nikhita%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-green-500 text-white rounded-full text-sm md:text-base font-button font-semibold whitespace-nowrap cursor-pointer btn-luxury shadow-lg shadow-green-500/15"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="inline-flex items-center space-x-2">
                <i className="ri-whatsapp-line text-lg md:text-xl"></i>
                <span>WhatsApp Now</span>
              </span>
            </motion.a>
          </motion.div>

          {/* ---- TRUST STATS GRID ---- */}
          <motion.div
            className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mt-8 md:mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {trustStats.map((stat, i) => (
              <div
                key={stat.text}
                className="flex flex-col items-center justify-center gap-1.5 p-3 md:p-4 rounded-xl bg-white/10 backdrop-blur-[2px] border border-white/12 text-white/90"
                style={{ boxShadow: '0 4px 16px -4px rgba(0,0,0,0.10)' }}
              >
                <i className={`${stat.icon} text-[#D88CA5] text-base md:text-lg`}></i>
                <span className="text-[12px] md:text-sm font-medium text-center whitespace-nowrap">{stat.text}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Subtle bokeh light accents (CSS-only, no animations) */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-[#D88CA5]/4 blur-[80px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[8%] w-72 h-72 rounded-full bg-[#A8D8F0]/5 blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[25%] w-48 h-48 rounded-full bg-[#D88CA5]/6 blur-[70px] pointer-events-none"></div>
    </section>
  );
}
