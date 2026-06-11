import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Sparkles, ArrowRight } from 'lucide-react';

const contactInfo = [
  {
    title: 'Email',
    value: 'info@manoconclave.com',
    desc: 'Organizing committee direct support',
    emoji: '📧',
    color: '#2551A4',
    bg: 'rgba(37, 81, 164, 0.05)',
    glow: 'rgba(37, 81, 164, 0.15)',
    href: 'mailto:info@manoconclave.com'
  },
  {
    title: 'Phone',
    value: '+91 XXXXX XXXXX',
    desc: 'Inquiries, registration & support',
    emoji: '📞',
    color: '#149257',
    bg: 'rgba(20, 146, 87, 0.05)',
    glow: 'rgba(20, 146, 87, 0.15)',
    href: 'tel:+919895012345' // Fallback real-world action or custom tel
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#2551A4]/5 rounded-full blur-[130px] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#D7AEC8]/8 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 text-[#2551A4] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(37,81,164,0.03)]">
            <Mail size={14} className="text-[#2551A4]" />
            GET IN TOUCH
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-5 leading-tight">
            Get In Touch
          </h2>

          <p className="font-sans text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Have questions about registration, accommodation, participation, or the event? We're here to help.
          </p>
        </div>

        {/* 3 Premium Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((card, idx) => {
            const isLink = card.href.startsWith('mailto:') || card.href.startsWith('tel:');
            const CardWrapper = isLink ? 'a' : 'div';
            return (
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
                className="group glass-panel p-8 sm:p-10 rounded-[2.25rem] border border-white/70 bg-white/50 shadow-[0_15px_35px_rgba(37,81,164,0.03)] hover:bg-white/90 transition-all flex flex-col justify-between min-h-[260px] text-left cursor-pointer"
                onClick={() => {
                  if (card.href.startsWith('#')) {
                    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = card.href;
                  }
                }}
              >
                <div>
                  {/* Icon + Index */}
                  <div className="flex justify-between items-center mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-slate-200/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                      style={{ backgroundColor: card.bg }}
                    >
                      <span className="transition-transform duration-500 group-hover:rotate-[12deg]">
                        {card.emoji}
                      </span>
                    </div>
                    <span className="text-slate-300 group-hover:text-slate-400 font-display text-sm font-bold tracking-wider transition-colors">
                      {card.title.toUpperCase()}
                    </span>
                  </div>

                  {/* Value */}
                  <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 mb-2 leading-snug break-words group-hover:text-[#2551A4] transition-colors duration-300">
                    {card.value}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="border-t border-slate-100 mt-6 pt-4 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors duration-300">
                  <span>Contact Route</span>
                  <span className="flex items-center gap-1 transition-colors" style={{ color: card.color }}>
                    Connect <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>



        {/* Premium CTA Banner — "Ready to Join MANO?" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0d142a] via-[#111d3a] to-[#0d142a] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/5 text-left"
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
                Conclave Registration
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-5 tracking-tight">
                Ready to Join MANO?
              </h3>
              <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
                Reserve your seat today and become part of Kerala's largest psychology student gathering.
              </p>
            </div>

            {/* Right: CTA */}
            <Link
              to="/ticket-booking"
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#2551A4] to-[#D7AEC8] hover:from-[#1d428a] hover:to-[#c899b7] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-[0_15px_35px_rgba(37,81,164,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 shrink-0"
            >
              Reserve Your Seat
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
