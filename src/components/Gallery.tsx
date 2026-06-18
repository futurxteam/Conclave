import { motion } from 'motion/react';
import { FaCamera } from 'react-icons/fa6';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    title: 'Main Stage Keynote',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1558402529-d2638a7023e9?auto=format&fit=crop&q=80&w=800',
    title: 'Audience Engagement',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
    title: 'Networking Lounge',
    className: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    title: 'Interactive Workshops',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1200',
    title: 'Panel Discussion',
    className: 'md:col-span-2 md:row-span-1',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-transparent relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lavender/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-display font-bold text-sm mb-6 shadow-sm uppercase tracking-widest"
            >
              <FaCamera size={16} className="text-royal" /> 
              Highlights
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight"
            >
              Moments from <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-royal to-lavender bg-clip-text text-transparent">Past Editions</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-sans text-slate-600 text-lg max-w-sm font-medium">
              A glimpse into the energy, connections, and transformative ideas shared at previous conclaves.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden bg-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-500 glass-panel p-2 ${image.className}`}
            >
              <div className="w-full h-full rounded-[1.25rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-6 md:p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-display font-bold text-xl md:text-2xl drop-shadow-md">
                      {image.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
