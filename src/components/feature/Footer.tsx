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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-8">
          {/* Column 1 — Logo + Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.img
                src="https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/968d003d-8f3f-4710-a43e-26ce0ca55ac4_7025-removebg-preview.png"
                alt="Dr. Nikhita B Vadvadgi — Best Gynecologist in Bengaluru"
                title="Dr. Nikhita B Vadvadgi — Gynecologist & Obstetrician Bengaluru"
                className="h-12 md:h-14 w-auto mb-3 md:mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <p className="text-foreground-600 text-sm leading-relaxed max-w-xs">
              Consultant Obstetrician, Gynecologist, Laparoscopic Surgeon and Infertility Specialist providing compassionate, evidence-based women&apos;s healthcare in Bengaluru.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <nav className="lg:col-span-1" aria-label="Quick links">
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

          {/* Column 3 — Services */}
          <nav className="lg:col-span-1" aria-label="Care and treatments">
            <h4 className="font-heading text-sm md:text-base font-semibold text-foreground-900 mb-3 md:mb-4">Services</h4>
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

          {/* Column 4 — Contact */}
          <address className="lg:col-span-1 not-italic">
            <h4 className="font-heading text-sm md:text-base font-semibold text-foreground-900 mb-3 md:mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-foreground-600">
              <div className="flex items-start space-x-3">
                <i className="ri-whatsapp-line text-green-600 mt-0.5" aria-hidden="true"></i>
                <div>
                  <p className="text-[11px] text-foreground-400 uppercase tracking-wide mb-0.5">Doctor WhatsApp</p>
                  <a href="https://wa.me/918197301494" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors duration-200 cursor-pointer font-medium">8197301494</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-phone-line text-primary-500 mt-0.5" aria-hidden="true"></i>
                <div>
                  <p className="text-[11px] text-foreground-400 uppercase tracking-wide mb-0.5">Clinic Reception</p>
                  <a href="tel:+918050816686" className="hover:text-primary-600 transition-colors duration-200 cursor-pointer font-medium">8050816686</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-primary-500 mt-0.5" aria-hidden="true"></i>
                <a
                  href="https://www.google.com/maps/search/WHPG%2BQR+Bengaluru%2C+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 transition-colors duration-200 cursor-pointer leading-relaxed"
                >
                  42, S End Rd, Near Mecon Limited,<br />
                  Basavanagudi, Bengaluru,<br />
                  Karnataka 560004
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-time-line text-primary-500 mt-0.5" aria-hidden="true"></i>
                <span>Mon - Sat: 9:00 AM - 10:00 AM, 4:00 PM - 9:00 PM</span>
              </div>
            </div>
          </address>

          {/* Column 5 — Follow Us */}
          <div className="lg:col-span-1">
            <h4 className="font-heading text-sm md:text-base font-semibold text-foreground-900 mb-3 md:mb-4">Follow Us</h4>

            {/* Instagram Card */}
            <motion.a
              href="https://www.instagram.com/obgyaan_by_nik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-br from-pink-100 via-purple-50 to-orange-50 border border-pink-200/50 hover:border-pink-300 transition-all duration-300 cursor-pointer group mb-4 w-full"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Follow Dr. Nikhita on Instagram"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-instagram-line text-white text-lg"></i>
              </div>
              <div className="text-left">
                <p className="text-xs text-foreground-500">Follow Dr. Nikitha</p>
                <p className="text-sm font-semibold text-foreground-900">@obgyaan_by_nik</p>
              </div>
            </motion.a>

            {/* Google Rating Card */}
            <div className="bg-white rounded-xl border border-background-200 p-4 mb-4 card-luxury">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-5 w-auto"
                />
                <span className="text-xs text-foreground-400">Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-2xl font-bold text-foreground-900">4.9</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-amber-400 text-sm"></i>
                  ))}
                </div>
              </div>
              <p className="text-xs text-foreground-500 mt-1">102+ Google Reviews</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <motion.a
                href="https://wa.me/918197301494"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Dr. Nikhita"
                className="w-9 h-9 rounded-full bg-green-500/10 hover:bg-green-500 flex items-center justify-center transition-colors duration-300 cursor-pointer group"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-whatsapp-line text-green-600 group-hover:text-white text-base"></i>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/obgyaan_by_nik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Dr. Nikhita"
                className="w-9 h-9 rounded-full bg-pink-500/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 flex items-center justify-center transition-colors duration-300 cursor-pointer group"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-instagram-line text-pink-600 group-hover:text-white text-base"></i>
              </motion.a>
              <motion.a
                href="https://www.google.com/maps/search/WHPG%2BQR+Bengaluru%2C+Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Reviews Dr. Nikhita"
                className="w-9 h-9 rounded-full bg-amber-500/10 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300 cursor-pointer group"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-google-line text-amber-600 group-hover:text-white text-base"></i>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-100/40 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-foreground-400">
          <p>&copy; {currentYear} Dr. Nikhita B Vadvadgi. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed with compassion in Bengaluru, India</p>
        </div>
      </div>
    </footer>
  );
}
