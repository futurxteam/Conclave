import { motion } from 'motion/react';
import { MdOutlineEmail } from 'react-icons/md';
import { IoArrowForward } from 'react-icons/io5';

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
          <div className="absolute inset-0 bg-gradient-to-r from-[#2451A6]/10 via-[#E0B6CF]/10 to-[#169857]/5 rounded-[3rem] blur-3xl transform -translate-y-4" />
          
          <div className="relative bg-gradient-to-br from-[#0d142a] via-[#122247] to-[#0d142a] text-white border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-[0_25px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#2451A6]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#F4D313]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content */}
            <div className="flex-1 text-center md:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#3b82f6] font-display font-bold text-xs mb-6 shadow-sm uppercase tracking-widest">
                <MdOutlineEmail size={14} className="text-[#3b82f6]" /> Updates
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
                Stay in the <span className="bg-gradient-to-r from-[#2451A6] to-[#3b82f6] bg-clip-text text-transparent">Loop</span>
              </h2>
              <p className="font-sans text-white/70 text-base md:text-lg font-medium max-w-md mx-auto md:mx-0">
                Subscribe to receive exclusive announcements, speaker reveals, and early-bird ticket alerts.
              </p>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-[450px] relative z-10">
              <form className="relative flex flex-col sm:flex-row items-center gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                    <MdOutlineEmail size={18} className="text-white/40" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full bg-[#0d142a] border border-white/10 rounded-full pl-12 pr-5 py-4 text-white font-medium placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2451A6]/20 focus:border-[#2451A6] transition-all shadow-sm"
                    required
                  />
                </div>
                <button className="w-full sm:w-auto shrink-0 bg-gradient-to-r from-[#2451A6] to-[#3b82f6] hover:from-[#1d3f80] hover:to-[#2563eb] text-white font-bold py-4 px-8 rounded-full shadow-md transition-colors duration-300 flex items-center justify-center gap-2 group">
                  Join <IoArrowForward size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <div className="w-full text-center md:text-left mt-4 px-2">
                <p className="text-white/40 text-xs font-medium inline-flex items-center gap-1">
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
