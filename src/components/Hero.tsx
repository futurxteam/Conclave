import { motion } from 'motion/react';
import { HiSparkles } from 'react-icons/hi2';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { IoLocationOutline, IoArrowForward } from 'react-icons/io5';
import { FaUsers, FaChevronDown, FaBrain, FaUserTie } from 'react-icons/fa6';
import { HiOutlineMicrophone } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { CountdownTimer } from './CountdownTimer';
import { ArtistAnnouncement } from './ArtistAnnouncement';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 15 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, rotateX: 8, rotateY: 20, y: 48 },
  show: {
    opacity: 1, scale: 1, rotateX: 0, rotateY: 0, y: 0,
    transition: { type: 'spring', stiffness: 55, damping: 18, mass: 1.2, delay: 0.25 },
  },
};

const eventDetails = [
  { icon: MdOutlineCalendarMonth, label: 'July 18 & 19, 2026', sub: '2-Day Residential Conclave', color: 'text-[#2451A6]', bg: 'bg-[#2451A6]/10' },
  { icon: FaUsers, label: '250+ Participants', sub: 'Psychology Students Across Kerala', color: 'text-[#169857]', bg: 'bg-[#169857]/10' },
  { icon: IoLocationOutline, label: 'Sereniche Academy', sub: 'Kerala, India', color: 'text-[#F74A1D]', bg: 'bg-[#F74A1D]/10' },
];

const heroStats = [
  { value: '250+', label: 'Participants', icon: FaUsers, color: '#2451A6' },
  { value: '10+', label: 'Expert Speakers', icon: HiOutlineMicrophone, color: '#169857' },
  { value: '25+', label: 'Panelists', icon: FaUserTie, color: '#E0B6CF' },
  { value: '2 Days', label: 'Residential', icon: MdOutlineCalendarMonth, color: '#F74A1D' },
];

