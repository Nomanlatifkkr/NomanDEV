// src/components/Services/ServiceVisualization.jsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ServiceVisualization = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { value: "100%", label: "Custom Code" },
    { value: "24/7", label: "Support" },
    { value: "1M+", label: "Users Served" },
    { value: "99.9%", label: "Uptime" }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center"
        >
          <motion.div
            className="text-4xl font-bold text-primary mb-2"
            animate={{ 
              scale: [1, 1.1, 1],
              transition: { 
                duration: 2, 
                repeat: Infinity,
                delay: index * 0.3 
              }
            }}
          >
            {stat.value}
          </motion.div>
          <div className="text-gray-300">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceVisualization;