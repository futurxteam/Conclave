import { motion } from 'motion/react';
import { IoLocationOutline } from 'react-icons/io5';
import { FaBuilding, FaShieldHalved } from 'react-icons/fa6';
import { MdOutlineNavigation } from 'react-icons/md';

export function VenueInfo() {
  return (
    <section id="venue" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-200/50">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#2451A6]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2451A6]/5 border border-[#2451A6]/10 text-[#2451A6] font-display font-bold text-xs uppercase tracking-widest mb-6">
            <IoLocationOutline size={14} className="text-[#F4D313]" />
            Location Details
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-6">
            Venue & Campus Information
          </h2>
          <p className="font-sans text-slate-600 text-lg md:text-xl font-medium">
            Join us at the beautifully designed modern campus of KMM College of Arts and Science.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display font-black text-3xl text-slate-950 leading-tight">
              KMM College of Arts and Science
            </h3>

            <p className="font-sans text-slate-600 leading-relaxed text-base">
              Conveniently located with advanced state-of-the-art halls, digital lecture theaters, and spaces optimized for student groups and workshops.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2451A6]/10 text-[#2451A6] flex items-center justify-center shrink-0">
                  <MdOutlineNavigation size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Full Address</h4>
                  <p className="text-sm text-slate-500 font-sans mt-0.5">KMM College of Arts and Science, Thrikkakara, Ernakulam, Kerala</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#169857]/10 text-[#169857] flex items-center justify-center shrink-0">
                  <FaBuilding size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Residential Accommodation</h4>
                  <p className="text-sm text-slate-500 font-sans mt-0.5">Separate hostel and campus rooms are configured for outstation attendees, ensuring safe overnight stay.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F74A1D]/10 text-[#F74A1D] flex items-center justify-center shrink-0">
                  <FaShieldHalved size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Safety & Support</h4>
                  <p className="text-sm text-slate-500 font-sans mt-0.5">24/7 security guards and conclave medical coordinators are stationed across critical zones.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
              <a
                href="https://maps.app.goo.gl/xo8uvVMV1gx6FcEm6"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#2451A6] hover:bg-[#1c3f85] text-white font-bold text-xs py-3 px-6 rounded-full shadow-md transition-all"
              >
                Open Google Maps &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden aspect-video bg-slate-100 shadow-xl border border-white"
          >
            {/* Visual element representing a Map Placeholder/Stylized SVG Map */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10 pointer-events-none" />
            <iframe
              title="KMM College Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1364506263595!2d76.3262615757973!3d10.005541672957134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5717a6a4eb%3A0xe54e66c9dbfb70!2sKMM%20College%20of%20Arts%20%26%20Science!5e0!3m2!1sen!2sin!4v1717904000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen={true}
              loading="lazy"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
