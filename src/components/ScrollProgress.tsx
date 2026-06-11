import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left bg-gradient-to-r from-[#2551A4] via-[#D7AEC8] to-[#149257] shadow-[0_0_10px_rgba(20,146,87,0.3)]"
      style={{ scaleX }}
    />
  );
}
