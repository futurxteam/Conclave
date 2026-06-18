import { motion } from 'motion/react';
import { HiSparkles } from 'react-icons/hi2';
import { MdOutlineCalendarMonth, MdTranslate } from 'react-icons/md';
import { FaUsers, FaGlobe, FaBuilding, FaMugHot } from 'react-icons/fa6';

const cards = [
  {
    icon: MdOutlineCalendarMonth,
    title: '2-Day Residential Conclave',
    desc: 'An immersive residential structure designed to keep students engaged in learning, activities, and networking over two full days.',
    color: 'text-[#2451A6]',
    bg: 'bg-[#2451A6]/10'
  },
  {
    icon: FaUsers,
    title: '200+ Psychology Students',
    desc: 'Connecting ambitious minds from colleges across Kerala, fostering peer learning and lifelong professional collaborations.',
    color: 'text-[#169857]',
    bg: 'bg-[#169857]/10'
  },
  {
    icon: MdTranslate,
    title: 'Bilingual Sessions',
    desc: 'Delivered in English & Malayalam to ensure deep understanding of core psychological concepts and practical applications.',
    color: 'text-[#F74A1D]',
    bg: 'bg-[#F74A1D]/10'
  },
  {
    icon: FaGlobe,
    title: '9 Specialization Domains',
    desc: 'Comprehensive coverage from Clinical and Forensic to Digital Mental Health and Industrial Psychology.',
    color: 'text-[#F4D313]',
    bg: 'bg-[#F4D313]/20'
  }
];

export function EventOverview() {
  return (
    <section id="overview" className="py-24 md:py-32 bg-slate-50/40 relative overflow-hidden border-t border-slate-200/50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#169857]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#169857]/5 border border-[#169857]/10 text-[#169857] font-display font-bold text-xs uppercase tracking-widest mb-6">
            <HiSparkles size={14} />
            Key Information
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-6">
            Event Overview
          </h2>
          <p className="font-sans text-slate-600 text-lg md:text-xl font-medium">
            Designed to bridge the gap between academic education and real-world professional practice, MANO is Kerala's flagship psychology conclave.
          </p>
        </div>

        {/* Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-[2rem] border border-white/80 shadow-[0_15px_40px_rgba(36,81,166,0.04)] flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-6 shadow-sm`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{card.title}</h3>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Feature Row */}
        <div className="glass-panel p-8 sm:p-12 rounded-[2.5rem] border border-white/60 shadow-[0_20px_50px_rgba(36,81,166,0.06)] flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h3 className="font-display font-black text-3xl text-slate-900 mb-4 leading-tight">
              A True Residential Learning Atmosphere
            </h3>
            <p className="font-sans text-slate-600 leading-relaxed mb-6">
              Unlike ordinary single-day seminars, MANO provides a holistic environment where learning doesn't stop when the session ends. Participants stay at the venue, enabling evening networking sessions, peer support circles, interactive challenges, and cultural programs.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2451A6]/10 text-[#2451A6] flex items-center justify-center shrink-0">
                  <FaBuilding size={16} />
                </div>
                <span className="text-sm font-bold text-slate-800">Accommodation Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#169857]/10 text-[#169857] flex items-center justify-center shrink-0">
                  <FaMugHot size={16} />
                </div>
                <span className="text-sm font-bold text-slate-800">Premium Food & Drinks</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full aspect-video rounded-3xl overflow-hidden shadow-lg relative bg-slate-100">
            {/* Visual element representing standard overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" 
              alt="Students Collaborating"
              className="w-full h-full object-cover" 
            />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-display font-bold text-lg md:text-xl">Co-learning & Interactive Spaces</p>
              <p className="text-white/80 text-xs font-sans">July 4th & 5th, 2026</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
