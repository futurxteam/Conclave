import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa6';

const schedule = {
  day1: [
    {
      badge: 'WELCOME',
      title: 'Ice Breaker & Programme Introduction',
      description: 'A fun and energetic opening to bring 250+ psychology students together. Set the tone for two days of learning, connection, and growth.',
      time: '10:00 – 10:30 AM',
      color: 'text-[#2451A6]',
      bg: 'bg-[#2451A6]/10'
    },
    {
      badge: 'EXPERT TALK',
      title: 'Expert Talk – Session 1',
      description: 'An impactful opening talk from a leading figure in the psychology field, setting the stage for the day\'s conversations.',
      time: '10:30 – 11:15 AM',
      color: 'text-[#169857]',
      bg: 'bg-[#169857]/10'
    },
    {
      badge: 'BREAK',
      title: 'Tea Break',
      description: 'Refresh, connect and network with fellow psychology students from across Kerala.',
      time: '11:15 – 11:30 AM',
      color: 'text-[#E0B6CF]',
      bg: 'bg-[#E0B6CF]/20'
    },
    {
      badge: 'HISTORIC MILESTONE',
      title: 'Inauguration Ceremony & Grand Launch of KPSA',
      description: 'The historic launch of the Kerala Psychology Students Association a landmark moment for psychology students across the state.',
      time: '11:30 AM – 12:30 PM',
      color: 'text-[#F74A1D]',
      bg: 'bg-[#F74A1D]/10'
    },
    {
      badge: 'PANEL DISCUSSION I',
      title: 'Is Psychology a Viable Career in Kerala?',
      description: 'Experts and practitioners dissect the real career landscape for psychology graduates in Kerala today and tomorrow.',
      time: '12:40 – 1:30 PM',
      color: 'text-[#2451A6]',
      bg: 'bg-[#2451A6]/10'
    },
    {
      badge: 'LUNCH & PRAYER',
      title: 'Lunch Break',
      description: 'Afternoon break for lunch, prayer, and informal peer connections.',
      time: '1:30 – 2:30 PM',
      color: 'text-[#E0B6CF]',
      bg: 'bg-[#E0B6CF]/20'
    },
    {
      badge: 'INTERACTIVE SESSION',
      title: 'Interactive Session',
      description: 'Engaging hands-on activity designed to encourage participation, reflection, and teamwork among participants.',
      time: '2:30 – 3:00 PM',
      color: 'text-[#169857]',
      bg: 'bg-[#169857]/10'
    },
    {
      badge: 'PANEL DISCUSSION II',
      title: 'The Many Faces of Psychology – Which Path Is Right for You?',
      description: 'Explore diverse specializations within psychology and discover what path aligns best with your interests and strengths.',
      time: '3:00 – 3:40 PM',
      color: 'text-[#2451A6]',
      bg: 'bg-[#2451A6]/10'
    },
    {
      badge: 'INTERACTIVE SESSION',
      title: 'Interactive Session',
      description: 'A collaborative exercise to deepen understanding and encourage student-led discussion.',
      time: '3:40 – 4:15 PM',
      color: 'text-[#169857]',
      bg: 'bg-[#169857]/10'
    },
    {
      badge: 'PANEL DISCUSSION III',
      title: 'Old School vs New Age – How Is the Field Really Changing?',
      description: 'Veteran practitioners and emerging voices debate how psychology is evolving and what it means for students entering the field.',
      time: '4:15 – 5:00 PM',
      color: 'text-[#2451A6]',
      bg: 'bg-[#2451A6]/10'
    },
    {
      badge: 'BREAK',
      title: 'Tea Break',
      description: 'Evening refreshments before the flagship competition.',
      time: '5:00 – 5:15 PM',
      color: 'text-[#E0B6CF]',
      bg: 'bg-[#E0B6CF]/20'
    },
    {
      badge: 'PSYCHLAUNCH ',
      title: 'PsychLaunch – Pitch Your Psychology Product Idea',
      description: 'Students pitch innovative psychology-based product and service ideas to a panel of experts. Creativity, boldness, and vision rewarded.',
      time: '5:15 – 6:30 PM',
      color: 'text-[#F74A1D]',
      bg: 'bg-[#F74A1D]/10'
    },
    {
      badge: 'BREAK',
      title: 'Evening Break',
      description: 'Wind down before the Cultural Evening.',
      time: '6:30 – 7:00 PM',
      color: 'text-[#E0B6CF]',
      bg: 'bg-[#E0B6CF]/20'
    },
    {
      badge: 'CULTURAL EVENING ',
      title: 'Cultural Evening – Performances & Entertainment',
      description: 'An unforgettable evening of student performances, cultural presentations, music, and entertainment to celebrate the MANO community.',
      time: '7:00 – 10:30 PM',
      color: 'text-[#F74A1D]',
      bg: 'bg-[#F74A1D]/10'
    }
  ],
  day2: [
    {
      badge: 'REGISTRATION',
      title: 'Registration & Check-In',
      description: 'Morning registration and orientation for Day 2 participants.',
      time: '9:00 – 9:15 AM',
      color: 'text-[#E0B6CF]',
      bg: 'bg-[#E0B6CF]/20'
    },
    {
      badge: 'PANEL DISCUSSION IV',
      title: 'From Campus to Career – The Transition Nobody Prepares You For',
      description: 'Honest conversations about navigating the gap between academic psychology and real-world professional practice.',
      time: '9:15 – 10:00 AM',
      color: 'text-[#2451A6]',
      bg: 'bg-[#2451A6]/10'
    },
    {
      badge: 'EXPERT TALK',
      title: 'Expert Talk – Session 2',
      description: 'A focused talk from a leading psychology professional covering key themes relevant to today\'s students.',
      time: '10:00 – 10:45 AM',
      color: 'text-[#169857]',
      bg: 'bg-[#169857]/10'
    },
    {
      badge: 'BREAK',
      title: 'Tea Break',
      description: 'Mid-morning refreshments and networking.',
      time: '10:45 – 11:00 AM',
      color: 'text-[#E0B6CF]',
      bg: 'bg-[#E0B6CF]/20'
    },
    {
      badge: 'MINDQUIZ ',
      title: 'MindQuiz – Psychology Quiz Competition',
      description: 'The ultimate psychology knowledge challenge. Teams compete across clinical, forensic, organisational, and research domains.',
      time: '11:00 AM – 12:30 PM',
      color: 'text-[#F74A1D]',
      bg: 'bg-[#F74A1D]/10'
    },
    {
      badge: 'LUNCH',
      title: 'Lunch Break',
      description: 'Afternoon lunch and informal networking among participants.',
      time: '12:30 – 1:30 PM',
      color: 'text-[#E0B6CF]',
      bg: 'bg-[#E0B6CF]/20'
    },
    {
      badge: 'PANEL DISCUSSION V',
      title: 'Can Psychology Change Kerala? Community, Policy & Social Impact',
      description: 'Exploring the broader social role of psychologists in shaping community mental health policy and social impact in Kerala.',
      time: '1:30 – 2:15 PM',
      color: 'text-[#2451A6]',
      bg: 'bg-[#2451A6]/10'
    },
    {
      badge: 'EXPERT TALK',
      title: 'Expert Talk – Session 3',
      description: 'Closing expert session to inspire, inform, and equip students with actionable insights for their psychology careers.',
      time: '2:15 – 3:00 PM',
      color: 'text-[#169857]',
      bg: 'bg-[#169857]/10'
    },
    {
      badge: 'CLOSING CEREMONY',
      title: 'Certificate Ceremony & Valedictory',
      description: 'Celebrating two transformative days. Certificate distribution, acknowledgements, and the official closing of MANO 2026.',
      time: '3:00 – 4:00 PM',
      color: 'text-[#F74A1D]',
      bg: 'bg-[#F74A1D]/10'
    }
  ]
};

