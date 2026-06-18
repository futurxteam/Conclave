import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineCalendarMonth } from 'react-icons/md';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a1128] to-[#070c1e] rounded-t-[2.5rem] overflow-hidden py-10 px-4 sm:px-6 z-10 border-t border-white/10">
      {/* Subtle glassmorphism background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-gradient-to-b from-[#2451A6]/15 to-transparent blur-[60px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-10 w-[200px] h-[200px] bg-[#E0B6CF]/5 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center">
        {/* Logo Text */}
        <div className="mb-4">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-none">
            MANO
          </h2>
          <p className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#E0B6CF] mt-1.5">
            Kerala Psychology Conclave
          </p>
        </div>

        {/* Small Description */}
        <p className="font-sans text-white/60 text-sm sm:text-base font-medium max-w-md mb-5">
          Exploring the Diverse World of Psychology
        </p>

        {/* Venue & Date Details */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 text-xs sm:text-sm font-bold text-white/80">
          <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
            <IoLocationOutline className="text-[#F74A1D]" size={16} /> KMM Edu Hub
          </div>
          <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
            <MdOutlineCalendarMonth className="text-[#F4D313]" size={16} /> July 18 &amp; 19, 2026
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />

        {/* Bottom Text and Organizing info */}
        <div className="w-full max-w-2xl flex flex-col gap-2">
          <p className="text-white/40 text-[11px] sm:text-xs font-medium tracking-wide">
            &copy; 2026 MANO: Kerala Psychology Conclave. All Rights Reserved.
          </p>
          <p className="text-white/30 text-[10px] sm:text-[11px] leading-normal font-medium">
            Organized by Sereniche Academy in association with KMM College of Arts and Science
          </p>
        </div>
      </div>
    </footer>
  );
}
