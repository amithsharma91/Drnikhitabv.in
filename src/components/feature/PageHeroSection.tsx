import { useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface PageHeroProps {
  bgImageUrl: string;
  badgeText: string;
  badgeIcon?: string;
  headline: string;
  headlineHighlight?: string;
  description: string;
  primaryCTA: {
    text: string;
    href?: string;
    onClick?: () => void;
    icon?: string;
  };
  secondaryCTA: {
    text: string;
    href?: string;
    onClick?: () => void;
    icon?: string;
    variant?: 'outline' | 'solid';
  };
  showLogo?: boolean;
  children?: ReactNode;
}

export default function PageHeroSection({
  bgImageUrl,
  badgeText,
  badgeIcon = 'ri-shield-check-line',
  headline,
  headlineHighlight,
  description,
  primaryCTA,
  secondaryCTA,
  showLogo = false,
  children,
}: PageHeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const renderCTA = (cta: PageHeroProps['primaryCTA'], variant: 'primary' | 'secondary') => {
    const isPrimary = variant === 'primary';
    const className = isPrimary
      ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-600/30 btn-luxury'
      : cta.variant === 'solid'
        ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20 btn-luxury'
        : 'border-2 border-white/60 text-white hover:bg-white/15 hover:border-white/80 btn-luxury';

    const icon = cta.icon || (isPrimary ? 'ri-calendar-check-line' : 'ri-whatsapp-line');

    const content = (
      <span className="inline-flex items-center space-x-2">
        <i className={`${icon} text-lg`}></i>
        <span>{cta.text}</span>
      </span>
    );

    if (cta.href) {
      return (
        <motion.a
          href={cta.href}
          target={cta.href.startsWith('http') || cta.href.startsWith('https') || cta.href.startsWith('tel:') || cta.href.startsWith('mailto:') ? '_blank' : undefined}
          rel={cta.href.startsWith('http') || cta.href.startsWith('https') ? 'noopener noreferrer' : undefined}
          className={`w-full sm:w-auto px-7 md:px-8 py-3 md:py-3.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${className}`}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        onClick={cta.onClick}
        className={`w-full sm:w-auto px-7 md:px-8 py-3 md:py-3.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${className}`}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.button>
    );
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Full-width background image with fade */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={bgImageUrl}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Floating light gradients */}
        <div className="absolute inset-0 animate-float" style={{ animationDuration: '12s' }}>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-300/10 blur-[100px]" />
        </div>
        <div className="absolute inset-0 animate-float" style={{ animationDuration: '15s', animationDelay: '2s' }}>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-300/10 blur-[100px]" />
        </div>
        {/* Strong Rose Blush + Sky Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D88CA5]/75 via-[#D88CA5]/50 to-[#A8D8F0]/60"></div>
        {/* Additional white-bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-28 bg-gradient-to-t from-[#FFF8FB]/85 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 py-6 md:py-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo (only when explicitly enabled) */}
          {showLogo && (
            <motion.div
              className="mb-5 md:mb-7"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/968d003d-8f3f-4710-a43e-26ce0ca55ac4_7025-removebg-preview.png"
                alt="Dr. Nikhita B Vadvadgi"
                className="h-20 sm:h-24 md:h-32 lg:h-36 w-auto drop-shadow-lg"
              />
            </motion.div>
          )}

          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/85 backdrop-blur-sm border border-white/60 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <i className={`${badgeIcon} text-primary-500 text-xs md:text-sm mr-1.5 md:mr-2`}></i>
            <span className="text-foreground-700 text-xs md:text-sm font-semibold tracking-wide">{badgeText}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] mb-3 md:mb-5 max-w-4xl drop-shadow-md"
            initial={{ opacity: 0, y: 25 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {headline}
            {headlineHighlight && (
              <span className="text-[#FFF8FB]"> {headlineHighlight}</span>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-white/95 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed mb-6 md:mb-7 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderCTA(primaryCTA, 'primary')}
            {renderCTA(secondaryCTA, 'secondary')}
          </motion.div>

          {/* Extra content slot */}
          {children}
        </div>
      </div>
    </section>
  );
}
