import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const techs = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Fullstack" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "React Native", category: "Mobile" },
    { name: "Tailwind CSS", category: "Styling" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h4 className="text-xl font-bold text-white">Tech Stack</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(74, 222, 128, 0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 cursor-default"
          >
            <p className="font-medium text-white">{tech.name}</p>
            <p className="text-xs text-primary">{tech.category}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;