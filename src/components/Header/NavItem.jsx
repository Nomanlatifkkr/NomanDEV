import { motion } from 'framer-motion';

const NavItem = ({ label, href, onClick, mobile = false }) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`relative group ${
        mobile 
          ? 'block text-2xl text-center py-4 text-white/90 hover:text-white font-medium w-full'
          : 'px-3 py-2 text-white/90 hover:text-white font-medium'
      } cursor-pointer transition-all duration-300 cursor-hover-target`}
      whileHover={{ 
        scale: mobile ? 1.02 : 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
      <motion.span 
        className={`absolute ${
          mobile ? 'left-1/2 -bottom-1' : 'left-1/2 bottom-0'
        } h-0.5 bg-primary`}
        initial={{ width: 0, x: '-50%' }}
        whileHover={{ 
          width: mobile ? '40%' : '80%',
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      />
    </motion.a>
  );
};

export default NavItem;