export function Hero() {
  const scrollToAgenda = () => {
    const el = document.getElementById('agenda');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col pb-16 overflow-hidden">

      {/* Spacer that equals navbar height so content starts below the navbar */}
      <div className="h-24 shrink-0" />

      {/* ── MANO Vector Marquee Strip ── sits right below navbar, sticks on scroll */}
      <div
        className="sticky z-40 left-0 w-screen overflow-hidden pointer-events-none select-none flex items-center"
        style={{
          top: '76px', /* matches the navbar pill bottom edge */
          backgroundColor: '#8E939C',
          marginLeft: 'calc(-50vw + 50%)',
        }}
      >
        <div className="w-full flex overflow-hidden py-1 md:py-2">
          <div className="flex shrink-0 animate-marquee gap-2">
            {Array.from({ length: 60 }).map((_, i) => (
              <img
                key={`v1-${i}`}
                src="/mano-vector.png"
                alt=""
                className="h-7 md:h-9 w-auto object-contain shrink-0"
                style={{ filter: 'contrast(1.08) saturate(1.15)' }}
              />
            ))}
            {Array.from({ length: 60 }).map((_, i) => (
              <img
                key={`v2-${i}`}
                src="/mano-vector.png"
                alt=""
                className="h-7 md:h-9 w-auto object-contain shrink-0"
                style={{ filter: 'contrast(1.08) saturate(1.15)' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#2451A6]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#E0B6CF]/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#169857]/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-12 relative z-10 flex-1 flex items-center">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* ── LEFT COLUMN ── */}
          <div className="pt-6 lg:pt-10">

            {/* Animated MANO wordmark */}
            <motion.div variants={itemVariants} className="mb-5">
              <ArtistAnnouncement />
            </motion.div>

            {/* Organiser badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-[#2451A6]/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#F74A1D] animate-pulse" />
                <span className="font-sora text-[11px] font-semibold tracking-widest uppercase text-slate-600">
                  Sereniche Academy
                </span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-clash font-extrabold text-[3.6rem] sm:text-[5rem] lg:text-[5.5rem] leading-[1.02] tracking-tight text-[#0d1421] mb-4"
            >
              Kerala<br />
              <span className="psychology-gradient italic pr-2">
                Psychology
              </span><br />
              Conclave
            </motion.h1>

            {/* Theme line */}
            <motion.p
              variants={itemVariants}
              className="font-sora text-base sm:text-lg text-slate-600 font-medium mb-2 leading-relaxed tracking-wide"
            >
              Exploring the Diverse World of Psychology
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="font-sora font-bold text-sm tracking-[0.25em] uppercase text-[#2451A6] mb-10"
            >
              Explore. Connect. Lead.
            </motion.p>

            {/* Event detail pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              {eventDetails.map(({ icon: Icon, label, sub }, idx) => {
                const pillThemes = [
                  {
                    bg: 'bg-[#2451A6]',
                    border: 'border-[#1a3a80]',
                    shadow: 'hover:shadow-[0_8px_24px_rgba(36,81,166,0.4)]',
                    iconBg: 'bg-white/20',
                    iconColor: 'text-white'
                  },
                  {
                    bg: 'bg-[#169857]',
                    border: 'border-[#0f7040]',
                    shadow: 'hover:shadow-[0_8px_24px_rgba(22,152,87,0.4)]',
                    iconBg: 'bg-white/20',
                    iconColor: 'text-white'
                  },
                  {
                    bg: 'bg-[#F74A1D]',
                    border: 'border-[#c23612]',
                    shadow: 'hover:shadow-[0_8px_24px_rgba(247,74,29,0.4)]',
                    iconBg: 'bg-white/20',
                    iconColor: 'text-white'
                  }
                ];
                const theme = pillThemes[idx % pillThemes.length];
                const isLocation = label === 'Sereniche Academy';

                if (isLocation) {
                  return (
                    <a
                      key={label}
                      href="https://maps.google.com/?q=Sereniche+Academy+Kerala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl ${theme.bg} border ${theme.border} text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_12px_28px_rgba(247,74,29,0.45)] cursor-pointer group`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${theme.iconBg} ${theme.iconColor}`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-sora font-semibold text-sm text-white leading-tight">{label}</p>
                        <p className="text-[11px] font-sora text-white/80 font-normal leading-tight">{sub}</p>
                      </div>
                    </a>
                  );
                }

                return (
                  <div
                    key={label}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl ${theme.bg} border ${theme.border} text-white shadow-md ${theme.shadow} transition-all duration-300 hover:-translate-y-0.5 group`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${theme.iconBg} ${theme.iconColor}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-sora font-semibold text-sm text-white leading-tight">{label}</p>
                      <p className="text-[11px] font-sora text-white/80 font-normal leading-tight">{sub}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* WhatsApp Community Join Banner */}
            <motion.div variants={itemVariants} className="mb-10">
              <a
                href="https://chat.whatsapp.com/CEhWHgp6c2cBe1VPzz6MSw?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 sm:gap-4 bg-white/60 backdrop-blur-md border-2 border-dashed border-[#25D366]/40 hover:border-[#25D366] rounded-2xl p-3 sm:p-3.5 px-4 sm:px-5 shadow-sm hover:shadow-[0_12px_24px_rgba(37,211,102,0.15)] transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
              >
                {/* 3 circular avatars on the left & badge */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2.5">
                    <img
                      src="/guest 1.png"
                      alt="Community Member 1"
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                    <img
                      src="/guest 2.png"
                      alt="Community Member 2"
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                    <img
                      src="/guest 3.png"
                      alt="Community Member 3"
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  </div>
                  <span className="bg-[#25D366]/10 text-[#25D366] text-[10px] font-bold font-sora px-2 py-0.5 rounded-full border border-[#25D366]/20 whitespace-nowrap">
                    +500 Members
                  </span>
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-slate-200" />

                {/* Text & Icon */}
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold tracking-widest text-slate-500 uppercase font-sora flex items-center gap-1">
                    JOIN OUR <IoArrowForward className="text-[#25D366] group-hover:translate-x-1 transition-transform" size={11} />
                  </span>
                  <span className="font-clash font-bold text-xs sm:text-sm text-[#25D366] leading-tight whitespace-nowrap">
                    WhatsApp Community
                  </span>
                </div>
              </a>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/ticket-booking"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#2451A6] to-[#169857] hover:from-[#1a3a80] hover:to-[#0f7040] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-[0_12px_40px_rgba(36,81,166,0.45)] transition-all duration-300 hover:-translate-y-0.5"
              >
                🎟 Reserve Your Seat
                <IoArrowForward size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={scrollToAgenda}
                className="group flex items-center justify-center gap-3 bg-[#F4D313] hover:bg-[#e6c500] text-slate-900 font-bold text-sm px-8 py-4 rounded-full shadow-md hover:shadow-[0_12px_30px_rgba(244,211,19,0.45)] transition-all duration-300 hover:-translate-y-0.5 border border-[#e6c500]"
              >
                Explore Agenda
                <FaChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Countdown */}
            <motion.div variants={itemVariants}>
              <CountdownTimer />
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN Visual Card ── */}
          <div className="relative w-full flex flex-col items-center justify-center perspective-[2000px]">
            <motion.div
              variants={cardVariants}
              className="relative w-full max-w-[560px] mx-auto z-10"
            >
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-[#2451A6] to-[#1b3d82] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(36,81,166,0.4)] text-white">

                {/* Inner pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L35 25L60 30L35 35L30 60L25 35L0 30L25 25Z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Glow orbs inside card */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E0B6CF]/20 rounded-full blur-[60px]" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#169857]/10 rounded-full blur-[50px]" />

                {/* Card content */}
                <div className="relative z-10 p-12 flex flex-col justify-center min-h-[340px]">
                  {/* Top row logo + edition */}
                  <div className="flex items-start justify-between mb-12">
                    <div className="flex items-center">
                      <img
                        src="/mano1.png"
                        alt="MANO Logo"
                        className="h-14 sm:h-16 w-auto object-contain"
                      />
                    </div>
                    <div className="text-right mt-1.5">
                      <p className="text-white/40 text-[9px] font-bold tracking-widest uppercase font-sora">Edition</p>
                      <p className="font-clash font-bold text-xl text-white">2026</p>
                    </div>
                  </div>

                  {/* Title block */}
                  <div className="pb-8">
                    <p className="text-[#E0B6CF] font-sora font-semibold tracking-[0.35em] text-[9.5px] uppercase mb-2">Kerala Psychology Conclave</p>
                    <h2 className="font-clash font-bold text-[3rem] sm:text-[3.6rem] leading-none tracking-wide drop-shadow-md mb-3">
                      MANO
                    </h2>
                    <p className="text-white/80 font-jakarta font-normal text-sm sm:text-base tracking-wide leading-relaxed">
                      Exploring the Diverse<br />World of Psychology
                    </p>
                  </div>

                  {/* Stats row inside card */}
                  <div className="grid grid-cols-4 gap-3">
                    {heroStats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="font-sora font-bold text-lg sm:text-xl text-white tracking-tight">{stat.value}</p>
                        <p className="text-[9px] sm:text-[10px] font-jakarta font-medium uppercase tracking-wider text-white/55 mt-1.5 leading-snug">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#F74A1D] via-[#E0B6CF] to-[#169857]" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 z-10"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
