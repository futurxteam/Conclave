import { useState, useEffect } from 'react';
import type React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaHouse, FaFlask } from 'react-icons/fa6';
import { HiMiniUsers, HiSparkles } from 'react-icons/hi2';
import { MdOutlineEventNote } from 'react-icons/md';
import { PiTicketFill } from 'react-icons/pi';
import { IoArrowForward } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', href: '#home', Icon: FaHouse },
  { name: 'About', href: '#about', Icon: HiSparkles },
  { name: 'Speakers', href: '#speakers', Icon: HiMiniUsers },
  { name: 'Schedule', href: '#agenda', Icon: MdOutlineEventNote },
  { name: 'Ticket', href: '#ticket-booking', Icon: PiTicketFill },
];

export function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.25
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const currentLink = NAV_LINKS.find(link => link.href === `#${id}`);
          if (currentLink) {
            setActiveTab(currentLink.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Initial timeout to ensure DOM is ready
    setTimeout(() => {
      NAV_LINKS.forEach(link => {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    if (!isHomePage) {
      return;
    }

    e.preventDefault();
    setActiveTab(name);
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className="fixed w-full z-50 top-6 flex justify-center pointer-events-none px-4"
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-[1100px] transition-all duration-500 rounded-full ${isScrolled
            ? 'bg-white/80 backdrop-blur-2xl border border-slate-200/50 shadow-[0_20px_40px_-10px_rgba(36,81,166,0.15)] py-2 px-3'
            : 'bg-white/50 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_-10px_rgba(36,81,166,0.05)] py-3 px-4'
            } relative overflow-hidden`}
        >
          {/* Animated Neural Node Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
            <motion.div
              animate={{ x: ["-100%", "200%", "-100%"] }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="absolute top-1/2 -translate-y-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#2451A6]/20 to-transparent blur-md mix-blend-multiply"
            />
          </div>

          {/* Logo / Brand Name */}
          <div className="hidden lg:flex items-center gap-2 pl-4 relative z-10">
            <a
              href={isHomePage ? '#home' : '/'}
              onClick={(e) => handleNavClick(e, '#home', 'Home')}
              className="cursor-pointer"
            >
              <img src="/mano logo m'.png" alt="MANO Logo" className="h-8 w-auto object-contain" />
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-0.5 sm:gap-1 relative z-10 mx-auto lg:mx-0">
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link.name;
              const targetHref = isHomePage ? link.href : `/${link.href}`;
              return (
                <a
                  key={link.name}
                  href={targetHref}
                  onClick={(e) => handleNavClick(e, link.href, link.name)}
                  className={`relative flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 group overflow-hidden ${isActive
                    ? 'text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#2451A6]'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-gradient-to-r from-[#2451A6] to-[#E0B6CF] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-x-4 bottom-1 h-px bg-[#2451A6] scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 -z-10" />
                  )}
                  <span className="text-sm leading-none flex items-center justify-center w-5 h-5"><link.Icon size={18} /></span>
                  <span className="hidden sm:block">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block relative z-10 pr-2">
            <Link to="/ticket-booking" className="flex items-center gap-2 bg-[#2451A6] hover:bg-[#169857] text-white px-5 py-2.5 rounded-full font-sans text-xs font-bold shadow-[0_5px_15px_rgba(36,81,166,0.2)] transition-all duration-300">
              Book Pass <IoArrowForward size={14} />
            </Link>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
