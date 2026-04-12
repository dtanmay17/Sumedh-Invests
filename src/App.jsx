/**
 * App.jsx — Root component
 * ─────────────────────────────────────────────────
 * Sets up React Router v6 with:
 *  - BrowserRouter
 *  - All page routes
 *  - Persistent Navbar, Footer, ScrollProgress
 *  - Scroll-to-top on route change
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar         from './components/Navbar';
import Footer         from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

import Home     from './pages/Home';
import About    from './pages/About';
import Services from './pages/Services';
import Journey  from './pages/Journey';
import Insights from './pages/Insights';
import FAQ      from './pages/FAQ';
import Contact  from './pages/Contact';

/* ── Scroll to top on every navigation ─────────── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
}

/* ── App Shell ──────────────────────────────────── */
function AppShell() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/"         element={<Home />}     />
          <Route path="/about"    element={<About />}    />
          <Route path="/services" element={<Services />} />
          <Route path="/journey"  element={<Journey />}  />
          <Route path="/insights" element={<Insights />} />
          <Route path="/faq"      element={<FAQ />}      />
          <Route path="/contact"  element={<Contact />}  />

          {/* Catch-all 404 → redirect home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
