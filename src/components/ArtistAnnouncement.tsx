import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const names = ['MANO', 'മനോ', 'मनो', 'மனோ', 'మనో', 'ಮನೋ'];

export function ArtistAnnouncement() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % names.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full items-start justify-start">
      <div className="h-[32px] md:h-[40px] relative overflow-visible flex items-center justify-start">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={names[index]}
            initial={{ y: 0, opacity: 0, filter: 'blur(8px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: 0, opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute font-display font-medium text-[24px] md:text-[32px] tracking-wide bg-gradient-to-r from-[#2551A4] to-[#D7AEC8] bg-clip-text text-transparent leading-none"
          >
            {names[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
