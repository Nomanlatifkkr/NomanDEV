import { motion } from 'framer-motion';

const MobileMenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none group cursor-hover-target"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <motion.span
        className="block w-6 h-0.5 bg-white mb-1.5 rounded-full"
        animate={isOpen ? 
          { rotate: 45, y: 7, backgroundColor: "#4ade80" } : 
          { rotate: 0, y: 0, backgroundColor: "#ffffff" }
        }
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-white mb-1.5 rounded-full"
        animate={isOpen ? 
          { opacity: 0 } : 
          { opacity: 1 }
        }
        transition={{ duration: 0.1 }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-white rounded-full"
        animate={isOpen ? 
          { rotate: -45, y: -7, backgroundColor: "#4ade80" } : 
          { rotate: 0, y: 0, backgroundColor: "#ffffff" }
        }
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default MobileMenuButton;