export function Agenda() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const currentSchedule = schedule[activeDay];

  return (
    <section id="agenda" className="py-24 md:py-32 bg-slate-50/50 relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2451A6]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E0B6CF]/10 rounded-full blur-[150px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-display font-bold text-sm mb-6 shadow-sm uppercase tracking-widest"
          >
            <MdOutlineCalendarMonth size={16} className="text-[#2451A6]" />
            Conclave Schedule
          </motion.div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 mb-6 leading-tight tracking-tight">
            Programme Agenda
          </h2>

          <p className="font-sans text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Two full days of expert talks, panel discussions, competitions, networking, and cultural experiences all curated for psychology students.
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
          <div className="inline-flex p-1.5 bg-[#0d142a]/60 backdrop-blur-md border border-white/10 rounded-full shadow-sm relative">
            {(['day1', 'day2'] as const).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`relative px-8 py-3 rounded-full font-display font-bold text-sm md:text-base uppercase tracking-wider transition-colors z-10 ${activeDay === day ? 'text-white' : 'text-white/60 hover:text-[#E0B6CF]'
                  }`}
              >
                {activeDay === day && (
                  <motion.div
                    layoutId="activeDayIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-[#2451A6] to-[#E0B6CF] rounded-full -z-10 shadow-md"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {day === 'day1' ? 'Sat, 18 July (Day 1)' : 'Sun, 19 July (Day 2)'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Schedule Cards */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {currentSchedule.map((item, index) => {
              const agendaThemes = [
                {
                  bg: 'from-[#0d142a] via-[#122247] to-[#0d142a]',
                  border: 'border-white/10 group-hover:border-[#2451A6]/30',
                  shadow: 'hover:shadow-[0_20px_50px_-15px_rgba(36,81,166,0.2)]',
                  iconColor: 'text-[#3b82f6]',
                },
                {
                  bg: 'from-[#07130d] via-[#0f291a] to-[#07130d]',
                  border: 'border-white/10 group-hover:border-[#169857]/30',
                  shadow: 'hover:shadow-[0_20px_50px_-15px_rgba(22,152,87,0.2)]',
                  iconColor: 'text-[#10b981]',
                },
                {
                  bg: 'from-[#151206] via-[#2a240c] to-[#151206]',
                  border: 'border-white/10 group-hover:border-[#F4D313]/30',
                  shadow: 'hover:shadow-[0_20px_50px_-15px_rgba(244,211,19,0.2)]',
                  iconColor: 'text-[#fbbf24]',
                },
                {
                  bg: 'from-[#1a0c0a] via-[#351811] to-[#1a0c0a]',
                  border: 'border-white/10 group-hover:border-[#F74A1D]/30',
                  shadow: 'hover:shadow-[0_20px_50px_-15px_rgba(247,74,29,0.2)]',
                  iconColor: 'text-[#f87171]',
                }
              ];
              const theme = agendaThemes[index % agendaThemes.length];
              return (
                <motion.div
                  key={`${activeDay}-${index}`}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className={`bg-gradient-to-br ${theme.bg} ${theme.border} ${theme.shadow} border rounded-3xl p-6 md:p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 group`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full">
                    <div className="w-full md:w-48 shrink-0 flex flex-col items-start gap-4 pb-4 md:pb-0 md:border-r border-white/10">
                      <div className="flex items-center gap-2 text-white/60 font-sans font-bold text-sm tracking-wide">
                        <FaRegClock size={16} />
                        {item.time}
                      </div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 ${theme.iconColor}`}>
                        {item.badge}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-display font-bold text-xl md:text-2xl text-white mb-3 group-hover:text-[#E0B6CF] transition-colors duration-300`}>
                        {item.title}
                      </h3>
                      <p className="text-white/70 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
