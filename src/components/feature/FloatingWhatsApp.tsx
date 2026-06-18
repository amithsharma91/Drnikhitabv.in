import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/918197301494?text=Hello%20Dr.%20Nikhita%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-all duration-200 group shadow-lg shadow-green-500/20"
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          '0 4px 14px -4px rgba(34, 197, 94, 0.3)',
          '0 8px 24px -4px rgba(34, 197, 94, 0.5)',
          '0 4px 14px -4px rgba(34, 197, 94, 0.3)',
        ],
      }}
      transition={{
        boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <i className="ri-whatsapp-line text-2xl md:text-3xl"></i>
      <span className="absolute -top-10 right-0 bg-foreground-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Chat with us
      </span>
    </motion.a>
  );
}
