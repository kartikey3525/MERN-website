import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Error } from './pages/Error';
import { Footer } from './components/footer/Footer';
import { Logout } from './pages/Logout';
import { Portfolio } from './pages/Portfolio';

// Page transition wrapper
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

// Routes component with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<PageTransition><Home /></PageTransition>} />
        <Route path='/About' element={<PageTransition><About /></PageTransition>} />
        <Route path='/Services' element={<PageTransition><Services /></PageTransition>} />
        <Route path='/Contact' element={<PageTransition><Contact /></PageTransition>} />
        <Route path='/Register' element={<PageTransition><Register /></PageTransition>} />
        <Route path='/Login' element={<PageTransition><Login /></PageTransition>} />
        <Route path='/Logout' element={<PageTransition><Logout /></PageTransition>} />
        <Route path='/Portfolio' element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path='*' element={<PageTransition><Error /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  // Smooth scroll disabled for instant scrolling
  // useSmoothScroll();

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}
