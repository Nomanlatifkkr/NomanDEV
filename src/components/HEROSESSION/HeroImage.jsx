import { motion, useTransform } from 'framer-motion';
import heroImg from "../../assets/images/profileimg.png";
import { FaReact, FaNodeJs } from "react-icons/fa";

const HeroImage = ({ scrollYProgress }) => {
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <motion.div
      className="w-full flex justify-center"
      style={{ y: yImage, rotate, scale }}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="relative group w-fit">
        {/* Profile Image */}
        <motion.img
          src={heroImg}
          alt="Noman Latif"
          className="w-64 md:w-80 lg:w-96 rounded-2xl shadow-2xl relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500 "
          whileHover={{ scale: 1.04 }}
        />

        {/* Glow Background */}
        <div className="absolute -inset-5 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/20 to-transparent blur-2xl -z-10 group-hover:opacity-60 transition-opacity duration-500" />

        {/* React Badge */}
        <motion.div 
          className="absolute -top-6 -left-6 bg-black/80 border border-primary/60 rounded-full p-3 shadow-lg flex items-center gap-2 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.1 }}
        >
          <FaReact className="text-primary" />
          <span className="text-sm text-primary font-semibold">React</span>
        </motion.div>

        {/* Node Badge */}
        <motion.div 
          className="absolute -bottom-6 -right-6 bg-black/80 border border-primary/60 rounded-full p-3 shadow-lg flex items-center gap-2 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.1 }}
        >
          <FaNodeJs className="text-primary" />
          <span className="text-sm text-primary font-semibold">Node.js</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
