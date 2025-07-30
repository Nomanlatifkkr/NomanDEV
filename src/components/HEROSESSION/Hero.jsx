// src/components/Hero.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-16 bg-dark overflow-hidden"
    >
      <HeroBackground y={yBg} opacity={opacityBg} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full items-center relative z-10">
        <HeroText scrollYProgress={scrollYProgress} />
        <HeroImage scrollYProgress={scrollYProgress} />
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
  );
};

export default Hero;