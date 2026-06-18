import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { clinicLocations, opdTimings } from '@/mocks/doctorData';
import { motion } from 'framer-motion';

export default function ContactDetailsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const clinicAddress = '42, S End Rd, Near Mecon Limited, Basavanagudi, Bengaluru, Karnataka 560004';
  const googleMapsUrl = 'https://www.google.com/maps/search/WHPG%2BQR+Bengaluru%2C+Karnataka';

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative py-16 md:py-24 bg-background-50 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary-200/30 to-transparent pointer-events-none"></div>

      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Get In Touch
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">Contact Details</h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Reach out through any of the channels below — we are here to help you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Doctor Contact Card */}
          <motion.div
            className="bg-white rounded-2xl border border-background-200 p-6 md:p-7 flex flex-col items-center text-center hover:border-primary-200 transition-all duration-300 card-luxury"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-4">
              <i className="ri-user-heart-line text-primary-500 text-2xl md:text-3xl"></i>
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground-900 mb-1">Dr. Nikhita B Vadvadgi</h3>
            <p className="text-foreground-500 text-xs leading-relaxed mb-5">Consultant Obstetrician & Gynecologist</p>

            <div className="w-full space-y-3">
              <motion.a
                href="https://wa.me/918197301494?text=Hello%20Dr.%20Nikhita%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-background-50 hover:bg-green-50 transition-colors duration-200 cursor-pointer group card-luxury"
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors duration-200">
                  <i className="ri-whatsapp-line text-green-600 text-base group-hover:text-white transition-colors duration-200"></i>
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-foreground-400 uppercase tracking-wide">Doctor WhatsApp</p>
                  <p className="text-sm font-semibold text-foreground-900">8197301494</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+918050816686"
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-background-50 hover:bg-secondary-50 transition-colors duration-200 cursor-pointer group card-luxury"
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-9 h-9 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-500 transition-colors duration-200">
                  <i className="ri-phone-line text-secondary-600 text-base group-hover:text-white transition-colors duration-200"></i>
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-foreground-400 uppercase tracking-wide">Clinic Reception</p>
                  <p className="text-sm font-semibold text-foreground-900">8050816686</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Timings Card */}
          <motion.div
            className="bg-white rounded-2xl border border-background-200 p-6 md:p-7 flex flex-col hover:border-secondary-200 transition-all duration-300 card-luxury"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                <i className="ri-time-line text-accent-600 text-xl"></i>
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground-900">Consultation Hours</h3>
                <p className="text-xs text-foreground-400">OPD Timings</p>
              </div>
            </div>

            <div className="flex-1 space-y-2">
              {opdTimings.map((timing, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors duration-150 ${
                    timing.day === 'Sunday' ? 'opacity-40' : 'hover:bg-background-50'
                  }`}
                >
                  <span className="text-sm font-medium text-foreground-800">{timing.day}</span>
                  <span className="text-sm text-foreground-500">{timing.hours}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-foreground-400 mt-4 pt-3 border-t border-background-100">
              * Emergency consultations available 24/7. Please call before visiting to confirm availability.
            </p>
          </motion.div>

          {/* Location & Directions Card */}
          <motion.div
            className="bg-white rounded-2xl border border-background-200 p-6 md:p-7 flex flex-col hover:border-accent-200 transition-all duration-300 card-luxury"
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <i className="ri-map-pin-line text-primary-500 text-xl"></i>
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground-900">Our Location</h3>
                <p className="text-xs text-foreground-400">South End Speciality Clinic</p>
              </div>
            </div>

            <p className="text-sm text-foreground-600 leading-relaxed mb-5 flex-1">
              42, S End Rd,<br />
              Near Mecon Limited,<br />
              Basavanagudi, Bengaluru,<br />
              Karnataka 560004
            </p>

            <motion.div
              className="h-40 md:h-44 rounded-xl overflow-hidden mb-4 bg-background-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.03!2d77.5747!3d12.9449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zV0hQRytRUiBCZW5nYWx1cnU!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="South End Speciality Clinic — Basavanagudi, Bengaluru"
                aria-label="Google Maps location of South End Speciality Clinic, 42 S End Rd, Basavanagudi, Bengaluru"
              ></iframe>
            </motion.div>

            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 transition-colors duration-200 whitespace-nowrap cursor-pointer btn-luxury"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="ri-direction-line text-base"></i>
              Get Directions
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
