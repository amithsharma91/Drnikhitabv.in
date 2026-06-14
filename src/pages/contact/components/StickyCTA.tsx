import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const formSection = document.getElementById('appointment-form');
        if (!formSection) { ticking = false; return; }
        const rect = formSection.getBoundingClientRect();
        setVisible(rect.top > window.innerHeight || rect.bottom < -100);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('appointment-form');
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 lg:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-white border-t border-background-200 shadow-lg px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <a
            href="tel:+918050816686"
            className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 cursor-pointer group"
            aria-label="Call now"
          >
            <i className="ri-phone-line text-primary-500 text-xl group-hover:text-white transition-colors duration-300"></i>
          </a>
          <button
            onClick={scrollToForm}
            className="flex-1 py-3 bg-primary-500 text-white rounded-xl text-sm font-semibold hover:bg-primary-600 transition-colors duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2"
          >
            <i className="ri-calendar-check-line"></i>
            <span>Book Appointment</span>
          </button>
          <a
            href="https://wa.me/918050816686?text=Hello%20Dr.%20Nikhita%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center hover:bg-green-500 transition-colors duration-300 cursor-pointer group"
            aria-label="WhatsApp"
          >
            <i className="ri-whatsapp-line text-green-600 text-xl group-hover:text-white transition-colors duration-300"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
