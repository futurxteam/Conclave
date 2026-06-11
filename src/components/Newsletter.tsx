import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glowing Backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-r from-royal/20 via-lavender/20 to-vibrant/10 rounded-[3rem] blur-3xl transform -translate-y-4" />
          
          <div className="relative bg-white/80 backdrop-blur-3xl border border-slate-200/80 rounded-[3rem] p-10 md:p-16 shadow-[0_25px_50px_-12px_rgba(37,81,164,0.1)] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-royal/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-sun/20 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content */}
            <div className="flex-1 text-center md:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-display font-bold text-xs mb-6 shadow-sm uppercase tracking-widest">
                <Mail size={14} className="text-royal" /> Updates
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-4">
                Stay in the <span className="bg-gradient-to-r from-royal to-vibrant bg-clip-text text-transparent">Loop</span>
              </h2>
              <p className="font-sans text-slate-600 text-base md:text-lg font-medium max-w-md mx-auto md:mx-0">
                Subscribe to receive exclusive announcements, speaker reveals, and early-bird ticket alerts.
              </p>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-[450px] relative z-10">
              <form className="relative flex flex-col sm:flex-row items-center gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                    <Mail size={18} className="text-slate-400" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full bg-white border border-slate-200 rounded-full pl-12 pr-5 py-4 text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all shadow-sm"
                    required
                  />
                </div>
                <button className="w-full sm:w-auto shrink-0 bg-[#2551A4] hover:bg-[#149257] text-white font-bold py-4 px-8 rounded-full shadow-md transition-colors duration-300 flex items-center justify-center gap-2 group">
                  Join <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <div className="w-full text-center md:text-left mt-4 px-2">
                <p className="text-slate-400 text-xs font-medium inline-flex items-center gap-1">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
