import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    // Target date: July 18, 2026 (MANO: Kerala Psychology Conclave)
    const targetDate = new Date('2026-07-18T09:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="grid grid-cols-2 sm:flex gap-4 mt-8"
    >
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(36,81,166,0.1)] rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-royal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="font-display font-black text-2xl sm:text-3xl text-royal relative z-10">
              {item.value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 mt-3">
            {item.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
