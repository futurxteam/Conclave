import { motion } from 'motion/react';
import { IoMusicalNotesOutline, IoArrowForward } from 'react-icons/io5';
import { HiOutlineMicrophone, HiSparkles } from 'react-icons/hi2';
import { FaRocket } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const featureCards = [
  {
    title: 'Cultural Evening',
    desc: 'Experience an exciting evening filled with student performances, music, creative expressions, entertainment, and celebration.',
    Icon: IoMusicalNotesOutline,
    color: '#E0B6CF',
    bg: 'rgba(224, 182, 207, 0.08)',
    glow: 'rgba(224, 182, 207, 0.2)'
  },
  {
    title: 'PsychTalks',
    desc: 'A dedicated stage for psychology students, researchers, educators, and professionals to share ideas, experiences, research insights, and perspectives that inspire the future of mental health.',
    Icon: HiOutlineMicrophone,
    color: '#F4D313',
    bg: 'rgba(244, 211, 19, 0.05)',
    glow: 'rgba(244, 211, 19, 0.18)',
    formUrl: 'https://forms.google.com/'
  },
  {
    title: 'KPSA Launch',
    desc: 'Witness the official launch of the Kerala Psychology Students Association (KPSA), creating a stronger network for psychology students across the state.',
    Icon: FaRocket,
    color: '#2451A6',
    bg: 'rgba(36, 81, 166, 0.05)',
    glow: 'rgba(36, 81, 166, 0.15)'
  }
];

export function CulturalAndKPSA() {
  return (
    <section id="cultural" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#E0B6CF]/10 rounded-full blur-[130px] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#2451A6]/5 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-[#F4D313]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/80 border border-slate-200/80 text-[#E0B6CF] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(215,174,200,0.06)]">
            <HiSparkles size={14} className="text-[#F4D313]" />
            CULTURE &amp; COMMUNITY
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-5 leading-tight">
            Beyond Learning
          </h2>

          <p className="font-sans text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Celebrate creativity, culture, leadership, and the future of psychology through memorable experiences beyond academic sessions.
          </p>
        </div>

        {/* 3 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {featureCards.map((card, idx) => {
            const isPsychTalks = card.title === 'PsychTalks';

            const CardWrapper = isPsychTalks ? 'a' : 'div';
            const cardProps = isPsychTalks
              ? { href: (card as any).formUrl || 'https://forms.google.com/', target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12, type: 'spring', stiffness: 60 }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 24px 48px -12px ${card.glow}`,
                  transition: { duration: 0.2 }
                }}
                className="group glass-panel p-8 sm:p-10 rounded-[2.25rem] border border-white/70 bg-white/50 shadow-[0_15px_35px_rgba(36,81,166,0.03)] hover:bg-white/90 transition-all flex flex-col min-h-[320px]"
              >
                <CardWrapper {...(cardProps as any)} className="flex flex-col flex-1 h-full justify-between">
                  <div className="flex-1">
                    {/* Icon + Index */}
                    <div className="flex justify-between items-center mb-7">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-slate-200/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                        style={{ backgroundColor: card.bg }}
                      >
                        <div className="transition-transform duration-500 group-hover:rotate-[12deg]" style={{ color: card.color }}>
                          <card.Icon size={24} />
                        </div>
                      </div>
                      <span className="text-slate-300 group-hover:text-slate-400 font-display text-sm font-bold tracking-wider transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-4 leading-snug group-hover:text-[#2451A6] transition-colors duration-300">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {isPsychTalks && (
                    <div className="mt-8 flex justify-end">
                      <span
                        className="inline-flex items-center gap-1.5 text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer hover:opacity-85"
                        style={{ color: card.color }}
                      >
                        Apply to Speak
                        <IoArrowForward size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  )}
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>

        {/* KPSA Featured Banner "A Historic Moment for Psychology Students" */}
        <Link
          to="/ticket-booking"
          className="block relative z-10 cursor-pointer group"
          role="button"
          tabIndex={0}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.55)",
              borderColor: "rgba(255,255,255,0.12)",
              transition: { duration: 0.3 }
            }}
            className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0d142a] via-[#111d3a] to-[#0d142a] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/5 transition-all duration-300"
          >
            {/* Internal glow orbs */}
            <div className="absolute -top-28 -right-28 w-80 h-80 bg-[#2451A6]/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-[#E0B6CF]/12 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-[#F4D313]/5 rounded-full blur-[60px] pointer-events-none" />

            {/* Sparkle decoration */}
            <div className="absolute top-6 right-8 opacity-10 pointer-events-none">
              <FaRocket size={72} />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              {/* Left: Text content */}
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#F4D313] text-xs font-bold uppercase tracking-widest mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#F4D313] animate-pulse" />
                  KPSA Special Announcement
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-5 tracking-tight group-hover:text-[#E0B6CF] transition-colors duration-300">
                  A Historic Moment for<br className="hidden sm:block" /> Psychology Students
                </h3>
                <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
                  The launch of KPSA marks a significant step towards building a united psychology student community that promotes learning, collaboration, leadership, and professional development across Kerala.
                </p>
              </div>

              {/* Right: CTA */}
              <span
                className="group-hover:scale-105 inline-flex items-center gap-2.5 bg-gradient-to-r from-[#2451A6] to-[#E0B6CF] hover:from-[#1c3f85] hover:to-[#c9a1ba] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform shrink-0"
              >
                Get Conclave Pass
                <IoArrowForward size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.div>
        </Link>

      </div>
    </section>
  );
}
