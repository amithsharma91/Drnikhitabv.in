import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    if (isHomePage) {
      const el = document.getElementById(id);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    } else {
      navigate('/' + href);
    }
  };

  const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Care & Treatments', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ];

  const careLinks = [
    { label: 'Adolescent Gynaecology', href: '/services/adolescent-gynaecology' },
    { label: 'Pre-Pregnancy Check-Up', href: '/services/pre-pregnancy-checkup' },
    { label: 'Pregnancy Care', href: '/services/pregnancy-care' },
    { label: 'Gynaecological Expertise', href: '/services/gynaecological-expertise' },
    { label: 'Minimally Invasive Surgery', href: '/services/minimal-invasive-surgery' },
    { label: 'Preventive Health Screening', href: '/services/preventive-health-screening' },
    { label: 'Vaccinations', href: '/services/vaccinations' },
    { label: 'Menopause Care', href: '/services/menopause-care' },
    { label: 'Fertility Care', href: '/services/fertility-care' },
    { label: 'Family Planning', href: '/services/family-planning' },
    { label: 'Laparoscopic Surgery', href: '/services/laparoscopic-surgery' },
    { label: 'Hysteroscopic Surgery', href: '/services/hysteroscopic-surgery' },
  ];

  return (
    <footer className="bg-gradient-to-b from-background-50 via-background-50 to-primary-50/40 border-t border-primary-100/30" role="contentinfo">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 py-12 md:py-20 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-8">
          <div className="sm:col-span-2 md:col-span-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.img
                src="https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/968d003d-8f3f-4710-a43e-26ce0ca55ac4_7025-removebg-preview.png"
                alt="Dr. Nikhita B Vadvadgi — Best Gynecologist in Bangalore"
                title="Dr. Nikhita B Vadvadgi — Gynecologist & Obstetrician Bangalore"
                className="h-12 md:h-14 w-auto mb-3 md:mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <p className="text-foreground-600 text-sm leading-relaxed max-w-md">
              Consultant Obstetrician, Gynecologist, Laparoscopic Surgeon and Infertility Specialist providing compassionate, evidence-based women&apos;s healthcare in Bangalore.
            </p>
            <div className="flex items-center space-x-3 md:space-x-4 mt-5 md:mt-6">
              <motion.a href="https://wa.me/918050816686" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Dr. Nikhita" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-green-500/10 hover:bg-green-500 flex items-center justify-center transition-colors duration-300 cursor-pointer group" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                <i className="ri-whatsapp-line text-green-600 group-hover:text-white text-base md:text-lg"></i>
              </motion.a>
              <motion.a href="tel:+918050816686" aria-label="Call Dr. Nikhita" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary-100 hover:bg-primary-500 flex items-center justify-center transition-colors duration-300 cursor-pointer group" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                <i className="ri-phone-line text-primary-600 group-hover:text-white text-base md:text-lg"></i>
              </motion.a>
              <motion.a href="mailto:drnikhita@example.com" aria-label="Email Dr. Nikhita" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-secondary-100 hover:bg-secondary-500 flex items-center justify-center transition-colors duration-300 cursor-pointer group" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                <i className="ri-mail-line text-secondary-600 group-hover:text-white text-base md:text-lg"></i>
              </motion.a>
            </div>
          </div>

          <nav className="md:col-span-2" aria-label="Quick links">
            <h4 className="font-heading text-sm md:text-base font-semibold text-foreground-900 mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 md:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-foreground-500 hover:text-primary-600 text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-2" aria-label="Care and treatments">
            <h4 className="font-heading text-sm md:text-base font-semibold text-foreground-900 mb-3 md:mb-4">Care & Treatments</h4>
            <ul className="space-y-2 md:space-y-2.5">
              {careLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-foreground-500 hover:text-primary-600 text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="md:col-span-4 not-italic">
            <h4 className="font-heading text-sm md:text-base font-semibold text-foreground-900 mb-3 md:mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-foreground-600">
              <div className="flex items-start space-x-3">
                <i className="ri-phone-line text-primary-500 mt-0.5" aria-hidden="true"></i>
                <a href="tel:+918050816686" className="hover:text-primary-600 transition-colors duration-200 cursor-pointer">+91 80508 16686</a>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-primary-500 mt-0.5" aria-hidden="true"></i>
                <span>South End Speciality Clinic, Basavanagudi, Bangalore 560004</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-time-line text-primary-500 mt-0.5" aria-hidden="true"></i>
                <span>Mon - Sat: 9:00 AM - 10:00 AM, 4:00 PM - 9:00 PM</span>
              </div>
            </div>
          </address>
        </div>

        <div className="border-t border-primary-100/40 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-foreground-400">
          <p>&copy; {currentYear} Dr. Nikhita B Vadvadgi. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed with compassion in Bangalore, India</p>
        </div>
      </div>
    </footer>
  );
}
