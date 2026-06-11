import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight, CheckCircle2, ShieldCheck, Ticket as TicketIcon,
  MapPin, Calendar, Users, Mic, Presentation, Plus, Minus
} from 'lucide-react';

type TicketType = 'student' | 'professional' | 'vip' | null;

const TICKETS = {
  student: {
    id: 'student',
    title: 'Early Bird Offer',
    price: 1500,
    for: 'Psychology Students & Researchers',
    features: ['2-Day Conclave Access', 'Hostel Accommodation Option', 'KPSA Launch Ceremony Entrance', 'Participation Certificate'],
    color: 'text-[#2551A4]',
    bgHover: 'hover:bg-[#2551A4]',
    borderActive: 'border-[#2551A4]'
  },
  professional: {
    id: 'professional',
    title: 'Normal Pass',
    price: 2000,
    for: 'Educators & Professionals',
    features: ['2-Day Conclave Access', 'Hostel/Guest House Support', 'KPSA Launch Ceremony Entrance', 'All Specialized Workshops', 'Accredited Certificate'],
    color: 'text-[#149257]',
    bgHover: 'hover:bg-[#149257]',
    borderActive: 'border-[#149257]'
  },
  vip: {
    id: 'vip',
    title: 'VIP ADMISSION',
    price: 12000,
    for: 'Special Guests & Clinicians',
    features: ['Premium Front Row Seating', 'Speaker Meet & Greet Dinner', 'Hostel/Guest House Support', 'All Specialized Workshops', 'Accredited Certificate', 'VIP Welcome Kit'],
    color: 'text-[#F1D10A]',
    bgHover: 'hover:bg-[#F1D10A]',
    borderActive: 'border-[#F1D10A]'
  }
};

