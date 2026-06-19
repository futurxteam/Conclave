import { motion } from 'motion/react';
import { FaTrophy, FaRocket } from 'react-icons/fa6';
import { HiOutlineHeart, HiSparkles } from 'react-icons/hi2';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export function KPSALaunch() {
  return (
    <section id="kpsa" className="py-24 md:py-32 bg-slate-50/40 relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[300px] bg-[#2451A6]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#169857]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0d142a] via-[#101b3a] to-[#0d142a] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border border-white/5"
        >
          {/* Accent orbs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2451A6]/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#169857]/15 rounded-full blur-[100px]" />

          {/* Sparkles graphic */}
          <div className="absolute top-12 right-12 opacity-10 pointer-events-none">
            <HiSparkles size={80} />
          </div>

          <div className="relative z-10 max-w-4xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#E0B6CF] font-display font-bold text-xs uppercase tracking-widest mb-8">
              <FaRocket size={14} className="text-[#F4D313]" />
              Special Event Launch
            </div>

            {/* Title */}
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight tracking-tight">
              Kerala Psychology <br className="hidden sm:block" />
              Students Association <span className="bg-gradient-to-r from-[#E0B6CF] to-[#2451A6] bg-clip-text text-transparent italic">(KPSA)</span>
            </h2>

            {/* Sub/Intro */}
            <p className="font-sans text-white/80 text-lg sm:text-xl font-medium mb-10 leading-relaxed max-w-3xl">
              An historic launch initiative uniting psychology students, research scholars, and junior professionals across Kerala into one official, organized state-wide community framework.
            </p>

            {/* Features Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E0B6CF] mb-4">
                  <FaTrophy size={20} />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-2">Student Representation</h4>
                <p className="text-white/60 text-sm font-sans">Empowering students to voice concerns, request updates, and gain recognition across administrative layers.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#169857] mb-4">
                  <HiSparkles size={20} />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-2">Continuous Learning</h4>
                <p className="text-white/60 text-sm font-sans">Unlocking continuous workshops, certification modules, and state-wide internships for active members.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F74A1D] mb-4">
                  <HiOutlineHeart size={20} />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-2">Peer Support Network</h4>
                <p className="text-white/60 text-sm font-sans">Connecting members for peer support, inter-college events, mentorship circles, and knowledge sharing.</p>
              </div>
            </div>

            {/* Launch Action */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                to="/ticket-booking"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2451A6] to-[#E0B6CF] hover:from-[#1c3f85] hover:to-[#2451A6] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get Conclave Pass to Attend Launch <IoArrowForward size={16} />
              </Link>
              <span className="text-white/50 text-xs font-bold uppercase tracking-widest">
                Be there for the foundation ceremony
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
