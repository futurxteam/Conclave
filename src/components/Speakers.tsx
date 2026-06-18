import { motion } from 'motion/react';
import { HiSparkles } from 'react-icons/hi2';

const stats = [
  { value: '10+', label: 'Expert Speakers', color: 'text-[#2451A6]', bg: 'bg-[#2451A6]/10' },
  { value: '20+', label: 'Panelists', color: 'text-[#E0B6CF]', bg: 'bg-[#E0B6CF]/15' },
  { value: '5+', label: 'Psychology Domains', color: 'text-[#169857]', bg: 'bg-[#169857]/10' },
  { value: '200+', label: 'Participants', color: 'text-[#F74A1D]', bg: 'bg-[#F74A1D]/10' },
];

export function Speakers() {
  return (
    <section id="speakers" className="py-24 sm:py-32 bg-slate-50/20 relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-[#2451A6]/5 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-[#E0B6CF]/8 rounded-full blur-[130px] pointer-events-none translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/80 border border-slate-200/80 text-[#2451A6] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(36,81,166,0.03)]">
            <HiSparkles size={14} className="text-[#F4D313]" />
            CONCLAVE EXPERTS & PANELS
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-5 leading-tight">
            Featured Speakers & Panelists
          </h2>

          <p className="font-sans text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Learn from experienced psychologists, researchers, academicians, clinicians, counsellors, and industry experts from diverse psychology domains.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-panel p-6 rounded-[2rem] border border-white/60 bg-white/50 text-center shadow-sm"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-slate-500 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

