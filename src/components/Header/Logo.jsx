import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="text-2xl md:text-3xl font-bold text-primary tracking-tighter font-urbanist"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative">
        Noman
        <motion.span 
          className="absolute -right-1 -bottom-1 w-2 h-2 bg-primary rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </span>
      <span className="text-white">Dev</span>
    </motion.div>
  );
};

export default Logo;