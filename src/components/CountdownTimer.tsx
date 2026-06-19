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
      ].map((item, idx) => {
        const timerThemes = [
          {
            bg: '#2451A6',
            border: 'border-[#1a3a80]',
            shadow: 'shadow-[0_8px_24px_rgba(36,81,166,0.45)]',
            textColor: 'text-white'
          },
          {
            bg: '#169857',
            border: 'border-[#0f7040]',
            shadow: 'shadow-[0_8px_24px_rgba(22,152,87,0.45)]',
            textColor: 'text-white'
          },
          {
            bg: '#F4D313',
            border: 'border-[#e6c500]',
            shadow: 'shadow-[0_8px_24px_rgba(244,211,19,0.45)]',
            textColor: 'text-slate-900'
          },
          {
            bg: '#F74A1D',
            border: 'border-[#c23612]',
            shadow: 'shadow-[0_8px_24px_rgba(247,74,29,0.45)]',
            textColor: 'text-white'
          }
        ];
        const theme = timerThemes[idx % timerThemes.length];
        return (
          <div key={item.label} className="flex flex-col items-center">
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 border ${theme.border} ${theme.shadow} rounded-2xl flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-200`}
              style={{ backgroundColor: theme.bg }}
            >
              <span className={`font-display font-black text-2xl sm:text-3xl ${theme.textColor} relative z-10`}>
                {item.value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-600 mt-3">
              {item.label}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}
