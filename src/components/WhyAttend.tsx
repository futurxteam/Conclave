import { motion } from 'motion/react';
import { HiSparkles } from 'react-icons/hi2';
import { FaBrain, FaUsers, FaRocket, FaBullseye, FaAward, FaStar } from 'react-icons/fa6';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

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

const stats = [
  { value: '200+', label: 'Students' },
  { value: '10+', label: 'Expert Speakers' },
  { value: '20+', label: 'Panelists' },
  { value: '2', label: 'Unforgettable Days' }
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
              className={`group p-8 sm:p-9 rounded-[2.25rem] border shadow-md flex flex-col justify-between min-h-[280px] transition-all cursor-pointer`}
              style={{ backgroundColor: card.bg, borderColor: card.border }}
            >
              <div>
                {/* Icon + Index */}
                <div className="flex justify-between items-center mb-7">
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
                <h3 className={`font-display font-bold text-lg sm:text-xl ${card.textColor} mb-3 leading-snug`}>
                  {card.title}
                </h3>

                {/* Description */}
                <p className={`font-sans text-sm ${card.subtextColor} leading-relaxed`}>
                  {card.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className={`border-t border-white/20 mt-7 pt-4 flex items-center justify-between text-xs font-bold ${card.labelColor} group-hover:${card.accentColor} transition-colors duration-300`}>
                <span>Key Benefit</span>
                <span className={`flex items-center gap-1 ${card.accentColor}`}>
                  Learn More <IoArrowForward size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Powerful Highlighted Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0d142a] via-[#111d3a] to-[#0d142a] text-white overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/5"
        >
          {/* Internal glow orbs */}
          <div className="absolute -top-28 -left-28 w-80 h-80 bg-[#2451A6]/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#169857]/12 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#E0B6CF]/6 rounded-full blur-[70px] pointer-events-none" />

          {/* Sparkle decoration */}
          <div className="absolute top-6 right-8 opacity-10 pointer-events-none">
            <HiSparkles size={72} />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="text-center p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-sans text-white/60 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-10" />

            {/* Bottom Text + CTA */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed">
                  A unique opportunity to experience psychology beyond textbooks through learning, networking, collaboration, and community.
                </p>
              </div>

              <Link
                to="/ticket-booking"
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F74A1D] to-[#ef4444] hover:from-[#c23612] hover:to-[#dc2626] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-[0_15px_35px_rgba(247,74,29,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 shrink-0"
              >
                🎟 Reserve Your Seat
                <IoArrowForward size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
