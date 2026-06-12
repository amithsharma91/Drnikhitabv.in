import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { faqData } from '@/mocks/doctorData';
import { motion, AnimatePresence } from 'framer-motion';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative py-16 md:py-24 bg-white" aria-label="Frequently asked questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            FAQ
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">Common Questions</h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Answers to frequently asked questions about women&apos;s health, fertility, pregnancy and gynecological care.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqData.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className="group bg-background-50 rounded-2xl border border-background-200 overflow-hidden transition-all duration-500 hover:border-primary-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.06 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-5 md:px-7 py-4 md:py-5 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h4 className="font-heading text-foreground-900 text-sm md:text-base font-semibold leading-snug pr-4">
                    {faq.question}
                  </h4>
                  <motion.div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-400 ${
                      isOpen ? 'bg-primary-500' : 'bg-primary-100 group-hover:bg-primary-200'
                    }`}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <i className={`ri-arrow-down-s-line text-sm ${isOpen ? 'text-white' : 'text-primary-500'} transition-colors duration-300`}></i>
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 md:px-7 pb-5">
                        <motion.p
                          className="text-foreground-600 text-xs md:text-sm leading-relaxed"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
