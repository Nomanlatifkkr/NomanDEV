// src/components/HeroText.jsx
import { motion, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';

const HeroText = ({ scrollYProgress }) => {
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      className="text-white"
      style={{ y: yText, opacity: opacityText }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight font-urbanist mb-4">
          Hi, I'm <span className="text-primary relative inline-block">
            Noman
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
        </h1>
      </motion.div>

      <motion.div variants={item}>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-xl relative">
          <span className="relative z-10">
            A passionate MERN Stack Developer building modern and scalable web apps.
          </span>
          <motion.span
            className="absolute -bottom-1 left-0 w-full h-1 bg-primary/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </p>
      </motion.div>

      <motion.div 
        className="flex gap-6 flex-wrap"
        variants={item}
      >
        <MagneticButton>
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-black rounded-full font-semibold text-lg cursor-hover-target relative overflow-hidden group"
          >
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-400" />
          </a>
        </MagneticButton>
        
        <MagneticButton>
          <a
            href="#portfolio"
            className="px-8 py-4 border-2 border-primary text-white rounded-full font-semibold text-lg cursor-hover-target relative overflow-hidden group"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
        </MagneticButton>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;