export function TicketBooking() {
  const [selectedTicket, setSelectedTicket] = useState<TicketType>(null);
  const [quantity, setQuantity] = useState(1);
  const [step, setStep] = useState(1);

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
    }
  };

  const getSubtotal = () => {
    if (!selectedTicket) return 0;
    return TICKETS[selectedTicket as keyof typeof TICKETS].price * quantity;
  };

  const getGST = () => {
    return Math.round(getSubtotal() * 0.18);
  };

  const getTotal = () => {
    return getSubtotal() + getGST();
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50/50">
      {/* Background gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2551A4]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D7AEC8]/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* HERO SECTION */}
        <div className="text-center mb-16 pt-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/60 text-[#2551A4] font-sans font-bold text-xs mb-6 shadow-sm uppercase tracking-widest"
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
              <Calendar size={16} className="text-[#F74A1C]" />
              July 4 & 5, 2026
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold bg-white/60 px-5 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm">
              <MapPin size={16} className="text-[#149257]" />
              KMM College of Arts and Science
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">

          {/* MAIN CONTENT (LEFT) */}
          <div className="lg:col-span-2 space-y-12">

            {/* STEP 1: SELECT YOUR EXPERIENCE */}
            <section id="select-ticket">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-[#2551A4] text-white' : 'bg-slate-200 text-slate-500'}`}>1</div>
                <h2 className="font-display font-black text-2xl text-slate-800">Select Your Experience</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">

                {/* Early Bird Offer */}
                <div
                  onClick={() => handleTicketSelect('student')}
                  className={`bg-white/80 backdrop-blur-xl border-2 rounded-[2rem] p-6 sm:p-8 cursor-pointer transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl ${selectedTicket === 'student' ? 'border-[#2551A4] shadow-[0_15px_40px_-15px_rgba(37,81,164,0.3)] ring-4 ring-[#2551A4]/10' : 'border-slate-200 shadow-sm'}`}
                >
                  <h3 className="font-display font-black text-xl text-slate-800 mb-1">Early Bird Offer</h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Ideal For: Psychology Students</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-black text-[#2551A4]">₹1500</span>
                  </div>
                  <div className="space-y-3 mb-8 flex-1">
                    {TICKETS.student.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-slate-600 font-medium text-sm">
                        <CheckCircle2 size={16} className="text-[#149257] shrink-0 mt-0.5" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button
                    className={`w-full py-3.5 rounded-full font-bold transition-all duration-300 ${selectedTicket === 'student' ? 'bg-[#2551A4] text-white shadow-md' : 'bg-slate-100 text-slate-700 group-hover:bg-[#2551A4] group-hover:text-white'}`}
                  >
                    {selectedTicket === 'student' ? 'Selected' : 'Select Pass'}
                  </button>
                </div>

                {/* Normal Pass */}
                <div
                  onClick={() => handleTicketSelect('professional')}
                  className={`bg-white/80 backdrop-blur-xl border-2 rounded-[2rem] p-6 sm:p-8 cursor-pointer transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl relative overflow-hidden ${selectedTicket === 'professional' ? 'border-[#149257] shadow-[0_15px_40px_-15px_rgba(20,146,87,0.3)] ring-4 ring-[#149257]/10' : 'border-slate-200 shadow-sm'}`}
                >
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#2551A4] to-[#D7AEC8] text-white px-4 py-1.5 rounded-bl-xl text-[10px] font-bold tracking-widest uppercase shadow-sm">
                    Most Popular
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-800 mb-1 mt-2">Normal Pass</h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Ideal For: Educators & Professionals</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-black text-[#149257]">₹2000</span>
                  </div>
                  <div className="space-y-3 mb-8 flex-1">
                    {TICKETS.professional.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-slate-600 font-medium text-sm">
                        <CheckCircle2 size={16} className="text-[#149257] shrink-0 mt-0.5" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button
                    className={`w-full py-3.5 rounded-full font-bold transition-all duration-300 ${selectedTicket === 'professional' ? 'bg-[#149257] text-white shadow-md' : 'bg-[#149257] text-white hover:bg-slate-900 shadow-sm'}`}
                  >
                    {selectedTicket === 'professional' ? 'Selected' : 'Choose Professional'}
                  </button>
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
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-[#2551A4] text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
                    <h2 className="font-display font-black text-2xl text-slate-800">Personal Details</h2>
                  </div>

                  <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] p-6 sm:p-10 shadow-sm">
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-sans text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                          <input type="text" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2551A4]/30 focus:border-[#2551A4] transition-all font-medium text-slate-800 shadow-sm" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="font-sans text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                          <input type="email" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2551A4]/30 focus:border-[#2551A4] transition-all font-medium text-slate-800 shadow-sm" placeholder="john@example.com" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-sans text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                          <input type="tel" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2551A4]/30 focus:border-[#2551A4] transition-all font-medium text-slate-800 shadow-sm" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-2">
                          <label className="font-sans text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Institution / Organization</label>
                          <input type="text" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2551A4]/30 focus:border-[#2551A4] transition-all font-medium text-slate-800 shadow-sm" placeholder="University of Kerala" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-sans text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">City</label>
                        <input type="text" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2551A4]/30 focus:border-[#2551A4] transition-all font-medium text-slate-800 shadow-sm" placeholder="Kochi" />
                      </div>

                      <div className="pt-6">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setStep(3);
                            window.scrollTo({ top: (document.getElementById('review-booking')?.offsetTop || 0) - 100, behavior: 'smooth' });
                          }}
                          className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-slate-900 hover:bg-[#2551A4] transition-all duration-300 shadow-md flex items-center justify-center gap-2"
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
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-[#2551A4] text-white`}>3</div>
                    <h2 className="font-display font-black text-2xl text-slate-800">Review & Payment</h2>
                  </div>

                  <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] p-6 sm:p-10 shadow-[0_15px_40px_-15px_rgba(37,81,164,0.1)]">
                    <h3 className="font-display font-bold text-xl text-slate-800 mb-6">Secure Payment</h3>

                    {/* Payment Form Mockup UI */}
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['UPI', 'Google Pay', 'PhonePe', 'Paytm', 'Debit Card', 'Credit Card'].map((method) => (
                          <span key={method} className="text-xs font-bold text-slate-600 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm cursor-pointer hover:border-[#2551A4] transition-colors">
                            {method}
                          </span>
                        ))}
                      </div>

                      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                        <div className="space-y-2">
                          <label className="font-sans text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Card Number (Mock)</label>
                          <input type="text" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none transition-all font-mono text-slate-800" placeholder="0000 0000 0000 0000" disabled />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="font-sans text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Expiry</label>
                            <input type="text" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none transition-all font-mono text-slate-800" placeholder="MM/YY" disabled />
                          </div>
                          <div className="space-y-2">
                            <label className="font-sans text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">CVV</label>
                            <input type="text" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none transition-all font-mono text-slate-800" placeholder="123" disabled />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-200">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                            <ShieldCheck size={20} className="text-[#149257]" />
                            Secure 256-bit SSL encryption
                          </div>

                          <button className="w-full sm:w-auto py-4 px-8 rounded-full font-bold text-white bg-[#2551A4] hover:bg-[#149257] transition-all duration-300 shadow-[0_10px_20px_rgba(37,81,164,0.2)] flex items-center justify-center gap-2 text-lg">
                            Pay ₹{getTotal()} Now <ArrowUpRight size={20} />
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
                    className="bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(37,81,164,0.15)]"
                  >
                    <h3 className="font-display font-black text-xl text-slate-800 mb-6">Booking Summary</h3>

                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-slate-800 mb-1">{TICKETS[selectedTicket as keyof typeof TICKETS].title}</p>
                          <p className="text-sm font-medium text-slate-500">₹{TICKETS[selectedTicket as keyof typeof TICKETS].price} per ticket</p>
                        </div>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-2 py-1">
                          <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            <Minus size={12} strokeWidth={3} />
                          </button>
                          <span className="font-bold text-sm min-w-[12px] text-center">{quantity}</span>
                          <button
                            onClick={() => setQuantity(Math.min(10, quantity + 1))}
                            className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            <Plus size={12} strokeWidth={3} />
                          </button>
                        </div>
                      </div>

                      <div className="h-px w-full bg-slate-200" />

                      <div className="space-y-3 text-sm font-medium text-slate-600">
                        <div className="flex justify-between items-center">
                          <span>Subtotal</span>
                          <span className="font-bold text-slate-800">₹{getSubtotal()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Taxes (18% GST)</span>
                          <span className="font-bold text-slate-800">₹{getGST()}</span>
                        </div>
                      </div>

                      <div className="h-px w-full bg-slate-200" />

                      <div className="flex justify-between items-center pt-2">
                        <span className="font-bold text-slate-800 text-lg">Grand Total</span>
                        <span className="font-black text-[#2551A4] text-3xl">₹{getTotal()}</span>
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
                className="bg-white/60 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] p-6 sm:p-8"
              >
                <h4 className="font-display font-bold text-slate-800 mb-6">Why Attend?</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2551A4]/10 flex items-center justify-center text-[#2551A4]">
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">200+ Selected Students</p>
                      <p className="text-xs font-medium text-slate-500">Peer networking & team tasks</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#149257]/10 flex items-center justify-center text-[#149257]">
                      <Mic size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">10+ Key Speakers</p>
                      <p className="text-xs font-medium text-slate-500">Top clinicians & researchers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F74A1C]/10 flex items-center justify-center text-[#F74A1C]">
                      <Presentation size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">20+ Panel Experts</p>
                      <p className="text-xs font-medium text-slate-500">Debates across 9 distinct domains</p>
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
          className="mt-24 text-center max-w-4xl mx-auto bg-gradient-to-br from-[#2551A4]/10 to-[#D7AEC8]/10 backdrop-blur-xl rounded-[3rem] p-12 border border-white"
        >
          <h2 className="font-display font-black text-4xl text-slate-800 mb-4">Ready To Join?</h2>
          <p className="font-sans text-xl font-medium text-slate-600 mb-8 max-w-2xl mx-auto">
            Reserve your ticket and become part of Kerala's leading psychology gathering.
          </p>
          <button
            onClick={() => window.scrollTo({ top: (document.getElementById('select-ticket')?.offsetTop || 0) - 100, behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-bold text-white bg-[#2551A4] hover:bg-slate-900 transition-all duration-300 shadow-[0_10px_25px_rgba(37,81,164,0.3)] text-lg"
          >
            Complete Booking
          </button>
        </motion.div>

      </div>
    </div>
  );
}
