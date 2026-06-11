import { motion } from 'motion/react';
import { Calendar, Users, Mic, Landmark, Sparkles, Compass, Target } from 'lucide-react';

const stats = [
  { 
    label: 'Residential Experience', 
    value: '2 Days', 
    icon: Calendar, 
    color: 'text-[#2551A4]', 
    bg: 'bg-[#2551A4]/8', 
    borderColor: 'group-hover:border-[#2551A4]/30', 
    glow: 'rgba(37, 81, 164, 0.15)' 
  },
  { 
    label: 'Expected Participants', 
    value: '200+', 
    icon: Users, 
    color: 'text-[#149257]', 
    bg: 'bg-[#149257]/8', 
    borderColor: 'group-hover:border-[#149257]/30', 
    glow: 'rgba(20, 146, 87, 0.15)' 
  },
  { 
    label: 'Expert Speakers', 
    value: '10+', 
    icon: Mic, 
    color: 'text-[#F74A1C]', 
    bg: 'bg-[#F74A1C]/8', 
    borderColor: 'group-hover:border-[#F74A1C]/30', 
    glow: 'rgba(247, 74, 28, 0.15)' 
  },
  { 
    label: 'Panelists', 
    value: '20+', 
    icon: Landmark, 
    color: 'text-[#D7AEC8]', 
    bg: 'bg-[#D7AEC8]/12', 
    borderColor: 'group-hover:border-[#D7AEC8]/30', 
    glow: 'rgba(215, 174, 200, 0.15)' 
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-36 bg-gradient-to-b from-white via-slate-50/20 to-white relative overflow-hidden">
      {/* Curved abstract background accents */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-[#2551A4]/5 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-[#D7AEC8]/10 rounded-full blur-[130px] pointer-events-none translate-x-1/2" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#F1D10A]/3 rounded-full blur-[100px] pointer-events-none" />

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
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/80 border border-slate-200/80 text-[#2551A4] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(37,81,164,0.03)]">
                <Sparkles size={14} className="text-[#F1D10A] animate-pulse" />
                CONCLAVE INTRODUCTION
              </div>
              
              {/* Heading */}
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.25rem] text-[#0A0F1C] mb-6 leading-[1.1] tracking-tight">
                What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2551A4] via-[#D7AEC8] to-[#149257]">MANO?</span>
              </h2>
              
              {/* Subheading */}
              <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-800 mb-8 leading-relaxed border-l-4 border-[#2551A4] pl-5">
                A transformative psychology conclave designed to connect, inspire, and empower the next generation of mental health professionals.
              </h3>
              
              {/* Description paragraphs */}
              <div className="space-y-6 text-slate-600 font-sans text-[16px] sm:text-[17px] leading-relaxed">
                <p>
                  <strong className="text-slate-900">MANO: Kerala Psychology Conclave</strong> is a 2-Day Residential Conclave organized by <span className="text-slate-950 font-semibold underline decoration-[#D7AEC8] decoration-2">Sereniche Academy</span> in association with <span className="text-slate-950 font-semibold underline decoration-[#2551A4] decoration-2">KMM College of Arts and Science</span>.
                </p>
                <p>
                  The conclave brings together psychology students, educators, researchers, clinicians, counsellors, and industry professionals from across Kerala to explore the diverse world of psychology.
                </p>
                <p>
                  Through expert sessions, panel discussions, networking opportunities, career-focused programs, and interactive activities, MANO aims to create meaningful learning experiences that prepare students for the future of mental health and psychological practice.
                </p>
              </div>

              {/* Vision & Mission Row */}
              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                <div className="glass-panel p-6.5 rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_12px_24px_rgba(37,81,164,0.02)] flex items-start gap-4 hover:bg-white/80 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#149257]/10 flex items-center justify-center text-[#149257] shrink-0 border border-[#149257]/15">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-sm mb-1.5">Conclave Vision</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">To create Kerala's largest gathering of aspiring mental health professionals.</p>
                  </div>
                </div>

                <div className="glass-panel p-6.5 rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_12px_24px_rgba(37,81,164,0.02)] flex items-start gap-4 hover:bg-white/80 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#F74A1C]/10 flex items-center justify-center text-[#F74A1C] shrink-0 border border-[#F74A1C]/15">
                    <Target size={20} />
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#2551A4]/4 via-[#D7AEC8]/4 to-[#149257]/4 rounded-[3rem] blur-2xl transform translate-y-4 pointer-events-none" />
            
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
                    className="group glass-panel p-8 rounded-[2.25rem] border border-white/70 bg-white/50 shadow-[0_15px_35px_rgba(37,81,164,0.04)] flex flex-col justify-between min-h-[220px] transition-all duration-300"
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
            <div className="mt-6.5 glass-panel p-6 rounded-[2.25rem] border border-white/70 bg-white/50 shadow-[0_15px_35px_rgba(37,81,164,0.02)] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2551A4] via-[#D7AEC8] to-[#149257] flex items-center justify-center text-white text-xl font-bold shadow-md shadow-[#2551A4]/10">
                  🧠
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#0A0F1C] text-sm leading-tight">Theme 2026</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Exploring the Diverse World of Psychology</p>
                </div>
              </div>
              <div className="px-4.5 py-2 rounded-full bg-[#149257]/10 text-[#149257] text-xs font-bold uppercase tracking-wider border border-[#149257]/20 shadow-sm shrink-0">
                Kerala Flagship Event
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
