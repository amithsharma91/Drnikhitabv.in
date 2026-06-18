import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

export default function HomeMapSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" aria-label="Clinic location">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary-200/30 to-transparent pointer-events-none"></div>

      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Find Us
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">Visit Our Clinic</h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Conveniently located in Basavanagudi, Bengaluru.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Address Card */}
          <div className="flex flex-col md:flex-row items-stretch gap-5 md:gap-6 mb-6">
            <motion.div
              className="flex-1 bg-background-50 rounded-2xl border border-background-200 p-5 md:p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-primary-500 text-lg"></i>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-foreground-900 mb-1">Address</h4>
                  <p className="text-sm text-foreground-600 leading-relaxed">
                    42, S End Rd, Near Mecon Limited,<br />
                    Basavanagudi, Bengaluru,<br />
                    Karnataka 560004
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-accent-600 text-lg"></i>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-foreground-900 mb-1">Timings</h4>
                  <p className="text-sm text-foreground-600 leading-relaxed">
                    Mon - Sat: 9:00 AM - 10:00 AM<br />
                    Mon - Sat: 4:00 PM - 9:00 PM<br />
                    <span className="text-foreground-400">Sunday: Closed</span>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 bg-background-50 rounded-2xl border border-background-200 p-5 md:p-6 flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-whatsapp-line text-green-600 text-lg"></i>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-foreground-900 mb-1">Doctor WhatsApp</h4>
                  <a href="https://wa.me/918197301494" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground-900 hover:text-primary-600 transition-colors duration-200 cursor-pointer">
                    8197301494
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-secondary-600 text-lg"></i>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-foreground-900 mb-1">Clinic Reception</h4>
                  <a href="tel:+918050816686" className="text-sm font-semibold text-foreground-900 hover:text-primary-600 transition-colors duration-200 cursor-pointer">
                    8050816686
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-background-200 card-luxury"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.03!2d77.5747!3d12.9449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zV0hQRytRUiBCZW5nYWx1cnU!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="South End Speciality Clinic Location — Basavanagudi, Bengaluru"
              aria-label="Google Maps location of South End Speciality Clinic, 42 S End Rd, Basavanagudi, Bengaluru, Karnataka 560004"
              className="w-full"
            ></iframe>
          </motion.div>

          <motion.a
            href="https://www.google.com/maps/search/WHPG%2BQR+Bengaluru%2C+Karnataka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full mt-4 py-3 rounded-xl bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.99 }}
          >
            <i className="ri-direction-line text-lg"></i>
            Open in Google Maps
          </motion.a>
        </div>
      </div>
    </section>
  );
}
