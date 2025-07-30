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

const App = () => {
  return (
    <>
      {/* Global Custom Cursor */}
      <CustomCursor />

      {/* Page Content */}
      <main className="relative z-0 text-white min-h-screen font-urbanist overflow-hidden">
        {/* Header */}
        <Header />

        {/* Smooth Scroll Container */}
        <div className="">
          {/* Hero Section (Full Viewport) */}
          <section className="snap-start h-screen w-full pt-20 relative">
            <Hero />
            
            {/* Scroll Indicator (Only on Hero) */}
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="animate-bounce w-8 h-12 border-4 border-primary rounded-full flex justify-center p-1">
                <motion.div
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </section>

          {/* Tech Stack Showcase Section
          <section className="snap-start h-[40]  w-full flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-gray-900/50">
            <div className="max-w-4xl w-full">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center mb-12 mt-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                My <span className="text-primary">Tech Stack</span>
              </motion.h2>
              <TabLine />
            </div>
          </section> */}

          {/* About Section */}
          <section className="snap-start min-h-screen w-full">
            <About />
          </section>
        </div>
        <Services/>
        <Portfolio/>
        <Contact/>
      </main>
    </>
  );
};

export default App;