import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { memberships } from '@/mocks/aboutData';
import { motion } from 'framer-motion';

export default function MembershipsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-12 md:py-20 bg-background-50">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="text-accent-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Professional Network</span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Professional Memberships
          </h2>
          <p className="text-foreground-500 text-sm max-w-xl mx-auto">
            Active membership in leading national and international medical societies, reflecting ongoing commitment to professional excellence.
          </p>
        </div>

        <div className="space-y-4 md:space-y-5 max-w-4xl mx-auto">
          {memberships.map((membership, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-2xl p-5 md:p-7 border border-background-200 hover:border-accent-300 transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 card-luxury"
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.08 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                borderColor: 'rgba(168, 216, 240, 0.4)',
              }}
            >
              <div className="flex-shrink-0 flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent-100 flex items-center justify-center group-hover:bg-accent-500 transition-all duration-300 group-hover:scale-105">
                  <i className={`${membership.icon} text-accent-600 text-lg md:text-xl group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <div className="sm:hidden">
                  <h3 className="font-heading text-lg font-bold text-foreground-900">{membership.abbreviation}</h3>
                  <p className="text-xs text-foreground-400">{membership.fullName}</p>
                </div>
              </div>

              <div className="hidden sm:block flex-shrink-0 w-[120px] md:w-[140px]">
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-900">{membership.abbreviation}</h3>
                <p className="text-xs text-foreground-400 mt-0.5 leading-snug">{membership.fullName}</p>
              </div>

              <div className="hidden sm:block w-px h-10 bg-background-200 flex-shrink-0" />

              <p className="text-foreground-600 text-sm leading-relaxed flex-1">{membership.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
