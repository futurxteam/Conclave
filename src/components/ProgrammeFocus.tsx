import { motion } from 'motion/react';
import { FaArrowTrendUp, FaRoute, FaSatelliteDish, FaRocket } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

const focuses = [
  {
    title: 'Career Growth',
    desc: 'Navigate the professional journey with confidence. Gain insights from practitioners who have built thriving careers in psychology.',
    Icon: FaArrowTrendUp,
    color: '#2451A6',
    bg: 'rgba(36, 81, 166, 0.06)',
    glow: 'rgba(36, 81, 166, 0.15)',
    accent: 'border-[#2451A6]/20',
  },
  {
    title: 'Professional Direction',
    desc: 'Discover the diverse paths within psychology from clinical practice and counselling to forensics, research, and organisational roles.',
    Icon: FaRoute,
    color: '#169857',
    bg: 'rgba(22, 152, 87, 0.06)',
    glow: 'rgba(22, 152, 87, 0.15)',
    accent: 'border-[#169857]/20',
  },
  {
    title: 'Industry Updates',
    desc: 'Stay ahead of trends shaping the field. Learn about digital mental health, AI in therapy, evolving licensure, and emerging specialisations.',
    Icon: FaSatelliteDish,
    color: '#E0B6CF',
    bg: 'rgba(224, 182, 207, 0.10)',
    glow: 'rgba(224, 182, 207, 0.20)',
    accent: 'border-[#E0B6CF]/30',
  },
  {
    title: 'Entrepreneurship & Innovation',
    desc: 'Build, create, and lead change in psychology. Explore how to turn ideas into impactful products and services for mental health.',
    Icon: FaRocket,
    color: '#F74A1D',
    bg: 'rgba(247, 74, 29, 0.06)',
    glow: 'rgba(247, 74, 29, 0.15)',
    accent: 'border-[#F74A1D]/20',
  },
];

export function ProgrammeFocus() {
  return (
    <section id="focus" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/50">
      {/* Background blurs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#E0B6CF]/8 rounded-full blur-[130px] pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#2451A6]/5 rounded-full blur-[130px] pointer-events-none -translate-x-1/3" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/80 border border-slate-200/80 text-[#2451A6] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(36,81,166,0.03)]">
            <HiSparkles size={14} className="text-[#169857]" />
            PROGRAMME FOCUS
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-5 leading-tight">
            What You&#39;ll <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2451A6] to-[#169857]">Gain</span>
          </h2>

          <p className="font-sans text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            MANO is designed around four core pillars that prepare psychology students for real-world success.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focuses.map((focus, idx) => {
            const focusThemes = [
              {
                bg: 'from-[#0d142a] via-[#122247] to-[#0d142a]',
                border: 'border-white/10 group-hover:border-[#2451A6]/40',
                shadow: 'hover:shadow-[0_20px_40px_-10px_rgba(36,81,166,0.25)]',
                accentText: 'text-[#3b82f6]'
              },
              {
                bg: 'from-[#07130d] via-[#0f291a] to-[#07130d]',
                border: 'border-white/10 group-hover:border-[#169857]/40',
                shadow: 'hover:shadow-[0_20px_40px_-10px_rgba(22,152,87,0.25)]',
                accentText: 'text-[#10b981]'
              },
              {
                bg: 'from-[#151206] via-[#2a240c] to-[#151206]',
                border: 'border-white/10 group-hover:border-[#F4D313]/40',
                shadow: 'hover:shadow-[0_20px_40px_-10px_rgba(244,211,19,0.25)]',
                accentText: 'text-[#fbbf24]'
              },
              {
                bg: 'from-[#1a0c0a] via-[#351811] to-[#1a0c0a]',
                border: 'border-white/10 group-hover:border-[#F74A1D]/40',
                shadow: 'hover:shadow-[0_20px_40px_-10px_rgba(247,74,29,0.25)]',
                accentText: 'text-[#f87171]'
              }
            ];
            const theme = focusThemes[idx % focusThemes.length];
            return (
              <motion.div
                key={focus.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, type: 'spring', stiffness: 60 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className={`group bg-gradient-to-br ${theme.bg} ${theme.border} ${theme.shadow} p-8 rounded-[2.25rem] border shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all flex flex-col min-h-[300px]`}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-white/10 bg-white/5 shadow-sm transition-all duration-300 group-hover:scale-110"
                >
                  <div className={`transition-transform duration-500 group-hover:rotate-[12deg] ${theme.accentText}`}>
                    <focus.Icon size={26} />
                  </div>
                </div>

                {/* Number */}
                <span className="text-white/20 group-hover:text-[#E0B6CF]/40 font-display text-xs font-bold tracking-wider transition-colors mb-4">
                  0{idx + 1}
                </span>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white mb-3 leading-tight group-hover:text-[#E0B6CF] transition-colors duration-300">
                  {focus.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-white/70 leading-relaxed flex-1">
                  {focus.desc}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white/40 group-hover:text-white/60 transition-colors">
                  <span>Core Pillar</span>
                  <span className={theme.accentText}>&rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
