/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { lazy, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import ScrollToTop from './components/ScrollToTop';
import Marquee from './components/Marquee';
import PageTransition from './components/PageTransition';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HowWeWork = lazy(() => import('./pages/HowWeWork'));
const MaterialsPrinting = lazy(() => import('./pages/MaterialsPrinting'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
        <Route path="/how-we-work" element={<PageTransition><HowWeWork /></PageTransition>} />
        <Route path="/materials" element={<PageTransition><MaterialsPrinting /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><Home /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Marquee />
        <div className="flex-grow">
          <Suspense fallback={<div className="min-h-screen bg-dark-bg" />}>
            <AnimatedRoutes />
          </Suspense>
        </div>
        <Footer />
        <FloatingElements />
      </div>
      <Analytics />
    </Router>
  );
}
