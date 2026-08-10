import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Home } from './pages/Home';
import { TicketBooking } from './pages/TicketBooking';
import { SessionsSummary } from './pages/SessionsSummary';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';
import { ScrollProgress } from './components/ScrollProgress';
import { PiTicketFill } from 'react-icons/pi';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function FloatingCTA() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/ticket-booking');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-[20px] right-[20px] sm:bottom-[30px] sm:right-[30px] z-[9999] flex items-center gap-2 bg-gradient-to-r from-[#2451A6] to-[#E0B6CF] text-white px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full font-sans font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgba(36,81,166,0.35)] animate-pulse-glow cursor-pointer"
    >
      <PiTicketFill className="text-sm sm:text-base animate-bounce-slow" />
      <span>Reserve Your Seat</span>
    </button>
  );
}

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const elementId = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-pattern font-sans text-slate-800">
      <ScrollToTop />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket-booking" element={<TicketBooking />} />
        <Route path="/sessions-summary" element={<SessionsSummary />} />
      </Routes>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
