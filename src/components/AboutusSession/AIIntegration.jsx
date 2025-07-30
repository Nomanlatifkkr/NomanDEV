import React from "react";
import { motion } from "framer-motion";

const AIIntegration = () => {
  const aiTools = [
    { name: "OpenAI API", usage: "Chatbots, Text Generation" },
    { name: "TensorFlow.js", usage: "Browser-based ML" },
    { name: "LangChain", usage: "AI Automation" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h4 className="text-xl font-bold text-white">AI & Automation</h4>
      <div className="space-y-3">
        {aiTools.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 rounded-lg p-3"
          >
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div>
              <p className="font-medium text-white">{tool.name}</p>
              <p className="text-xs text-gray-400">{tool.usage}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AIIntegration;