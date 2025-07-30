import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/commons/CustomCursor';
import Header from './components/Header/Header';
import Hero from './components/HEROSESSION/Hero';
import TabLine from './components/commons/TabLine';
import About from './components/AboutusSession/About';
import Services from './components/ServicesSession/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contactus/Contact';
import Footer from './components/commons/Footer';
import Meta from './components/commons/Meta';

const App = () => {
  return (
    <>
      {/* Global Custom Cursor */}
      
      <Meta 
        title="Noman Latif | Portfolio"
        description="Check out my projects, skills, and services built with React, Tailwind CSS, and Framer Motion."
        keywords="React Portfolio, Framer Motion, Tailwind Developer, Web Projects"
      />
      <CustomCursor />

      {/* Page Content */}
      <main className="relative z-0 text-white min-h-screen font-urbanist overflow-hidden scroll-smooth">
        {/* Header */}
        <Header />

        {/* Smooth Scroll Container */}
        <div className="">
          {/* Hero Section (Full Viewport) */}
          <section className="snap-start h-screen w-full pt-20 relative">
            <Hero />
          </section>
          {/* About Section */}
          <section className="snap-start min-h-screen w-full">
            <About />
          </section>
        </div>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
};

export default App;