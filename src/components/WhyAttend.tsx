import { motion } from 'motion/react';
import { HiSparkles } from 'react-icons/hi2';
import { FaBrain, FaAward, FaStar } from 'react-icons/fa6';

const reasons = [
  {
    title: 'Gain Practical Exposure',
    desc: 'Participate in discussions, workshops, activities, and real-world learning experiences.',
    Icon: FaBrain,
    bg: '#2451A6',
    border: '#1a3a80',
    shadow: 'rgba(36,81,166,0.4)',
    textColor: 'text-white',
    subtextColor: 'text-white/80',
    labelColor: 'text-white/60',
    accentColor: 'text-white',
    iconBg: 'bg-white/20'
  },
  {
    title: 'Earn Recognition',
    desc: 'Receive participation certificates and become part of a growing psychology community.',
    Icon: FaAward,
    bg: '#F4D313',
    border: '#e6c500',
    shadow: 'rgba(244,211,19,0.4)',
    textColor: 'text-slate-900',
    subtextColor: 'text-slate-800',
    labelColor: 'text-slate-700',
    accentColor: 'text-slate-900',
    iconBg: 'bg-slate-900/15'
  },
  {
    title: 'Be Part of Something Bigger',
    desc: "Join Kerala's aspiring mental health professionals in a conclave built for learning, collaboration, and impact.",
    Icon: FaStar,
    bg: '#169857',
    border: '#0f7040',
    shadow: 'rgba(22,152,87,0.4)',
    textColor: 'text-white',
    subtextColor: 'text-white/80',
    labelColor: 'text-white/60',
    accentColor: 'text-white',
    iconBg: 'bg-white/20'
  }
];



export function WhyAttend() {
  return (
    <section id="why-attend" className="py-24 sm:py-32 bg-slate-50/30 relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#2451A6]/5 rounded-full blur-[140px] pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-[#E0B6CF]/8 rounded-full blur-[130px] pointer-events-none -translate-x-1/3" />
      <div className="absolute top-2/3 right-1/4 w-[350px] h-[350px] bg-[#169857]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/80 border border-slate-200/80 text-[#2451A6] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(36,81,166,0.03)]">
            <HiSparkles size={14} className="text-[#F4D313]" />
            WHY JOIN US
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-5 leading-tight">
            Why Attend MANO?
          </h2>

          <p className="font-sans text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            More than a conclave an opportunity to learn, connect, grow, and shape your future in psychology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {reasons.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, type: "spring", stiffness: 60 }}
              whileHover={{
                y: -8,
                boxShadow: `0 24px 48px -12px ${card.shadow}`,
                transition: { duration: 0.2 }
              }}
              className={`group p-8 sm:p-9 rounded-[2.25rem] border shadow-md flex flex-col justify-center min-h-[280px] transition-all cursor-pointer`}
              style={{ backgroundColor: card.bg, borderColor: card.border }}
            >
              {/* Icon + Index */}
              <div className="flex justify-between items-center mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 ${card.iconBg}`}
                >
                  <div className={`transition-transform duration-500 group-hover:rotate-[12deg] ${card.textColor}`}>
                    <card.Icon size={24} />
                  </div>
                </div>
                <span className={`${card.labelColor} font-display text-sm font-bold tracking-wider transition-colors`}>
                  0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className={`font-display font-bold text-lg sm:text-xl ${card.textColor} mb-4 leading-snug`}>
                {card.title}
              </h3>

              {/* Description */}
              <p className={`font-sans text-sm ${card.subtextColor} leading-relaxed`}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
