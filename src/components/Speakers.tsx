import { useState } from 'react';
import { motion } from 'motion/react';
import { HiSparkles } from 'react-icons/hi2';
import { FaUser } from 'react-icons/fa6';

const stats = [
  { value: '10+', label: 'Expert Speakers', color: 'text-[#2451A6]', bg: 'bg-[#2451A6]/10' },
  { value: '20+', label: 'Panelists', color: 'text-[#E0B6CF]', bg: 'bg-[#E0B6CF]/15' },
  { value: '5+', label: 'Psychology Domains', color: 'text-[#169857]', bg: 'bg-[#169857]/10' },
  { value: '200+', label: 'Participants', color: 'text-[#F74A1D]', bg: 'bg-[#F74A1D]/10' },
];

const speakers = [
  {
    name: "Dr Benzir Hussain",
    role: "MANO 2026 Expert Panelist",
    image: "/guest 1.png"
  },
  {
    name: "Dr Femi Abdulla",
    role: "MANO 2026 Expert Panelist",
    image: "/guest 2.png"
  },
  {
    name: "Uveysudheen K H",
    role: "MANO 2026 Expert Panelist",
    image: "/guest 3.png"
  }
];

function SpeakerImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-6 bg-slate-100/50 border border-slate-200/50 shadow-inner">
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center text-slate-400 gap-2">
          <FaUser size={40} className="opacity-40" />
          <span className="text-[10px] font-sans font-bold uppercase tracking-wider opacity-60">Image Missing</span>
        </div>
      )}
    </div>
  );
}

export function Speakers() {
  return (
    <section id="speakers" className="py-24 sm:py-32 bg-slate-50/20 relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-[#2451A6]/5 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-[#E0B6CF]/8 rounded-full blur-[130px] pointer-events-none translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/80 border border-slate-200/80 text-[#2451A6] font-display font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_4px_12px_rgba(36,81,166,0.03)]">
            <HiSparkles size={14} className="text-[#F4D313]" />
            CONCLAVE EXPERTS & PANELS
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-5 leading-tight">
            Featured Speakers & Panelists
          </h2>

          <p className="font-sans text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Learn from experienced psychologists, researchers, academicians, clinicians, counsellors, and industry experts from diverse psychology domains.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {speakers.map((speaker, idx) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group glass-panel p-6 rounded-[2.5rem] border border-white/80 shadow-[0_15px_40px_rgba(36,81,166,0.03)] hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col items-center text-center"
            >
              <SpeakerImage src={speaker.image} alt={speaker.name} />

              <h3 className="font-display font-bold text-[1.5rem] text-slate-900 mb-1 group-hover:text-[#2451A6] transition-colors leading-tight">
                {speaker.name}
              </h3>

              <p className="font-sans text-[0.95rem] text-slate-500 font-medium opacity-75">
                MANO 2026 Expert Panelist
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

