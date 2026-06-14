import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { menuItems } from '@/mocks/doctorData';
import { motion } from 'framer-motion';

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      setActiveSection('');
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);

        const sections = menuItems
          .filter(item => item.href.startsWith('#'))
          .map(item => item.href.replace('#', ''));
        for (const id of sections.reverse()) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150) {
              setActiveSection(id);
              break;
            }
          }
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = useCallback((href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (!isHomePage) {
      navigate('/' + href);
      return;
    }

    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, [isHomePage, navigate]);

  const isPathActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="w-full px-4 md:px-6 lg:px-10" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="flex-shrink-0 cursor-pointer"
            onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
          >
            <img
              src="https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/968d003d-8f3f-4710-a43e-26ce0ca55ac4_7025-removebg-preview.png"
              alt="Dr. Nikhita B Vadvadgi"
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isContactLink = item.href.startsWith('/');
              const sectionId = item.href.replace('#', '');
              const isActive = isContactLink
                ? isPathActive(item.href)
                : (isHomePage && activeSection === sectionId);

              if (isContactLink) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : isScrolled
                          ? 'text-foreground-600 hover:text-primary-600 hover:bg-primary-50'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? isScrolled
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-white bg-white/15'
                      : isScrolled
                        ? 'text-foreground-600 hover:text-primary-600 hover:bg-primary-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <motion.button
              onClick={onBookAppointment}
              className="px-5 py-2.5 bg-primary-500 text-white rounded-full text-sm font-button font-semibold whitespace-nowrap cursor-pointer btn-luxury"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Appointment
            </motion.button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors duration-300 ${
              isScrolled ? 'text-foreground-800 hover:bg-background-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <i className={`text-xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            isMobileMenuOpen ? 'max-h-[600px] pb-4' : 'max-h-0'
          }`}
        >
          <div className={`rounded-2xl p-3 space-y-1 ${isScrolled ? 'bg-white shadow-lg border border-background-200' : 'bg-white/95 shadow-lg'}`}>
            {menuItems.map((item) => {
              const isContactLink = item.href.startsWith('/');
              const sectionId = item.href.replace('#', '');
              const isActive = isContactLink
                ? isPathActive(item.href)
                : (isHomePage && activeSection === sectionId);

              if (isContactLink) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-foreground-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-foreground-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
            <motion.button
              onClick={() => { setIsMobileMenuOpen(false); onBookAppointment(); }}
              className="block w-full text-center px-4 py-2.5 mt-2 bg-primary-500 text-white rounded-xl text-sm font-semibold hover:bg-primary-600 transition-all duration-200 whitespace-nowrap cursor-pointer"
              whileTap={{ scale: 0.98 }}
            >
              Book Appointment
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
}
