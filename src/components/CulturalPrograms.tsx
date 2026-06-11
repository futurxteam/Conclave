import { motion } from 'motion/react';
import { Music, Sparkles } from 'lucide-react';

export function CulturalPrograms() {
  return (
    <section id="cultural" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-200/50">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D7AEC8]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D7AEC8]/15 border border-[#D7AEC8]/35 text-[#D7AEC8] font-display font-bold text-xs uppercase tracking-widest mb-6">
            <Music size={14} className="text-[#F1D10A]" />
            Evening Festivities
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-6">
            Cultural Programs
          </h2>
          <p className="font-sans text-slate-600 text-lg md:text-xl font-medium">
            Celebrate the synergy of minds through art, expression, music, and performance.
          </p>
        </div>

        {/* Info Blocks with Glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 rounded-[2rem] border border-white/60 shadow-[0_15px_40px_rgba(37,81,164,0.03)]">
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-2xl">🌟</span> Evening Cultural Programs
              </h3>
              <p className="font-sans text-slate-600 leading-relaxed text-base">
                Join us for a stellar evening cultural event designed to help you relax, unwind, and build deeper connections with speakers and peers. Featuring acoustic music, stand-up, storytelling sessions, and a delicious buffet dinner.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-[2rem] border border-white/60 shadow-[0_15px_40px_rgba(37,81,164,0.03)]">
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-2xl">🎤</span> Student Performances
              </h3>
              <p className="font-sans text-slate-600 leading-relaxed text-base">
                A platform dedicated entirely to showcasing the talents of psychology students from across Kerala. Show off your music, dance, theatre, or creative writing talents and collaborate on collaborative stage performances.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden aspect-video bg-slate-100 shadow-xl border border-white"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800" 
              alt="Cultural Event Concert" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <span className="px-3 py-1 rounded-full bg-[#F1D10A]/20 text-[#F1D10A] text-[10px] font-bold tracking-wider uppercase border border-[#F1D10A]/30">
                July 4th Evening
              </span>
              <h4 className="font-display font-black text-2xl text-white mt-3 leading-tight">Campfire Acoustics & Dinner</h4>
              <p className="text-white/80 text-xs font-sans mt-1">Join the community after the sessions end</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
