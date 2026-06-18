import { motion } from 'motion/react';
import { FaStethoscope, FaFlask, FaBuilding } from 'react-icons/fa6';
import { HiOutlineHeart, HiSparkles } from 'react-icons/hi2';
import { MdGavel } from 'react-icons/md';

const stats = [
  { value: '10+', label: 'Expert Speakers', color: 'text-[#2451A6]', bg: 'bg-[#2451A6]/10' },
  { value: '20+', label: 'Panelists', color: 'text-[#E0B6CF]', bg: 'bg-[#E0B6CF]/15' },
  { value: '5+', label: 'Psychology Domains', color: 'text-[#169857]', bg: 'bg-[#169857]/10' },
  { value: '200+', label: 'Participants', color: 'text-[#F74A1D]', bg: 'bg-[#F74A1D]/10' },
];

const categories = [
  {
    title: 'Clinical Psychology',
    Icon: FaStethoscope,
    desc: 'Deep diving into complex diagnostics, therapeutic practices, and patient rehabilitation methodologies.',
    color: '#2451A6',
    bg: 'rgba(36, 81, 166, 0.05)'
  },
  {
    title: 'Counselling Psychology',
    Icon: HiOutlineHeart,
    desc: 'Understanding personal and family therapy, trauma resolution, and cognitive behavior counseling.',
    color: '#E0B6CF',
    bg: 'rgba(224, 182, 207, 0.08)'
  },
  {
    title: 'Research & Academia',
    Icon: FaFlask,
    desc: 'Focusing on qualitative and quantitative analysis, academic publications, and educational paradigms.',
    color: '#F4D313',
    bg: 'rgba(244, 211, 19, 0.05)'
  },
  {
    title: 'Industrial & Organisational Psychology',
    Icon: FaBuilding,
    desc: 'Exploring workplace mental health, employee counseling, selection, and group dynamics.',
    color: '#169857',
    bg: 'rgba(22, 152, 87, 0.05)'
  },
  {
    title: 'Forensic & Legal Psychology',
    Icon: MdGavel,
    desc: 'Analyzing criminal behavior, investigative methods, and testimony checks in legal settings.',
    color: '#F74A1D',
    bg: 'rgba(247, 74, 29, 0.05)'
  }
];

const panelTopics = [
  { title: 'Future of Psychology in India', desc: 'Developing national licensing structures and addressing high student demand in clinical setups.' },
  { title: 'Mental Health & Society', desc: 'Destigmatizing mental health therapy, increasing accessibility, and community engagement.' },
  { title: 'Career Pathways in Psychology', desc: 'Navigating professional identity building, higher education options, and setting up private practices.' },
  { title: 'Research & Innovation', desc: 'Empirical studies, modern data methodologies, and emerging paradigms in neuroscience.' },
  { title: 'Digital Mental Health', desc: 'Exploring online counseling ecosystems, therapy platforms, and AI-assisted diagnostics.' }
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
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

        {/* Category Cards Section */}
        <div className="mb-24">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mb-10 text-center">
            Specialized Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group glass-panel p-6.5 rounded-[2rem] border border-white/60 bg-white/50 shadow-sm flex flex-col justify-between hover:bg-white transition-all duration-300"
              >
                <div>
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 border border-slate-200/50 shadow-sm transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: cat.bg }}
                  >
                    <div className="transition-transform duration-500 group-hover:rotate-[12deg]" style={{ color: cat.color }}><cat.Icon size={24} /></div>
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 mb-2 leading-tight group-hover:text-[#2451A6] transition-colors">
                    {cat.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Panel Discussions Section */}
        <div className="glass-panel p-8 sm:p-12 rounded-[2.5rem] border border-white/60 shadow-[0_20px_50px_rgba(36,81,166,0.04)] bg-white/40">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
            <div className="max-w-xl">
              <span className="px-3.5 py-1 rounded-full bg-[#2451A6]/10 border border-[#2451A6]/15 text-[#2451A6] text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                Interactive Panel Tracks
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
                Expert Panel Discussions
              </h3>
            </div>
            <p className="font-sans text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
              Engage with professionals and thought leaders as they discuss emerging trends, challenges, and opportunities shaping the future of psychology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {panelTopics.map((topic, idx) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white/70 border border-slate-200/60 rounded-2xl p-6.5 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4.5">
                  <div className="w-8 h-8 rounded-lg bg-[#2451A6]/10 text-[#2451A6] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 leading-snug">
                    {topic.title}
                  </h4>
                </div>
                <p className="font-sans text-xs text-slate-500 leading-relaxed">
                  {topic.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
