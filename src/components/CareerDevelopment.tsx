import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

const careerCards = [
  {
    title: 'Professional Guidance',
    desc: 'Receive insights from experienced professionals on navigating the psychology field with confidence.',
    emoji: '🎯',
    color: '#2551A4',
    bg: 'rgba(37, 81, 164, 0.05)',
    glow: 'rgba(37, 81, 164, 0.15)'
  },
  {
    title: 'Career Pathway Exploration',
    desc: 'Explore opportunities in clinical practice, counselling, research, academia, corporate sectors, and beyond.',
    emoji: '🚀',
    color: '#149257',
    bg: 'rgba(20, 146, 87, 0.05)',
    glow: 'rgba(20, 146, 87, 0.15)'
  },
  {
    title: 'Professional Identity Building',
    desc: 'Learn how to develop your personal brand, skills, ethics, and professional presence.',
    emoji: '🏆',
    color: '#F74A1C',
    bg: 'rgba(247, 74, 28, 0.05)',
    glow: 'rgba(247, 74, 28, 0.15)'
  },
  {
    title: 'Entrepreneurship in Psychology',
    desc: 'Understand how psychologists can create private practices, consulting services, and innovative mental health initiatives.',
    emoji: '💼',
    color: '#D7AEC8',
    bg: 'rgba(215, 174, 200, 0.08)',
    glow: 'rgba(215, 174, 200, 0.2)'
  }
];

export function CareerDevelopment() {
  return (
    <section id="career" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#149257]/5 rounded-full blur-[130px] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-[#2551A4]/5 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />
      <div className="absolute top-2/3 left-1/3 w-[300px] h-[300px] bg-[#F1D10A]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/80 border border-slate-200/80 text-[#2551A4] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(37,81,164,0.03)]">
            <Sparkles size={14} className="text-[#F1D10A]" />
            CAREER FOCUS
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-5 leading-tight">
            Shape Your Psychology Career
          </h2>
          
          <p className="font-sans text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Discover opportunities, build professional identity, and explore diverse career pathways within psychology.
          </p>
        </div>

        {/* 4 Premium Career Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {careerCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 60 }}
              whileHover={{
                y: -8,
                boxShadow: `0 24px 48px -12px ${card.glow}`,
                transition: { duration: 0.2 }
              }}
              className="group glass-panel p-8 rounded-[2.25rem] border border-white/70 bg-white/50 shadow-[0_15px_35px_rgba(37,81,164,0.03)] hover:bg-white/90 transition-all flex flex-col justify-between min-h-[300px]"
            >
              <div>
                {/* Icon + Index */}
                <div className="flex justify-between items-center mb-7">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-slate-200/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                    style={{ backgroundColor: card.bg }}
                  >
                    <span className="transition-transform duration-500 group-hover:rotate-[12deg]">
                      {card.emoji}
                    </span>
                  </div>
                  <span className="text-slate-300 group-hover:text-slate-400 font-display text-sm font-bold tracking-wider transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-3 leading-snug group-hover:text-[#2551A4] transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="border-t border-slate-100 mt-7 pt-4 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors duration-300">
                <span>Core Module</span>
                <span className="flex items-center gap-1 transition-colors" style={{ color: card.color }}>
                  Learn More <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Banner — "Preparing Tomorrow's Psychologists Today" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0d142a] via-[#111d3a] to-[#0d142a] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/5"
        >
          {/* Internal glow orbs */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#2551A4]/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#149257]/12 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-[#D7AEC8]/6 rounded-full blur-[60px] pointer-events-none" />

          {/* Decorative sparkle */}
          <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
            <Sparkles size={72} />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Left: Text content */}
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#D7AEC8] text-xs font-bold uppercase tracking-widest mb-5">
                <span className="w-2 h-2 rounded-full bg-[#F1D10A] animate-pulse" />
                Professional Readiness
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-5 tracking-tight">
                Preparing Tomorrow's<br className="hidden sm:block" /> Psychologists Today
              </h3>
              <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
                MANO helps students bridge the gap between academic learning and real-world professional practice through guidance, mentorship, and career-focused discussions.
              </p>
            </div>

            {/* Right: CTA */}
            <a
              href="#register"
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#2551A4] to-[#D7AEC8] hover:from-[#1d428a] hover:to-[#c899b7] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-[0_15px_35px_rgba(37,81,164,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 shrink-0"
            >
              Get Conclave Pass
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
