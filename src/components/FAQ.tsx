import { useState } from 'react';
import { HiSparkles } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'motion/react';
import { FaChevronDown } from 'react-icons/fa6';
import { IoArrowForward } from 'react-icons/io5';
import { MdOutlineQuestionAnswer } from 'react-icons/md';

const faqs = [
  {
    q: 'Who can attend MANO?',
    a: 'MANO is open to psychology students, aspiring mental health professionals, researchers, and psychology enthusiasts from across Kerala.'
  },
  {
    q: 'Is accommodation provided?',
    a: 'Accommodation support will be available for participants attending the 2-day residential conclave.'
  },
  {
    q: 'Will participants receive certificates?',
    a: 'Yes. All registered participants will receive an official participation certificate.'
  },
  {
    q: 'Are food and refreshments included?',
    a: 'Yes. Food and refreshments will be provided during the conclave.'
  },
  {
    q: 'How do I register?',
    a: 'Simply select your preferred ticket and complete the registration process through the booking page.'
  },
  {
    q: 'Can I attend only one day?',
    a: 'MANO is designed as a complete 2-day experience. Participants are encouraged to attend both days.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-slate-50/30 relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-[#2451A6]/4 rounded-full blur-[140px] pointer-events-none -translate-x-1/3" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#E0B6CF]/6 rounded-full blur-[130px] pointer-events-none translate-x-1/3" />

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/80 border border-slate-200/80 text-[#2451A6] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(36,81,166,0.03)]">
            <MdOutlineQuestionAnswer size={14} className="text-[#2451A6]" />
            GOT QUESTIONS?
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-5 leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="font-sans text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Everything you need to know before joining MANO.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4 mb-20">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`
                  rounded-[1.5rem] border transition-all duration-300 overflow-hidden
                  ${isOpen
                    ? 'bg-white shadow-[0_20px_50px_-12px_rgba(36,81,166,0.1)] border-[#2451A6]/15'
                    : 'bg-white/60 backdrop-blur-sm shadow-[0_8px_24px_rgba(36,81,166,0.03)] border-white/70 hover:bg-white/90 hover:shadow-[0_12px_32px_rgba(36,81,166,0.06)]'
                  }
                `}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 px-7 sm:px-8 py-6 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={`
                        shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-display font-bold transition-all duration-300
                        ${isOpen
                          ? 'bg-[#2451A6] text-white shadow-md'
                          : 'bg-[#2451A6]/5 text-[#2451A6] group-hover:bg-[#2451A6]/10'
                        }
                      `}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className={`
                        font-display font-bold text-base sm:text-lg transition-colors duration-300
                        ${isOpen ? 'text-[#2451A6]' : 'text-slate-900 group-hover:text-[#2451A6]'}
                      `}
                    >
                      {faq.q}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className={`
                      shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
                      ${isOpen ? 'bg-[#2451A6]/10 text-[#2451A6]' : 'bg-slate-100 text-slate-400 group-hover:bg-[#2451A6]/5 group-hover:text-[#2451A6]'}
                    `}
                  >
                    <FaChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 sm:px-8 pb-7 pt-0">
                        <div className="pl-13 sm:pl-[3.25rem]">
                          <div className="h-px bg-gradient-to-r from-[#2451A6]/10 via-[#E0B6CF]/15 to-transparent mb-5" />
                          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
          className="relative rounded-[2rem] overflow-hidden border border-white/60 shadow-[0_20px_50px_rgba(36,81,166,0.06)]"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2451A6]/6 via-[#E0B6CF]/5 to-[#169857]/6 pointer-events-none" />
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm pointer-events-none" />

          {/* Internal glow */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#2451A6]/8 rounded-full blur-[50px] pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#E0B6CF]/10 rounded-full blur-[50px] pointer-events-none" />

          <div className="relative z-10 p-8 sm:p-10 lg:p-12 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2451A6]/5 border border-[#2451A6]/10 mb-6">
              <HiSparkles size={24} className="text-[#2451A6]" />
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight mb-3">
              Still Have Questions?
            </h3>

            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
              Reach out to our team and we'll be happy to help.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-[#2451A6] hover:bg-[#1c3f85] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-[0_15px_35px_rgba(36,81,166,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
              <IoArrowForward size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
