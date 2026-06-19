import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const manoImages = [
  "/mano1.png",
  "/mano2.png",
  "/mano3.png",
  "/mano4.png",
  "/mano5.png"
];

export function ArtistAnnouncement() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Log the initial image path being loaded
    console.log(`Attempting to load image at path: ${manoImages[index]}`);
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % manoImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full items-start justify-start">
      <div className="w-[220px] h-[120px] relative overflow-hidden flex items-center justify-start">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={manoImages[index]}
            src={manoImages[index]}
            alt="MANO"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute w-[220px] h-[120px] object-contain shrink-0"
            onLoad={() => console.log(`Successfully loaded image: ${manoImages[index]}`)}
            onError={() => console.error(`Failed to load image at path: ${manoImages[index]}`)}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
