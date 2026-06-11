import { motion } from 'motion/react';
import { MessagesSquare, Sparkles, User, BadgeAlert } from 'lucide-react';

const panels = [
  {
    topic: 'Career Trajectories in Modern Mental Health Practice',
    desc: 'Unpacking the shift from traditional clinical practice to digital mental health solutions and public health integration.',
    panelists: ['Dr. Evelyn Reed', 'Prof. Ananda Menon', 'David Okafor'],
    time: 'Day 1 - 02:00 PM',
    tag: 'Careers'
  },
  {
    topic: 'Psychological Ethics in Legal and Forensic Settings',
    desc: 'Analyzing the intersection of psychological analysis with judicial decision making, witness reliability, and forensic research.',
    panelists: ['Prof. K. R. Nair', 'Dr. Miriam Philip', 'Adv. S. Lakshmi'],
    time: 'Day 2 - 11:30 AM',
    tag: 'Ethics & Law'
  },
  {
    topic: 'The Future of Digital Mental Health Platforms in India',
    desc: 'Evaluating tech-enabled solutions, ethics in automated counselling apps, and maintaining clinical safety thresholds.',
    panelists: ['Dr. Sarah Jenkins', 'Rahul Krishnan (CEO, Mindspace)', 'Prof. Sneha Mary'],
    time: 'Day 2 - 02:30 PM',
    tag: 'Digital MH'
  }
];

export function PanelDiscussions() {
  return (
    <section id="panels" className="py-24 md:py-32 bg-slate-50/40 relative overflow-hidden border-t border-slate-200/50">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#F74A1C]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F74A1C]/5 border border-[#F74A1C]/10 text-[#F74A1C] font-display font-bold text-xs uppercase tracking-widest mb-6">
              <MessagesSquare size={14} />
              Interactive Debates
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
              Panel Discussions
            </h2>
          </div>
          
          <div className="max-w-sm">
            <p className="font-sans text-slate-600 text-base sm:text-lg font-medium">
              Over 20+ expert panelists debating key issues, emerging paradigms, and ethical questions across different domains.
            </p>
          </div>
        </div>

        {/* Panel Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {panels.map((panel, idx) => (
            <motion.div
              key={panel.topic}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-[2.5rem] border border-white/80 shadow-[0_15px_40px_rgba(37,81,164,0.03)] hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
                    {panel.tag}
                  </span>
                  <span className="text-slate-500 font-sans text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F74A1C]" />
                    {panel.time}
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-xl text-slate-900 mb-4 leading-snug hover:text-[#2551A4] transition-colors">
                  {panel.topic}
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                  {panel.desc}
                </p>
              </div>

              <div>
                <div className="border-t border-slate-100 pt-6">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">Key Speakers & Panelists</p>
                  <div className="space-y-2">
                    {panel.panelists.map((panelist) => (
                      <div key={panelist} className="flex items-center gap-2 text-sm text-slate-800 font-semibold">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-500 shrink-0 border border-slate-200">
                          <User size={12} />
                        </div>
                        <span>{panelist}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive teaser */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 font-medium">
            Want to submit questions for the panel discussions? <a href="#contact" className="text-[#2551A4] font-bold hover:underline">Send them to our coordinators &rarr;</a>
          </p>
        </div>

      </div>
    </section>
  );
}
