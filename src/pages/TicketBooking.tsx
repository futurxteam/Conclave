import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { IoLocationOutline, IoArrowForward } from 'react-icons/io5';
import { FaUsers, FaCircleCheck } from 'react-icons/fa6';

type TicketType = 'student' | 'professional' | null;

const TICKETS = {
  student: {
    id: 'student',
    title: 'Early Bird Pass',
    price: 1500,
    for: 'Psychology Students & Researchers',
    features: ['2-Day Conclave Access', 'KPSA Launch Ceremony Entrance', 'Participation Certificate', 'Meeting Expertise', 'All Specialized Workshops'],
    color: 'text-[#2451A6]',
    bgHover: 'hover:bg-[#2451A6]',
    borderActive: 'border-[#2451A6]'
  },
  professional: {
    id: 'professional',
    title: 'Normal Pass',
    price: 2000,
    for: 'Educators & Professionals',
    features: ['2-Day Conclave Access', 'KPSA Launch Ceremony Entrance', 'All Specialized Workshops', 'Accredited Certificate'],
    color: 'text-[#169857]',
    bgHover: 'hover:bg-[#169857]',
    borderActive: 'border-[#169857]'
  }
};

export function TicketBooking() {
  const [selectedTicket, setSelectedTicket] = useState<TicketType>(null);
  const [isAfterJuly5, setIsAfterJuly5] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const checkTime = () => {
      const targetDate = new Date('2026-07-05T00:00:00+05:30');
      const now = new Date();
      setIsAfterJuly5(now >= targetDate);
    };

    checkTime();
    const interval = setInterval(checkTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const isStudentLocked = isAfterJuly5;
  const isProfessionalLocked = !isAfterJuly5;

  // Auto-deselect if the pass becomes locked
  useEffect(() => {
    if (selectedTicket === 'student' && isStudentLocked) {
      setSelectedTicket(null);
    } else if (selectedTicket === 'professional' && isProfessionalLocked) {
      setSelectedTicket(null);
    }
  }, [isStudentLocked, isProfessionalLocked, selectedTicket]);

  const handleTicketSelect = (id: TicketType) => {
    if (id === 'student' && isStudentLocked) return;
    if (id === 'professional' && isProfessionalLocked) return;
    setSelectedTicket(id);
  };

  const handleContinueRegistration = () => {
    window.open("https://forms.gle/6Ad6VbGjJ1sxWJTD9", "_blank");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50/50">
      {/* Background gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2451A6]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E0B6CF]/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* HERO SECTION */}
        <div className="text-center mb-16 pt-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/60 text-[#2451A6] font-sans font-bold text-xs mb-6 shadow-sm uppercase tracking-widest"
          >
            🎟 MANO Registration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4"
          >
            Reserve Your Seat
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-slate-600 text-lg font-medium mb-8"
          >
            Join MANO: Kerala Psychology Conclave 2026
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 text-slate-700 font-bold bg-white/60 px-5 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm">
              <MdOutlineCalendarMonth size={16} className="text-[#F74A1D]" />
              July 18 & 19, 2026
            </div>
            <a
              href="https://maps.google.com/?q=Sereniche+Academy+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-700 font-bold bg-white/60 px-5 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              <IoLocationOutline size={16} className="text-[#169857]" />
              Sereniche Academy
            </a>
          </motion.div>
        </div>

        {/* STEP 1: SELECT YOUR EXPERIENCE */}
        <section id="select-ticket" className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-800 text-center">Select Your Pass</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 items-stretch">

            {/* Early Bird Pass */}
            <div
              onClick={() => handleTicketSelect('student')}
              className={`bg-gradient-to-br from-[#0d142a] via-[#122247] to-[#0d142a] border-2 rounded-[2rem] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300 ${isStudentLocked
                  ? 'opacity-40 border-white/5 shadow-sm cursor-not-allowed'
                  : `cursor-pointer group hover:-translate-y-1 hover:shadow-xl ${selectedTicket === 'student'
                    ? 'border-[#2451A6] shadow-[0_15px_40px_-15px_rgba(36,81,166,0.3)] ring-4 ring-[#2451A6]/10'
                    : 'border-white/10 shadow-sm'
                  }`
                }`}
            >
              <div>
                {isStudentLocked ? (
                  <div className="absolute top-0 right-0 bg-red-950/80 text-red-400 px-4 py-1.5 rounded-bl-xl text-[10px] font-bold tracking-widest uppercase border-l border-b border-red-800/30 shadow-sm">
                    Closed
                  </div>
                ) : (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#F74A1D] to-[#F4D313] text-white px-4 py-1.5 rounded-bl-xl text-[10px] font-bold tracking-widest uppercase shadow-sm">
                    Till July 5
                  </div>
                )}
                <h3 className="font-display font-black text-xl text-white mb-1 mt-2">{TICKETS.student.title}</h3>
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Ideal For: Psychology Students</p>

                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="text-4xl font-black text-[#3b82f6]">₹1500</span>
                  <span className="text-xs font-bold text-white/40">/ person</span>
                </div>

                {/* Group Discount Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#3b82f6] text-[11px] font-bold uppercase tracking-wider mb-4">
                  <FaUsers size={12} /> Group Offer Available
                </div>

                {/* Group Offers Info */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 space-y-2 text-xs font-semibold text-white/90">
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>Group Offer</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg border border-white/5 bg-white/5 text-white/80">
                    <span className="flex items-center gap-1 font-bold">
                      10+ Participants
                    </span>
                    <span className="font-extrabold text-[#169857]">₹1300 <span className="text-[10px] font-normal text-white/40">each</span></span>
                  </div>
                  <p className="text-[10px] text-white/40 font-medium leading-normal text-center italic">
                    Perfect for college groups and psychology departments.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {TICKETS.student.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-white/70 font-medium text-sm">
                      <FaCircleCheck size={16} className="text-[#3b82f6] shrink-0 mt-0.5" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                disabled={isStudentLocked}
                className={`w-full py-3.5 rounded-full font-bold transition-all duration-300 ${isStudentLocked
                    ? 'bg-white/5 border border-white/5 text-white/30 cursor-not-allowed'
                    : selectedTicket === 'student'
                      ? 'bg-gradient-to-r from-[#2451A6] to-[#3b82f6] text-white shadow-md'
                      : 'bg-white/5 border border-white/10 text-white group-hover:bg-gradient-to-r group-hover:from-[#2451A6] group-hover:to-[#3b82f6]'
                  }`}
              >
                {isStudentLocked ? 'Closed' : selectedTicket === 'student' ? 'Selected' : 'Select Pass'}
              </button>
            </div>

            {/* Normal Pass */}
            <div
              onClick={() => handleTicketSelect('professional')}
              className={`bg-gradient-to-br from-[#151206] via-[#2a240c] to-[#151206] border-2 rounded-[2rem] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300 ${isProfessionalLocked
                  ? 'opacity-40 border-white/5 shadow-sm cursor-not-allowed'
                  : `cursor-pointer group hover:-translate-y-1 hover:shadow-xl ${selectedTicket === 'professional'
                    ? 'border-[#F4D313] shadow-[0_15px_40px_-15px_rgba(244,211,19,0.3)] ring-4 ring-[#F4D313]/10'
                    : 'border-white/10 shadow-sm'
                  }`
                }`}
            >
              <div>
                {isProfessionalLocked ? (
                  <div className="absolute top-0 right-0 bg-[#2451A6]/20 text-[#3b82f6] px-4 py-1.5 rounded-bl-xl text-[10px] font-bold tracking-widest uppercase border-l border-b border-[#2451A6]/30 shadow-sm">
                    After July 5
                  </div>
                ) : (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#2451A6] to-[#E0B6CF] text-white px-4 py-1.5 rounded-bl-xl text-[10px] font-bold tracking-widest uppercase shadow-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display font-black text-xl text-white mb-1 mt-2">{TICKETS.professional.title}</h3>
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Ideal For: Educators & Professionals</p>

                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="text-4xl font-black text-[#fbbf24]">₹2000</span>
                  <span className="text-xs font-bold text-white/40">/ person</span>
                </div>

                {/* Group Discount Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#fbbf24] text-[11px] font-bold uppercase tracking-wider mb-4">
                  <FaUsers size={12} /> Group Offer Available
                </div>

                {/* Group Offers Info */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 space-y-2 text-xs font-semibold text-white/90">
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>Group Offer</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg border border-white/5 bg-white/5 text-white/80">
                    <span className="flex items-center gap-1 font-bold">
                      10+ Participants
                    </span>
                    <span className="font-extrabold text-[#169857]">₹1600 <span className="text-[10px] font-normal text-white/40">each</span></span>
                  </div>
                  <p className="text-[10px] text-white/40 font-medium leading-normal text-center italic">
                    Perfect for college groups and psychology departments.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {TICKETS.professional.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-white/70 font-medium text-sm">
                      <FaCircleCheck size={16} className="text-[#fbbf24] shrink-0 mt-0.5" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                disabled={isProfessionalLocked}
                className={`w-full py-3.5 rounded-full font-bold transition-all duration-300 ${isProfessionalLocked
                    ? 'bg-white/5 border border-white/5 text-white/30 cursor-not-allowed'
                    : selectedTicket === 'professional'
                      ? 'bg-gradient-to-r from-[#F4D313] to-[#fbbf24] text-slate-900 font-extrabold shadow-md'
                      : 'bg-white/5 border border-white/10 text-white group-hover:bg-gradient-to-r group-hover:from-[#F4D313] group-hover:to-[#fbbf24] group-hover:text-slate-900'
                  }`}
              >
                {isProfessionalLocked ? 'After July 5' : selectedTicket === 'professional' ? 'Selected' : 'Select'}
              </button>
            </div>

          </div>
        </section>

        {/* STEP 2: REGISTRATION CTA */}
        <AnimatePresence>
          {selectedTicket && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
              className="mt-16 flex flex-col items-center justify-center text-center px-4"
            >
              <p className="text-sm font-semibold text-slate-500 mb-5 tracking-wide uppercase">
                You've selected the <span className="font-extrabold text-slate-800">{selectedTicket === 'student' ? 'Early Bird Pass' : 'Normal Pass'}</span>
              </p>
              <motion.button
                onClick={handleContinueRegistration}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto min-w-[280px] py-5 px-10 rounded-full font-display font-black text-lg text-white bg-gradient-to-r from-[#2451A6] via-[#169857] to-[#F74A1D] hover:shadow-[0_20px_40px_rgba(36,81,166,0.35)] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl cursor-pointer group"
              >
                <span>Continue Registration →</span>
              </motion.button>
              <p className="text-xs font-semibold text-slate-400 mt-4 flex items-center gap-1.5 justify-center">
                🔒 Opens Google Form in a new tab to complete registration
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center max-w-4xl mx-auto bg-gradient-to-br from-[#0d142a] via-[#122247] to-[#0d142a] backdrop-blur-xl rounded-[3rem] p-12 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] text-white"
        >
          <h2 className="font-display font-black text-4xl text-white mb-4">Ready To Join?</h2>
          <p className="font-sans text-xl font-medium text-white/70 mb-8 max-w-2xl mx-auto">
            Reserve your ticket and become part of Kerala's leading psychology gathering.
          </p>
          <button
            onClick={() => window.scrollTo({ top: (document.getElementById('select-ticket')?.offsetTop || 0) - 100, behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#2451A6] to-[#3b82f6] hover:from-[#1d3f80] hover:to-[#2563eb] transition-all duration-300 shadow-[0_10px_25px_rgba(36,81,166,0.3)] text-lg"
          >
            Select Your Pass
          </button>
        </motion.div>

      </div>
    </div>
  );
}
