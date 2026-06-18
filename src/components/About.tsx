import { motion } from 'motion/react';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { FaUsers, FaCompass, FaBullseye, FaUserTie, FaPeopleGroup } from 'react-icons/fa6';
import { HiOutlineMicrophone, HiSparkles } from 'react-icons/hi2';

const stats = [
  {
    label: 'Residential Experience',
    value: '2 Days',
    icon: MdOutlineCalendarMonth,
    color: 'text-[#2451A6]',
    bg: 'bg-[#2451A6]/8',
    glow: 'rgba(36, 81, 166, 0.15)'
  },
  {
    label: 'Expected Participants',
    value: '250+',
    icon: FaUsers,
    color: 'text-[#169857]',
    bg: 'bg-[#169857]/8',
    glow: 'rgba(22, 152, 87, 0.15)'
  },
  {
    label: 'Expert Speakers',
    value: '10+',
    icon: HiOutlineMicrophone,
    color: 'text-[#F74A1D]',
    bg: 'bg-[#F74A1D]/8',
    glow: 'rgba(247, 74, 29, 0.15)'
  },
  {
    label: 'Panelists',
    value: '25+',
    icon: FaUserTie,
    color: 'text-[#E0B6CF]',
    bg: 'bg-[#E0B6CF]/12',
    glow: 'rgba(224, 182, 207, 0.15)'
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-36 bg-gradient-to-b from-white via-slate-50/20 to-white relative overflow-hidden">
      {/* Curved abstract background accents */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-[#2451A6]/5 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-[#E0B6CF]/10 rounded-full blur-[130px] pointer-events-none translate-x-1/2" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#169857]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* LEFT COLUMN: Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Premium Sub-tag */}
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/80 border border-slate-200/80 text-[#2451A6] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(36,81,166,0.03)]">
                <HiSparkles size={14} className="text-[#169857] animate-pulse" />
                ABOUT MANO
              </div>

              {/* Heading */}
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.25rem] text-[#0A0F1C] mb-6 leading-[1.1] tracking-tight">
                What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2451A6] via-[#E0B6CF] to-[#169857]">MANO?</span>
              </h2>

              {/* Description paragraphs */}
              <div className="space-y-6 text-slate-600 font-sans text-[16px] sm:text-[17px] leading-relaxed">
                <p>
                  <strong className="text-slate-900">MANO: Kerala Psychology Conclave</strong> is a 2-Day Residential Conclave organized by <span className="text-slate-950 font-semibold underline decoration-[#E0B6CF] decoration-2">Sereniche Academy</span> in association with the <span className="text-slate-950 font-semibold underline decoration-[#2451A6] decoration-2">PG Department of Psychology, KMM College of Arts and Science</span>.
                </p>
                <p>
                  The conclave bridges the gap between academic learning and real-world professional psychology practice, bringing together 250+ psychology students, educators, researchers, clinicians, counsellors, and industry professionals from across Kerala.
                </p>
                <p>
                  Students will engage directly with <strong className="text-slate-800">practitioners, researchers, academicians,</strong> and <strong className="text-slate-800">industry experts</strong> through expert sessions, panel discussions, networking opportunities, career-focused programs, and interactive activities.
                </p>
              </div>

              {/* KPSA Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-[#2451A6]/5 to-[#169857]/5 border border-[#2451A6]/15 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0B6CF]/10 rounded-full blur-[40px] pointer-events-none" />
                <div className="relative z-10 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2451A6]/10 flex items-center justify-center text-[#2451A6] shrink-0 border border-[#2451A6]/15">
                    <FaPeopleGroup size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-sm mb-1">🎉 Historic Milestone — KPSA Launch</h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">Grand launch of the <strong className="text-[#2451A6]">Kerala Psychology Students Association (KPSA)</strong> — the first state-level student community dedicated to psychology in Kerala.</p>
                  </div>
                </div>
              </motion.div>

              {/* Vision & Mission Row */}
              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                <div className="glass-panel p-6.5 rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_12px_24px_rgba(36,81,166,0.02)] flex items-start gap-4 hover:bg-white/80 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#169857]/10 flex items-center justify-center text-[#169857] shrink-0 border border-[#169857]/15">
                    <FaCompass size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-sm mb-1.5">Conclave Vision</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">To create Kerala&#39;s largest gathering of aspiring mental health professionals.</p>
                  </div>
                </div>

                <div className="glass-panel p-6.5 rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_12px_24px_rgba(36,81,166,0.02)] flex items-start gap-4 hover:bg-white/80 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#F74A1D]/10 flex items-center justify-center text-[#F74A1D] shrink-0 border border-[#F74A1D]/15">
                    <FaBullseye size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-sm mb-1.5">Conclave Mission</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Connecting, Inspiring and Empowering the Next Generation of Psychologists.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Statistics Grid */}
          <div className="lg:w-1/2 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2451A6]/4 via-[#E0B6CF]/4 to-[#169857]/4 rounded-[3rem] blur-2xl transform translate-y-4 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 60 }}
                    whileHover={{
                      y: -8,
                      boxShadow: `0 20px 40px -10px ${stat.glow}`,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    className="group glass-panel p-8 rounded-[2.25rem] border border-white/70 bg-white/50 shadow-[0_15px_35px_rgba(36,81,166,0.04)] flex flex-col justify-between min-h-[220px] transition-all duration-300"
                  >
                    {/* Top Section */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} border border-slate-200/50 shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                        <Icon size={22} className="transition-transform duration-500 group-hover:rotate-[15deg]" />
                      </div>
                      <span className="text-slate-300 group-hover:text-slate-400 font-display text-sm font-bold tracking-wider transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Stat Values */}
                    <div>
                      <div className="font-display font-black text-4xl sm:text-5xl text-[#0A0F1C] tracking-tight mb-2">
                        {stat.value}
                      </div>
                      <div className="text-slate-500 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Themed Accent Row */}
            <div className="mt-6.5 glass-panel p-6 rounded-[2.25rem] border border-white/70 bg-white/50 shadow-[0_15px_35px_rgba(36,81,166,0.02)] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2451A6] via-[#E0B6CF] to-[#169857] flex items-center justify-center text-white text-xl font-bold shadow-md shadow-[#2451A6]/10">
                  🧠
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#0A0F1C] text-sm leading-tight">Theme 2026</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Exploring the Diverse World of Psychology</p>
                </div>
              </div>
              <div className="px-4.5 py-2 rounded-full bg-[#169857]/10 text-[#169857] text-xs font-bold uppercase tracking-wider border border-[#169857]/20 shadow-sm shrink-0">
                Kerala Flagship Event
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
