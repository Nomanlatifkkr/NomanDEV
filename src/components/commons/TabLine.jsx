import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FiPause, FiPlay } from 'react-icons/fi';

const TabLine = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const items = [
    { text: "Noman", type: "name", icon: "👨‍💻" },
    { text: "React", type: "framework", icon: "⚛️" },
    { text: "Next.js", type: "framework", icon: "🚀" },
    { text: "Express", type: "backend", icon: "📡" },
    { text: "Tailwind", type: "css", icon: "🎨" },
    { text: "MUI", type: "ui", icon: "🧩" },
    { text: "Node.js", type: "backend", icon: "🖥️" },
    { text: "MongoDB", type: "database", icon: "🗄️" }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getTypeColor = (type) => {
    switch(type) {
      case 'framework': return 'from-blue-500 to-blue-600';
      case 'backend': return 'from-green-500 to-green-600';
      case 'css': return 'from-purple-500 to-purple-600';
      case 'ui': return 'from-yellow-400 to-yellow-500';
      case 'database': return 'from-red-500 to-red-600';
      default: return 'from-primary to-primary-dark';
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 8);
    y.set((e.clientY - centerY) / 8);
    setMousePosition({ x: e.clientX - centerX, y: e.clientY - centerY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative max-w-2xl mx-auto mt-10 px-6 py-8 rounded-2xl border border-gray-800 shadow-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 text-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Glow */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30 blur-md pointer-events-none"
          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            x: mousePosition.x * 0.03,
            y: mousePosition.y * 0.03
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6 + i, repeat: Infinity }}
        />
      ))}

      {/* Pause/Play Button */}
      <motion.button
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
        onClick={() => setIsPaused(!isPaused)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPaused ? "Play" : "Pause"}
      >
        {isPaused ? <FiPlay className="text-primary" /> : <FiPause className="text-primary" />}
      </motion.button>

      {/* Animated Flag */}
      <motion.div 
        className="mx-auto mb-6 relative"
        animate={{ rotate: [0, 6, -6, 0], y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-6 h-8 bg-primary rotate-12" />
        <div className="absolute top-0 left-0 w-6 h-4 bg-primary -rotate-12" />
        <motion.div 
          className="absolute top-1 left-1 w-4 h-6 bg-black"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Text Transition */}
      <div className="relative h-14 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -100, filter: 'blur(6px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center space-x-3"
          >
            <span className="text-3xl">{items[activeIndex].icon}</span>
            <div className="flex flex-col items-start">
              <span className="text-white text-2xl md:text-3xl font-bold tracking-wide">{items[activeIndex].text}</span>
              <span className={`text-black text-xs px-3 py-1 mt-1 rounded-full bg-gradient-to-r ${getTypeColor(items[activeIndex].type)} font-semibold`}>
                {items[activeIndex].type}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-3">
        {items.map((_, index) => (
          <motion.button 
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            className={`relative w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-primary shadow-md' : 'bg-gray-600'
            }`}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.8 }}
          >
            {index === activeIndex && (
              <motion.span
                className="absolute inset-0 rounded-full bg-primary opacity-20"
                initial={{ scale: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-primary origin-left"
        animate={{ scaleX: isPaused ? 0 : 1 }}
        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
};

export default TabLine;
