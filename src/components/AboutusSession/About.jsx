import React from "react";
import { motion } from "framer-motion";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";
import TechStack from "./TechStack";
import AIIntegration from "./AIIntegration";
import EducationCard from "./EducationCard";

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-dark overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-white"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image + Floating Tech Icons */}
          <AboutImage />

          {/* Right Side: Bio + Tech Stack */}
          <div className="space-y-8">
            <AboutText />
            <TechStack />
            <AIIntegration />
          </div>
        </div>

        {/* Education Card (Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <EducationCard />
        </motion.div>
      </div>
    </section>
  );
};

export default About;