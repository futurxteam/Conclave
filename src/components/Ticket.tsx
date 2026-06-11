import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Ticket as TicketIcon, ArrowRight, Sparkles } from 'lucide-react';

export function Ticket() {
  return (
    <section id="register" className="py-24 sm:py-32 bg-[#fafbfc] relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-[#2551A4]/5 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-[#D7AEC8]/8 rounded-full blur-[130px] pointer-events-none translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
          className="relative max-w-4xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#0d142a] via-[#111d3a] to-[#0d142a] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/5 text-center"
        >
          {/* Internal glow orbs */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#2551A4]/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#149257]/12 rounded-full blur-[80px] pointer-events-none" />
          
          {/* Sparkle decoration */}
          <div className="absolute top-6 right-8 opacity-10 pointer-events-none">
            <Sparkles size={72} />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#D7AEC8] text-xs font-bold uppercase tracking-widest mb-6">
              <TicketIcon size={14} className="text-[#F1D10A]" />
              Conclave Registration
            </span>

            {/* Title */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5 tracking-tight max-w-2xl">
              Ready to Join us at MANO?
            </h2>

            {/* Description */}
            <p className="font-sans text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              Reserve your seat today and become part of Kerala's largest psychology student gathering. Experience two days of learning, networking, and career growth.
            </p>

            {/* Single CTA Button */}
            <Link
              to="/ticket-booking"
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#2551A4] to-[#D7AEC8] hover:from-[#1d428a] hover:to-[#c899b7] text-white font-bold text-base px-10 py-5 rounded-full shadow-xl hover:shadow-[0_20px_40px_rgba(37,81,164,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Reserve Your Seat
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
