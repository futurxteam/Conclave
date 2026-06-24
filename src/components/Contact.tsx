import { motion } from 'motion/react';
import { HiSparkles } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCallOutline, IoArrowForward } from 'react-icons/io5';


const contactInfo = [
  {
    title: 'Email',
    value: 'info@keralapsychologyconclave.com',
    desc: 'Organizing committee direct support',
    Icon: MdOutlineEmail,
    color: '#2451A6',
    bg: 'rgba(36, 81, 166, 0.05)',
    glow: 'rgba(36, 81, 166, 0.15)',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=info@keralapsychologyconclave.com'
  },
  {
    title: 'Phone',
    value: '+91 95676 70993',
    desc: 'Inquiries, registration & support',
    Icon: IoCallOutline,
    color: '#169857',
    bg: 'rgba(22, 152, 87, 0.05)',
    glow: 'rgba(22, 152, 87, 0.15)',
    href: 'tel:+919567670993'
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#2451A6]/5 rounded-full blur-[130px] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#E0B6CF]/8 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 text-[#2451A6] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(36,81,166,0.03)]">
            <MdOutlineEmail size={14} className="text-[#2451A6]" />
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
            const contactThemes = [
              {
                bg: 'from-[#0d142a] via-[#122247] to-[#0d142a]',
                border: 'border-white/10 group-hover:border-[#2451A6]/30',
                shadow: 'hover:shadow-[0_15px_35px_rgba(36,81,166,0.2)]',
                iconColor: 'text-[#3b82f6]',
                accent: 'text-[#3b82f6]'
              },
              {
                bg: 'from-[#07130d] via-[#0f291a] to-[#07130d]',
                border: 'border-white/10 group-hover:border-[#169857]/30',
                shadow: 'hover:shadow-[0_15px_35px_rgba(22,152,87,0.2)]',
                iconColor: 'text-[#10b981]',
                accent: 'text-[#10b981]'
              }
            ];
            const theme = contactThemes[idx % contactThemes.length];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 60 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className={`group bg-gradient-to-br ${theme.bg} ${theme.border} ${theme.shadow} p-8 sm:p-10 rounded-[2.25rem] border shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all flex flex-col justify-between min-h-[260px] text-left cursor-pointer`}
                onClick={() => {
                  if (card.href.startsWith('#')) {
                    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
                  } else if (card.href.startsWith('http')) {
                    window.open(card.href, '_blank');
                  } else {
                    window.location.href = card.href;
                  }
                }}
              >
                <div>
                  {/* Icon + Index */}
                  <div className="flex justify-between items-center mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-white/10 bg-white/5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                    >
                      <div className={`transition-transform duration-500 group-hover:rotate-[12deg] ${theme.iconColor}`}>
                        <card.Icon size={24} />
                      </div>
                    </div>
                    <span className="text-white/20 group-hover:text-[#E0B6CF]/40 font-display text-sm font-bold tracking-wider transition-colors">
                      {card.title.toUpperCase()}
                    </span>
                  </div>

                  {/* Value */}
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-2 leading-snug break-words group-hover:text-[#E0B6CF] transition-colors duration-300">
                    {card.value}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="border-t border-white/10 mt-6 pt-4 flex items-center justify-between text-xs font-bold text-white/40 group-hover:text-white/80 transition-colors duration-300">
                  <span>Contact Route</span>
                  <span className={`flex items-center gap-1 transition-colors ${theme.accent}`}>
                    Connect <IoArrowForward size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>



        {/* Premium CTA Banner "Ready to Join MANO?" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-[#07130d] via-[#0f291a] to-[#07130d] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border border-white/10 text-left"
        >
          {/* Internal glow orbs */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#169857]/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#10b981]/12 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-[#F4D313]/5 rounded-full blur-[60px] pointer-events-none" />

          {/* Decorative sparkle */}
          <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
            <HiSparkles size={72} />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Left: Text content */}
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#10b981] text-xs font-bold uppercase tracking-widest mb-5">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
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
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#169857] to-[#10b981] hover:from-[#107040] hover:to-[#059669] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-[0_15px_35px_rgba(22,152,87,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 shrink-0"
            >
              Reserve Your Seat
              <IoArrowForward size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
