/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { TicketBooking } from './pages/TicketBooking';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';
import { ScrollProgress } from './components/ScrollProgress';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-pattern font-sans text-slate-800">
      <ScrollToTop />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket-booking" element={<TicketBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

