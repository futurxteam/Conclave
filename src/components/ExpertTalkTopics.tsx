import { motion } from 'motion/react';
import { HiSparkles } from 'react-icons/hi2';
import { FaStethoscope, FaRoute, FaMobileScreen, FaMicrochip, FaBuilding, FaFlask, FaFingerprint, FaGlobe, FaSchool } from 'react-icons/fa6';

const topics = [
  {
    number: '01',
    title: 'What Does a Psychologist Actually Do All Day?',
    Icon: FaStethoscope,
    color: '#2451A6',
    bg: 'rgba(36, 81, 166, 0.06)',
  },
  {
    number: '02',
    title: 'The Career Map Nobody Gave You',
    Icon: FaRoute,
    color: '#169857',
    bg: 'rgba(22, 152, 87, 0.06)',
  },
  {
    number: '03',
    title: 'Mental Health in the Age of Social Media',
    Icon: FaMobileScreen,
    color: '#E0B6CF',
    bg: 'rgba(224, 182, 207, 0.10)',
  },
  {
    number: '04',
    title: 'Technology & the Future of Mental Health',
    Icon: FaMicrochip,
    color: '#F74A1D',
    bg: 'rgba(247, 74, 29, 0.06)',
  },
  {
    number: '05',
    title: 'Organisational Psychology & the Future of Work',
    Icon: FaBuilding,
    color: '#2451A6',
    bg: 'rgba(36, 81, 166, 0.06)',
  },
  {
    number: '06',
    title: 'Research in Psychology – Why It Matters and How to Start',
    Icon: FaFlask,
    color: '#169857',
    bg: 'rgba(22, 152, 87, 0.06)',
  },
  {
    number: '07',
    title: 'Forensic Psychology in India – Myth vs Reality',
    Icon: FaFingerprint,
    color: '#F74A1D',
    bg: 'rgba(247, 74, 29, 0.06)',
  },
  {
    number: '08',
    title: 'International Careers in Psychology',
    Icon: FaGlobe,
    color: '#E0B6CF',
    bg: 'rgba(224, 182, 207, 0.10)',
  },
];

const reserveTopic = {
  title: 'School Psychology & the Mental Health Crisis in Classrooms',
  Icon: FaSchool,
  color: '#2451A6',
};

export function ExpertTalkTopics() {
  return (
    <section id="expert-talks" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/50">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-[#2451A6]/5 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#169857]/5 rounded-full blur-[130px] pointer-events-none translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/80 border border-slate-200/80 text-[#2451A6] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(36,81,166,0.03)]">
            <HiSparkles size={14} className="text-[#169857]" />
            EXPERT SESSIONS
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-5 leading-tight">
            Expert Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2451A6] to-[#E0B6CF]">Topics</span>
          </h2>

          <p className="font-sans text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Curated sessions from leading psychology professionals covering the most pressing themes students need to know.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, idx) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, type: 'spring', stiffness: 60 }}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px -10px ${topic.bg.replace('0.06', '0.20').replace('0.10', '0.25')}`,
                transition: { duration: 0.2 },
              }}
              className="group glass-panel p-7 rounded-[2rem] border border-white/70 bg-white/50 shadow-[0_15px_35px_rgba(36,81,166,0.03)] hover:bg-white/90 transition-all flex flex-col"
            >
              {/* Top row */}
              <div className="flex justify-between items-center mb-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border border-slate-200/50 shadow-sm transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: topic.bg }}
                >
                  <div className="transition-transform duration-500 group-hover:rotate-[12deg]" style={{ color: topic.color }}>
                    <topic.Icon size={22} />
                  </div>
                </div>
                <span className="text-slate-300 group-hover:text-slate-400 font-display text-sm font-bold tracking-wider transition-colors">
                  {topic.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-slate-900 leading-snug group-hover:text-[#2451A6] transition-colors duration-300 flex-1">
                {topic.title}
              </h3>

              {/* Bottom accent */}
              <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                Expert Talk
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reserve Topic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 glass-panel p-6 rounded-[2rem] border border-dashed border-[#2451A6]/20 bg-[#2451A6]/3 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#2451A6]/10 flex items-center justify-center shrink-0">
              <reserveTopic.Icon size={18} className="text-[#2451A6]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#2451A6]/60 block mb-0.5">Reserve Topic</span>
              <p className="font-display font-bold text-sm text-slate-800">{reserveTopic.title}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
