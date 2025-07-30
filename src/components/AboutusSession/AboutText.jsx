import React from "react";
import { motion } from "framer-motion";

const AboutText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white">
        Noman <span className="text-primary">Latif</span>
      </h3>
      <p className="text-gray-300">
        A <span className="text-primary font-medium">BSCS graduate</span> from{" "}
        <span className="font-medium">KFUEIT, Pakistan</span> with expertise in{" "}
        <span className="text-primary font-medium">MERN Stack</span>,{" "}
        <span className="text-primary font-medium">React Native</span>, and{" "}
        <span className="text-primary font-medium">Next.js</span>.
      </p>
      <p className="text-gray-300">
        I build <span className="text-primary font-medium">high-performance web apps</span> and have experience with{" "}
        <span className="text-primary font-medium">PHP, AI integration</span>, and modern design systems.
      </p>
    </motion.div>
  );
};

export default AboutText;