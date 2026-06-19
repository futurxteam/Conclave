import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { IoLocationOutline, IoArrowForward } from 'react-icons/io5';
import { FaUsers, FaPlus, FaMinus, FaBed, FaCircleCheck, FaShieldHalved, FaChalkboardUser } from 'react-icons/fa6';
import { HiOutlineMicrophone } from 'react-icons/hi2';

type TicketType = 'student' | 'professional' | 'vip' | null;

const TICKETS = {
  student: {
    id: 'student',
    title: 'Early Bird Pass',
    price: 1500,
    for: 'Psychology Students & Researchers',
    features: ['2-Day Conclave Access', 'Hostel Accommodation Option', 'KPSA Launch Ceremony Entrance', 'Participation Certificate', 'Meeting Expertise', 'All Specialized Workshops'],
    color: 'text-[#2451A6]',
    bgHover: 'hover:bg-[#2451A6]',
    borderActive: 'border-[#2451A6]'
  },
  professional: {
    id: 'professional',
    title: 'Normal Pass',
    price: 2000,
    for: 'Educators & Professionals',
    features: ['2-Day Conclave Access', 'Hostel/Guest House Support', 'KPSA Launch Ceremony Entrance', 'All Specialized Workshops', 'Accredited Certificate'],
    color: 'text-[#169857]',
    bgHover: 'hover:bg-[#169857]',
    borderActive: 'border-[#169857]'
  },
  vip: {
    id: 'vip',
    title: 'VIP ADMISSION',
    price: 12000,
    for: 'Special Guests & Clinicians',
    features: ['Premium Front Row Seating', 'Speaker Meet & Greet Dinner', 'Hostel/Guest House Support', 'All Specialized Workshops', 'Accredited Certificate', 'VIP Welcome Kit'],
    color: 'text-[#F4D313]',
    bgHover: 'hover:bg-[#F4D313]',
    borderActive: 'border-[#F4D313]'
  }
};

const getPerTicketPrice = (type: TicketType, qty: number): number => {
  if (!type) return 0;
  if (type === 'student') {
    if (qty >= 10) return 1300;
    return 1500;
  }
  if (type === 'professional') {
    if (qty >= 10) return 1600;
    return 2000;
  }
  return TICKETS[type as keyof typeof TICKETS]?.price || 0;
};

// --- Accommodation Add-on Card ---
interface AccommodationAddonProps {
  selected: boolean;
  onToggle: (e: React.MouseEvent) => void;
}

function AccommodationAddon({ selected, onToggle }: AccommodationAddonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.97 }}
      transition={{ duration: 0.3, type: 'spring', bounce: 0.3 }}
    >
      <button
        type="button"
        onClick={onToggle}
        className={`w-full text-left transition-all duration-300 rounded-2xl border p-4 backdrop-blur-xl group
          ${selected
            ? 'bg-gradient-to-br from-[#07130d] via-[#0f291a] to-[#07130d] border-[#169857] shadow-[0_6px_24px_-8px_rgba(22,152,87,0.4)]'
            : 'bg-[#0d142a]/40 border-white/10 text-white/80 hover:border-[#169857]/40 hover:bg-[#07130d]/30 hover:shadow-md'
          }`}
      >
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {/* Bed icon circle */}
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300
              ${selected ? 'bg-emerald-500 text-white shadow-md border border-emerald-400' : 'bg-white/5 border border-white/10 text-white/50 group-hover:bg-white/10 group-hover:text-emerald-400'}`}>
              <FaBed size={17} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Need Accommodation?</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`font-bold text-sm transition-colors duration-200 ${selected ? 'text-[#10b981]' : 'text-white'}`}>
                  🏨 Hostel &amp; Accommodation
                </span>
                <span className={`font-black text-sm ${selected ? 'text-[#34d399]' : 'text-white/50'}`}>+₹250</span>
              </div>
              <p className="text-xs text-white/40 font-medium mt-0.5 leading-snug">
                Add hostel / guest-house for the duration of the conclave.
              </p>
            </div>
          </div>

          {/* Toggle */}
          <div className={`w-11 h-6 rounded-full flex items-center shrink-0 mt-1 transition-all duration-300 relative
            ${selected ? 'bg-emerald-500 shadow-md' : 'bg-white/10 border border-white/10'}`}>
            <motion.div
              animate={{ x: selected ? 20 : 2 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="w-5 h-5 rounded-full bg-white shadow-sm absolute"
            />
          </div>
        </div>

        {/* Per-participant label */}
        <div className="mt-2.5 ml-12 flex items-center gap-2">
          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full transition-all duration-300
            ${selected
              ? 'bg-[#169857]/20 text-[#10b981] border border-emerald-500/20'
              : 'bg-white/5 text-white/50 border border-white/10 group-hover:bg-white/10 group-hover:text-[#10b981] group-hover:border-emerald-500/20'
            }`}>
            ₹250 per participant
          </span>
          {selected && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[11px] font-bold text-emerald-600 flex items-center gap-1"
            >
              ✓ Added
            </motion.span>
          )}
        </div>
      </button>
    </motion.div>
  );
}

export function TicketBooking() {
  const [selectedTicket, setSelectedTicket] = useState<TicketType>(null);
  const [quantity, setQuantity] = useState(1);
  const [step, setStep] = useState(1);
  const [addAccommodation, setAddAccommodation] = useState(false);

  const ACCOMMODATION_PRICE = 250;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTicketSelect = (id: typeof selectedTicket) => {
    if (selectedTicket === id) {
      setStep(2);
      window.scrollTo({ top: (document.getElementById('personal-details')?.offsetTop || 0) - 100, behavior: 'smooth' });
    } else {
      setSelectedTicket(id);
      setQuantity(1);
      setAddAccommodation(false);
    }
  };


  const getSubtotal = () => {
    if (!selectedTicket) return 0;
    return TICKETS[selectedTicket as keyof typeof TICKETS].price * quantity;
  };

  const getGroupDiscount = () => {
    if (!selectedTicket) return 0;
    const basePrice = TICKETS[selectedTicket as keyof typeof TICKETS].price;
    const discountedPrice = getPerTicketPrice(selectedTicket, quantity);
    return (basePrice - discountedPrice) * quantity;
  };

  const getAccommodationTotal = () => {
    if (!addAccommodation) return 0;
    return ACCOMMODATION_PRICE * quantity;
  };

  const getTotal = () => {
    return getSubtotal() - getGroupDiscount() + getAccommodationTotal();
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
            <div className="flex items-center gap-2 text-slate-700 font-bold bg-white/60 px-5 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm">
              <IoLocationOutline size={16} className="text-[#169857]" />
              KMM Edu Hub
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">

          {/* MAIN CONTENT (LEFT) */}
          <div className="lg:col-span-2 space-y-12">

            {/* STEP 1: SELECT YOUR EXPERIENCE */}
            <section id="select-ticket">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-[#2451A6] text-white' : 'bg-slate-200 text-slate-500'}`}>1</div>
                <h2 className="font-display font-black text-2xl text-slate-800">Select Your Experience</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">

                {/* Early Bird Offer */}
                <div className="flex flex-col gap-3">
                  <div
                    onClick={() => handleTicketSelect('student')}
                    className={`bg-gradient-to-br from-[#0d142a] via-[#122247] to-[#0d142a] border-2 rounded-[2rem] p-6 sm:p-8 cursor-pointer transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl relative overflow-hidden ${selectedTicket === 'student' ? 'border-[#2451A6] shadow-[0_15px_40px_-15px_rgba(36,81,166,0.3)] ring-4 ring-[#2451A6]/10' : 'border-white/10 shadow-sm'}`}
                  >
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-[#F74A1D] to-[#F4D313] text-white px-4 py-1.5 rounded-bl-xl text-[10px] font-bold tracking-widest uppercase shadow-sm">
                      Till July 5
                    </div>
                    <h3 className="font-display font-black text-xl text-white mb-1 mt-2">{TICKETS.student.title}</h3>
                    <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Ideal For: Psychology Students</p>

                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-4xl font-black text-[#3b82f6]">₹1500</span>
                      <span className="text-xs font-bold text-white/40">/ person</span>
                    </div>

                    {/* Group Discount Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#3b82f6] text-[11px] font-bold uppercase tracking-wider mb-4">
                      <FaUsers size={12} /> Group Offer Available
                    </div>

                    {/* Group Offers Info */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 space-y-3 text-xs font-semibold text-white/90">
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1 flex items-center justify-between">
                        <span>Group Offer</span>
                        {quantity >= 10 && selectedTicket === 'student' && (
                          <span className="bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Active
                          </span>
                        )}
                      </div>

                      <div className={`flex items-center justify-between p-2 rounded-lg border-2 border-dashed transition-all ${quantity >= 10 && selectedTicket === 'student' ? 'bg-[#169857]/20 border-emerald-500 text-[#169857]' : 'bg-white/5 border-white/10 text-white/80'}`}>
                        <span className="flex items-center gap-1 font-bold">
                          10+ Participants
                          <span className="bg-emerald-500 text-white text-[8px] font-extrabold px-1.5 py-0.2 rounded uppercase tracking-wider">
                            Best Value
                          </span>
                        </span>
                        <span className="font-extrabold text-[#169857]">₹1300 <span className="text-[10px] font-normal text-white/40">each</span></span>
                      </div>

                      <p className="text-[10px] text-white/40 font-medium leading-normal text-center italic">
                        Perfect for college groups and psychology departments.
                      </p>

                      {/* Dropdown Selection Box */}
                      <div className="border-t border-white/10 pt-3 flex items-center justify-between gap-2" onClick={(e) => e.stopPropagation()}>
                        <span className="text-white/50 font-bold text-[11px] uppercase tracking-wider">Select Group Size:</span>
                        <select
                          value={selectedTicket === 'student' && quantity >= 10 ? quantity : ''}
                          onChange={(e) => {
                            setSelectedTicket('student');
                            if (e.target.value) {
                              setQuantity(parseInt(e.target.value));
                            }
                          }}
                          className="px-2.5 py-1.5 rounded-lg border border-white/10 bg-[#0d142a] text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-[#2451A6]/20 focus:border-[#2451A6] transition-all cursor-pointer shadow-sm hover:border-white/20"
                        >
                          <option value="">Select Group Size</option>
                          {Array.from({ length: 41 }, (_, i) => i + 10).map((val) => (
                            <option key={val} value={val}>
                              {val} Participants (₹1300 each)
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                      {TICKETS.student.features.filter(f => !f.toLowerCase().includes('hostel') && !f.toLowerCase().includes('accommodation')).map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-white/70 font-medium text-sm">
                          <FaCircleCheck size={16} className="text-[#3b82f6] shrink-0 mt-0.5" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <button
                      className={`w-full py-3.5 rounded-full font-bold transition-all duration-300 ${selectedTicket === 'student' ? 'bg-gradient-to-r from-[#2451A6] to-[#3b82f6] text-white shadow-md' : 'bg-white/5 border border-white/10 text-white group-hover:bg-gradient-to-r group-hover:from-[#2451A6] group-hover:to-[#3b82f6]'}`}
                    >
                      {selectedTicket === 'student' ? 'Selected' : 'Select Pass'}
                    </button>
                  </div>

                  {/* Accommodation Add-on for Early Bird */}
                  {selectedTicket === 'student' && (
                    <AccommodationAddon
                      selected={addAccommodation}
                      onToggle={(e) => { e.stopPropagation(); setAddAccommodation(prev => !prev); }}
                    />
                  )}
                </div>

                {/* Normal Pass */}
                <div className="flex flex-col gap-3">
                  <div
                    onClick={() => handleTicketSelect('professional')}
                    className={`bg-gradient-to-br from-[#151206] via-[#2a240c] to-[#151206] border-2 rounded-[2rem] p-6 sm:p-8 cursor-pointer transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl relative overflow-hidden ${selectedTicket === 'professional' ? 'border-[#F4D313] shadow-[0_15px_40px_-15px_rgba(244,211,19,0.3)] ring-4 ring-[#F4D313]/10' : 'border-white/10 shadow-sm'}`}
                  >
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-[#2451A6] to-[#E0B6CF] text-white px-4 py-1.5 rounded-bl-xl text-[10px] font-bold tracking-widest uppercase shadow-sm">
                      Most Popular
                    </div>
                    <h3 className="font-display font-black text-xl text-white mb-1 mt-2">{TICKETS.professional.title}</h3>
                    <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Ideal For: Educators & Professionals</p>

                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-4xl font-black text-[#fbbf24]">₹2000</span>
                      <span className="text-xs font-bold text-white/40">/ person</span>
                    </div>

                    {/* Group Discount Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#fbbf24] text-[11px] font-bold uppercase tracking-wider mb-4">
                      <FaUsers size={12} /> Group Offer Available
                    </div>

                    {/* Group Offers Info */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 space-y-3 text-xs font-semibold text-white/90">
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1 flex items-center justify-between">
                        <span>Group Offer</span>
                        {quantity >= 10 && selectedTicket === 'professional' && (
                          <span className="bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Active
                          </span>
                        )}
                      </div>

                      <div className={`flex items-center justify-between p-2 rounded-lg border-2 border-dashed transition-all ${quantity >= 10 && selectedTicket === 'professional' ? 'bg-[#169857]/20 border-emerald-500 text-[#169857]' : 'bg-white/5 border-white/10 text-white/80'}`}>
                        <span className="flex items-center gap-1 font-bold">
                          10+ Participants
                          <span className="bg-emerald-500 text-white text-[8px] font-extrabold px-1.5 py-0.2 rounded uppercase tracking-wider">
                            Best Value
                          </span>
                        </span>
                        <span className="font-extrabold text-[#169857]">₹1600 <span className="text-[10px] font-normal text-white/40">each</span></span>
                      </div>

                      <p className="text-[10px] text-white/40 font-medium leading-normal text-center italic">
                        Perfect for college groups and psychology departments.
                      </p>

                      {/* Dropdown Selection Box */}
                      <div className="border-t border-white/10 pt-3 flex items-center justify-between gap-2" onClick={(e) => e.stopPropagation()}>
                        <span className="text-white/50 font-bold text-[11px] uppercase tracking-wider">Select Group Size:</span>
                        <select
                          value={selectedTicket === 'professional' && quantity >= 10 ? quantity : ''}
                          onChange={(e) => {
                            setSelectedTicket('professional');
                            if (e.target.value) {
                              setQuantity(parseInt(e.target.value));
                            }
                          }}
                          className="px-2.5 py-1.5 rounded-lg border border-white/10 bg-[#151206] text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-[#F4D313]/20 focus:border-[#F4D313] transition-all cursor-pointer shadow-sm hover:border-white/20"
                        >
                          <option value="">Select Group Size</option>
                          {Array.from({ length: 41 }, (_, i) => i + 10).map((val) => (
                            <option key={val} value={val}>
                              {val} Participants (₹1600 each)
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                      {TICKETS.professional.features.filter(f => !f.toLowerCase().includes('hostel') && !f.toLowerCase().includes('accommodation') && !f.toLowerCase().includes('guest')).map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-white/70 font-medium text-sm">
                          <FaCircleCheck size={16} className="text-[#fbbf24] shrink-0 mt-0.5" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <button
                      className={`w-full py-3.5 rounded-full font-bold transition-all duration-300 ${selectedTicket === 'professional' ? 'bg-gradient-to-r from-[#F4D313] to-[#fbbf24] text-slate-900 font-extrabold shadow-md' : 'bg-white/5 border border-white/10 text-white group-hover:bg-gradient-to-r group-hover:from-[#F4D313] group-hover:to-[#fbbf24] group-hover:text-slate-900'}`}
                    >
                      {selectedTicket === 'professional' ? 'Selected' : 'Select'}
                    </button>
                  </div>

                  {/* Accommodation Add-on for Normal Pass */}
                  {selectedTicket === 'professional' && (
                    <AccommodationAddon
                      selected={addAccommodation}
                      onToggle={(e) => { e.stopPropagation(); setAddAccommodation(prev => !prev); }}
                    />
                  )}
                </div>

              </div>
            </section>

            {/* STEP 2: PERSONAL DETAILS */}
            <AnimatePresence>
              {selectedTicket && (
                <motion.section
                  id="personal-details"
                  initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                  transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
                  className="pt-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-gradient-to-r from-[#169857] to-[#10b981] text-white shadow-sm`}>2</div>
                    <h2 className="font-display font-black text-2xl text-slate-800">Personal Details</h2>
                  </div>

                  <div className="bg-gradient-to-br from-[#07130d] via-[#0f291a] to-[#07130d] text-white border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-sm">
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-sans text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                          <input type="text" className="w-full px-5 py-4 rounded-xl bg-[#0d142a] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#169857]/20 focus:border-[#169857] transition-all font-medium text-white shadow-sm" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="font-sans text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                          <input type="email" className="w-full px-5 py-4 rounded-xl bg-[#0d142a] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#169857]/20 focus:border-[#169857] transition-all font-medium text-white shadow-sm" placeholder="john@example.com" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-sans text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Phone Number</label>
                          <input type="tel" className="w-full px-5 py-4 rounded-xl bg-[#0d142a] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#169857]/20 focus:border-[#169857] transition-all font-medium text-white shadow-sm" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-2">
                          <label className="font-sans text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Institution / Organization</label>
                          <input type="text" className="w-full px-5 py-4 rounded-xl bg-[#0d142a] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#169857]/20 focus:border-[#169857] transition-all font-medium text-white shadow-sm" placeholder="University of Kerala" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-sans text-xs font-bold text-white/40 uppercase tracking-widest ml-1">City</label>
                        <input type="text" className="w-full px-5 py-4 rounded-xl bg-[#0d142a] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#169857]/20 focus:border-[#169857] transition-all font-medium text-white shadow-sm" placeholder="Kochi" />
                      </div>

                      <div className="pt-6">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setStep(3);
                            window.scrollTo({ top: (document.getElementById('review-booking')?.offsetTop || 0) - 100, behavior: 'smooth' });
                          }}
                          className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#169857] to-[#10b981] hover:from-[#107040] hover:to-[#059669] transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                        >
                          Continue to Review
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            {/* STEP 3: REVIEW & PAYMENT */}
            <AnimatePresence>
              {selectedTicket && step >= 3 && (
                <motion.section
                  id="review-booking"
                  initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                  transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
                  className="pt-8 mb-12"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-gradient-to-r from-[#F74A1D] to-[#ef4444] text-white shadow-sm`}>3</div>
                    <h2 className="font-display font-black text-2xl text-slate-800">Review & Payment</h2>
                  </div>

                  <div className="bg-gradient-to-br from-[#1a0c0a] via-[#351811] to-[#1a0c0a] text-white border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-[0_15px_40px_rgba(247,74,29,0.15)]">
                    <h3 className="font-display font-bold text-xl text-white mb-6">Secure Payment</h3>

                    {/* Payment Form Mockup UI */}
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['UPI', 'Google Pay', 'PhonePe', 'Paytm', 'Debit Card', 'Credit Card'].map((method) => (
                          <span key={method} className="text-xs font-bold text-white/80 bg-white/5 px-4 py-2 rounded-lg border border-white/10 shadow-sm cursor-pointer hover:border-[#F74A1D] hover:bg-white/10 transition-colors">
                            {method}
                          </span>
                        ))}
                      </div>

                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                        <div className="space-y-2">
                          <label className="font-sans text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Card Number (Mock)</label>
                          <input type="text" className="w-full px-5 py-4 rounded-xl bg-[#0d142a] border border-white/10 focus:outline-none transition-all font-mono text-white" placeholder="0000 0000 0000 0000" disabled />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="font-sans text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Expiry</label>
                            <input type="text" className="w-full px-5 py-4 rounded-xl bg-[#0d142a] border border-white/10 focus:outline-none transition-all font-mono text-white" placeholder="MM/YY" disabled />
                          </div>
                          <div className="space-y-2">
                            <label className="font-sans text-xs font-bold text-white/40 uppercase tracking-widest ml-1">CVV</label>
                            <input type="text" className="w-full px-5 py-4 rounded-xl bg-[#0d142a] border border-white/10 focus:outline-none transition-all font-mono text-white" placeholder="123" disabled />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <div className="flex items-center gap-2 text-white/60 font-medium text-sm">
                            <FaShieldHalved size={20} className="text-[#169857]" />
                            Secure 256-bit SSL encryption
                          </div>

                          <button className="w-full sm:w-auto py-4 px-8 rounded-full font-bold text-white bg-gradient-to-r from-[#F74A1D] to-[#ef4444] hover:from-[#c23612] hover:to-[#dc2626] transition-all duration-300 shadow-[0_10px_20px_rgba(247,74,29,0.3)] flex items-center justify-center gap-2 text-lg">
                            Pay ₹{getTotal().toLocaleString('en-IN')} Now <IoArrowForward size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

          </div>

          {/* SIDEBAR (RIGHT) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">

              {/* BOOKING SUMMARY */}
              <AnimatePresence>
                {selectedTicket && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-[#0d142a] via-[#122247] to-[#0d142a] text-white border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
                  >
                    <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                      <h3 className="font-display font-black text-xl text-white">Booking Summary</h3>
                      {quantity >= 10 && (
                        <span className="bg-gradient-to-r from-emerald-500 to-[#169857] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm animate-pulse flex items-center gap-1">
                          🎉 Discount Active
                        </span>
                      )}
                    </div>

                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-white mb-1">{TICKETS[selectedTicket as keyof typeof TICKETS].title}</p>
                          <p className="text-sm font-medium text-white/60">₹{TICKETS[selectedTicket as keyof typeof TICKETS].price} per ticket</p>
                        </div>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-2 py-1">
                          <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          >
                            <FaMinus size={12} />
                          </button>
                          <span className="font-bold text-sm min-w-[12px] text-center">{quantity}</span>
                          <button
                            onClick={() => setQuantity(Math.min(50, quantity + 1))}
                            className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>
                      </div>

                      <div className="h-px w-full bg-white/10" />

                      <div className="space-y-3 text-sm font-medium text-white/70">
                        <div className="flex justify-between items-center">
                          <span>Subtotal ({quantity} {quantity > 1 ? 'tickets' : 'ticket'})</span>
                          <span className="font-bold text-white">₹{getSubtotal()}</span>
                        </div>

                        {getGroupDiscount() > 0 && (
                          <div className="flex justify-between items-center text-emerald-400 font-semibold bg-white/5 p-2 rounded-xl border border-white/10">
                            <span className="flex items-center gap-1">
                              🏷️ Group Discount (10+ Offer)
                            </span>
                            <span className="font-bold">-₹{getGroupDiscount()}</span>
                          </div>
                        )}

                        <AnimatePresence>
                          {addAccommodation && (
                            <motion.div
                              key="accommodation-row"
                              initial={{ opacity: 0, y: -6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.2 }}
                              className="flex justify-between items-center"
                            >
                              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                                <FaBed size={13} className="shrink-0" />
                                Accommodation Option
                                {quantity > 1 && <span className="text-white/40 font-medium">×{quantity}</span>}
                              </span>
                              <span className="font-bold text-emerald-400">₹{getAccommodationTotal()}</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="h-px w-full bg-white/10" />

                      <div className="flex justify-between items-center pt-2">
                        <span className="font-bold text-white text-lg">Final Amount</span>
                        <span className="font-black text-[#3b82f6] text-3xl">₹{getTotal()}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* TRUST METRICS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-[#0d142a] via-[#111d3a] to-[#0d142a] text-white border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.2)]"
              >
                <h4 className="font-display font-bold text-white mb-6">Why Attend?</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#3b82f6] border border-white/10">
                      <FaUsers size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-white">200+ Selected Students</p>
                      <p className="text-xs font-medium text-white/50">Peer networking & team tasks</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#10b981] border border-white/10">
                      <HiOutlineMicrophone size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-white">10+ Key Speakers</p>
                      <p className="text-xs font-medium text-white/50">Top clinicians & researchers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#f87171] border border-white/10">
                      <FaChalkboardUser size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-white">20+ Panel Experts</p>
                      <p className="text-xs font-medium text-white/50">Debates across 9 distinct domains</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

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
            className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#2451A6] to-[#3b82f6] hover:from-[#1d3f80] hover:to-[#2563eb] transition-all duration-300 shadow-[0_10px_25px_rgba(36,81,166,0.3)] text-lg animate-pulse"
          >
            Complete Booking
          </button>
        </motion.div>

      </div>
    </div>
  );
}
