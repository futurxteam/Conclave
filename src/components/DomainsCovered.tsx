import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const domains = [
  {
    title: 'Clinical Psychology',
    desc: 'Understanding assessment, diagnosis, treatment strategies, and clinical intervention pathways.',
    emoji: '🧠',
    color: '#2551A4',
    bg: 'rgba(37, 81, 164, 0.05)',
    glow: 'rgba(37, 81, 164, 0.15)'
  },
  {
    title: 'Counselling Psychology',
    desc: 'Focusing on personal and interpersonal dynamics, therapeutic techniques, and emotional wellness.',
    emoji: '💬',
    color: '#D7AEC8',
    bg: 'rgba(215, 174, 200, 0.08)',
    glow: 'rgba(215, 174, 200, 0.15)'
  },
  {
    title: 'Organisational Psychology',
    desc: 'Analyzing organizational structure, group culture, employee wellbeing, and management strategies.',
    emoji: '🏢',
    color: '#149257',
    bg: 'rgba(20, 146, 87, 0.05)',
    glow: 'rgba(20, 146, 87, 0.15)'
  },
  {
    title: 'Industrial Psychology',
    desc: 'Applying behavioral sciences to workflow systems, productivity, and ergonomic design.',
    emoji: '⚙️',
    color: '#F1D10A',
    bg: 'rgba(241, 209, 10, 0.05)',
    glow: 'rgba(241, 209, 10, 0.15)'
  },
  {
    title: 'Research & Academia',
    desc: 'Advancing human understanding through academic inquiry, methodology, and teaching.',
    emoji: '📚',
    color: '#F74A1C',
    bg: 'rgba(247, 74, 28, 0.05)',
    glow: 'rgba(247, 74, 28, 0.15)'
  },
  {
    title: 'Forensic Psychology',
    desc: 'Applying psychology to criminal investigation, offender profiling, and judicial support systems.',
    emoji: '⚖️',
    color: '#2551A4',
    bg: 'rgba(37, 81, 164, 0.05)',
    glow: 'rgba(37, 81, 164, 0.15)'
  },
  {
    title: 'Legal Psychology',
    desc: 'Exploring witness reliability, cognitive biases in courtroom trials, and legal systems.',
    emoji: '🏛️',
    color: '#149257',
    bg: 'rgba(20, 146, 87, 0.05)',
    glow: 'rgba(20, 146, 87, 0.15)'
  },
  {
    title: 'Digital Mental Health',
    desc: 'Investigating online therapeutic applications, teletherapy, and modern digital ecosystems.',
    emoji: '📱',
    color: '#F74A1C',
    bg: 'rgba(247, 74, 28, 0.05)',
    glow: 'rgba(247, 74, 28, 0.15)'
  },
  {
    title: 'Positive Psychology',
    desc: 'Studying strengths, traits, and factors that enable individuals and communities to thrive.',
    emoji: '✨',
    color: '#D7AEC8',
    bg: 'rgba(215, 174, 200, 0.08)',
    glow: 'rgba(215, 174, 200, 0.15)'
  }
];

export function DomainsCovered() {
  return (
    <section id="domains" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/50">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D7AEC8]/10 rounded-full blur-[130px] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-[#2551A4]/5 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/80 border border-slate-200/80 text-[#2551A4] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(37,81,164,0.03)]">
            <Sparkles size={14} className="text-[#F1D10A]" />
            CONCLAVE TRACKS
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-5 leading-tight">
            Domains Covered
          </h2>
          
          <p className="font-sans text-slate-800 text-lg sm:text-xl font-semibold mb-6 leading-relaxed">
            Explore the diverse branches of psychology through expert-led sessions, discussions, and real-world insights.
          </p>
          
          <p className="font-sans text-slate-500 text-base leading-relaxed max-w-2xl mx-auto">
            From clinical practice and counselling to research, digital mental health, and positive psychology, MANO offers participants exposure to a wide range of psychological disciplines and career pathways.
          </p>
        </div>

        {/* 3x3 Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((dom, idx) => (
            <motion.div
              key={dom.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, type: "spring", stiffness: 60 }}
              whileHover={{ 
                y: -8, 
                boxShadow: `0 20px 40px -10px ${dom.glow}`,
                borderColor: `${dom.color}25`,
                transition: { duration: 0.2 } 
              }}
              className="group glass-panel p-8 rounded-[2.25rem] border border-white/70 bg-white/50 shadow-[0_15px_35px_rgba(37,81,164,0.03)] hover:bg-white/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-slate-200/50 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: dom.bg }}
                  >
                    <span className="transition-transform duration-500 group-hover:rotate-[12deg]">{dom.emoji}</span>
                  </div>
                  <span className="text-slate-300 group-hover:text-slate-400 font-display text-sm font-bold tracking-wider transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                
                <h3 
                  className="font-display font-bold text-xl text-slate-900 mb-3 transition-colors duration-300"
                  style={{ '--hover-color': dom.color } as any}
                >
                  {dom.title}
                </h3>
                
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {dom.desc}
                </p>
              </div>

              <div className="border-t border-slate-100 mt-6 pt-4 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-slate-800 transition-colors">
                <span>Conclave Specialization</span>
                <span style={{ color: dom.color }}>Track Info &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
