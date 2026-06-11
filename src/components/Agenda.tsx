import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const schedule = {
  day1: [
    {
      badge: 'OPENING CEREMONY',
      title: 'Conclave Inauguration & Intro to MANO',
      description: 'Welcome address by Sereniche Academy and KMM College heads. Setting the stage for Exploring the Diverse World of Psychology.',
      time: '09:00 AM – 10:00 AM',
      color: 'text-[#2551A4]',
      bg: 'bg-[#2551A4]/10'
    },
    {
      badge: 'CLINICAL & COUNSELLING',
      title: 'Emerging Paradigms in Clinical Assessment',
      description: 'Understanding diagnosis models, assessment methods, and cultural adaptation in client care.',
      time: '10:30 AM – 12:00 PM',
      color: 'text-[#149257]',
      bg: 'bg-[#149257]/10'
    },
    {
      badge: 'PEER NETWORKING',
      title: 'Icebreakers & Student Interactive Connect',
      description: 'Connecting 200+ students from different corners of Kerala through structured communication exercises.',
      time: '12:30 PM – 01:30 PM',
      color: 'text-[#F1D10A]',
      bg: 'bg-[#F1D10A]/20'
    },
    {
      badge: 'CAREER PANEL',
      title: 'Private Practice & Licensing in Kerala',
      description: 'A comprehensive panel session detailing how to set up an ethical, compliant mental health counseling clinic.',
      time: '02:00 PM – 03:30 PM',
      color: 'text-[#F74A1C]',
      bg: 'bg-[#F74A1C]/10'
    },
    {
      badge: 'ORGANISATIONAL & INDUSTRIAL',
      title: 'Psychology in Corporate Ecosystems',
      description: 'Understanding organizational behavior models, industrial workplace design, and employee wellness coaching.',
      time: '04:00 PM – 05:30 PM',
      color: 'text-[#D7AEC8]',
      bg: 'bg-[#D7AEC8]/20'
    },
    {
      badge: 'CULTURAL NIGHT',
      title: 'Evening Cultural Events & Campfire Acoustics',
      description: 'Student-led art performances, poetry readings, and informal networking around the campfire.',
      time: '06:30 PM – 09:30 PM',
      color: 'text-[#F74A1C]',
      bg: 'bg-[#F74A1C]/10'
    }
  ],
  day2: [
    {
      badge: 'FORENSIC & LEGAL',
      title: 'Forensic Investigation and Criminal Minds',
      description: 'Exploring crime scenes, criminal profiling techniques, and the legal applications of psychology in Indian courtrooms.',
      time: '09:00 AM – 10:30 AM',
      color: 'text-[#2551A4]',
      bg: 'bg-[#2551A4]/10'
    },
    {
      badge: 'DIGITAL MENTAL HEALTH',
      title: 'Mental Health in the Age of AI and Teletherapy',
      description: 'Exploring software diagnostics, online platforms, tele-consultation models, and automated support applications.',
      time: '11:00 AM – 12:30 PM',
      color: 'text-[#149257]',
      bg: 'bg-[#149257]/10'
    },
    {
      badge: 'KPSA LAUNCH',
      title: 'Launch of Kerala Psychology Students Association',
      description: 'Official inauguration ceremony of KPSA state-wide student network. Special guest declarations and officer installations.',
      time: '01:30 PM – 02:30 PM',
      color: 'text-[#F1D10A]',
      bg: 'bg-[#F1D10A]/20'
    },
    {
      badge: 'POSITIVE PSYCHOLOGY',
      title: 'Human Strengths, Virtues & Community Resilience',
      description: 'How to build positive thinking networks and encourage mental wellbeing outside clinical therapy contexts.',
      time: '03:00 PM – 04:30 PM',
      color: 'text-[#F74A1C]',
      bg: 'bg-[#F74A1C]/10'
    },
    {
      badge: 'CLOSING CEREMONY',
      title: 'Valedictory Session & Certificate Distribution',
      description: 'Collecting feedback, acknowledging coordinators, and distribution of physical conclave credentials.',
      time: '04:45 PM – 05:30 PM',
      color: 'text-[#D7AEC8]',
      bg: 'bg-[#D7AEC8]/20'
    }
  ]
};

export function Agenda() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const currentSchedule = schedule[activeDay];

  return (
    <section id="agenda" className="py-24 md:py-32 bg-slate-50/50 relative overflow-hidden border-t border-slate-200">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2551A4]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D7AEC8]/10 rounded-full blur-[150px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-display font-bold text-sm mb-6 shadow-sm uppercase tracking-widest"
          >
            <Calendar size={16} className="text-[#2551A4]" /> 
            Conclave Agenda ✨
          </motion.div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 mb-6 leading-tight tracking-tight">
            Conclave Schedule
          </h2>
          
          <p className="font-sans text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            A comprehensive 2-day schedule detailing sessions, speakers, launches, panels, and cultural experiences.
          </p>
        </div>

        {/* Day Switcher */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex p-1.5 bg-white border border-slate-200 rounded-full shadow-sm relative">
            {['day1', 'day2'].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day as 'day1' | 'day2')}
                className={`relative px-8 py-3 rounded-full font-display font-bold text-sm md:text-base uppercase tracking-wider transition-colors z-10 ${
                  activeDay === day ? 'text-white' : 'text-slate-600 hover:text-[#2551A4]'
                }`}
              >
                {activeDay === day && (
                  <motion.div
                    layoutId="activeDayIndicator"
                    className="absolute inset-0 bg-[#2551A4] rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {day === 'day1' ? 'July 4th (Day 1)' : 'July 5th (Day 2)'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Schedule Cards */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {currentSchedule.map((item, index) => (
              <motion.div
                key={`${activeDay}-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-6 md:p-8 lg:p-10 shadow-[0_15px_40px_-15px_rgba(37,81,164,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(37,81,164,0.1)] transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full">
                  {/* Left: Time & Badge */}
                  <div className="w-full md:w-48 shrink-0 flex flex-col items-start gap-4 pb-4 md:pb-0 md:border-r border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500 font-sans font-bold text-sm tracking-wide">
                      <Clock size={16} />
                      {item.time}
                    </div>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${item.bg} ${item.color}`}>
                      {item.badge}
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-800 mb-3 group-hover:text-[#2551A4] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
