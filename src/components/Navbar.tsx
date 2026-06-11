import { useState, useEffect } from 'react';
import type React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', href: '#home', emoji: '🏠' },
  { name: 'About', href: '#about', emoji: 'ℹ️' },
  { name: 'Domains', href: '#domains', emoji: '🔬' },
  { name: 'Speakers', href: '#speakers', emoji: '🧠' },
  { name: 'Schedule', href: '#agenda', emoji: '📅' },
  { name: 'Ticket', href: '#register', emoji: '🎟' },
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
    <nav 
      className="fixed w-full z-50 top-6 flex justify-center pointer-events-none px-4"
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
    >
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className={`pointer-events-auto flex items-center justify-between w-full max-w-[1100px] transition-all duration-500 rounded-full ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-2xl border border-slate-200/50 shadow-[0_20px_40px_-10px_rgba(37,81,164,0.15)] py-2 px-3' 
            : 'bg-white/50 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_-10px_rgba(37,81,164,0.05)] py-3 px-4'
        } relative overflow-hidden`}
      >
        {/* Animated Neural Node Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
          <motion.div 
             animate={{ x: ["-100%", "200%", "-100%"] }} 
             transition={{ duration: 15, ease: "linear", repeat: Infinity }}
             className="absolute top-1/2 -translate-y-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#2551A4]/20 to-transparent blur-md mix-blend-multiply"
          />
        </div>

        {/* Logo / Brand Name */}
        <div className="hidden lg:flex items-center gap-2 pl-4 relative z-10">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2551A4] to-[#D7AEC8] flex items-center justify-center text-[11px] text-white font-black">MANO</span>
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
                className={`relative flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 group overflow-hidden ${
                  isActive 
                    ? 'text-white shadow-sm' 
                    : 'text-slate-600 hover:text-[#2551A4]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-gradient-to-r from-[#2551A4] to-[#D7AEC8] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-x-4 bottom-1 h-px bg-[#2551A4] scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 -z-10" />
                )}
                <span className="text-sm leading-none">{link.emoji}</span>
                <span className="hidden sm:block">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block relative z-10 pr-2">
          <Link to="/ticket-booking" className="flex items-center gap-2 bg-[#2551A4] hover:bg-[#149257] text-white px-5 py-2.5 rounded-full font-sans text-xs font-bold shadow-[0_5px_15px_rgba(37,81,164,0.2)] transition-all duration-300">
            Book Pass <ArrowUpRight size={14} />
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
