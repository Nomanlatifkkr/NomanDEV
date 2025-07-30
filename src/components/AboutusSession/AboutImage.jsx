import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/images/profileimg.png"; // Replace with your image

const AboutImage = () => {
  const floatingTechs = [
    { name: "React", x: -40, y: -30, delay: 0.2 },
    { name: "Next.js", x: 40, y: -20, delay: 0.4 },
    { name: "Node.js", x: -50, y: 30, delay: 0.6 },
    { name: "MongoDB", x: 50, y: 20, delay: 0.8 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      {/* Profile Image with Glow Effect */}
      <div className="relative z-10">
        <motion.img
          src={profileImg}
          alt="Noman"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div className="absolute inset-0 rounded-full bg-primary opacity-20 blur-xl -z-10" />
      </div>

      {/* Floating Tech Icons */}
      {floatingTechs.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: tech.delay, type: "spring" }}
          viewport={{ once: true }}
          animate={{
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity, delay: tech.delay },
          }}
          className={`absolute gap-4 bg-dark border border-primary/50 rounded-full px-3 py-1 text-sm font-medium shadow-lg z-20`}
          style={{ left: `calc(55% + ${tech.x}px)`, top: `calc(80% + ${tech.y}px)` }}
        >
          {tech.name}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutImage;