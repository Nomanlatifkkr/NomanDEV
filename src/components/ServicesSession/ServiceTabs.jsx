// src/components/Services/ServiceTabs.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const ServiceTabs = ({ services }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {services.map((service, index) => (
          <motion.button
            key={service.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-full font-medium text-sm relative ${
              activeTab === index 
                ? 'text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeTab === index && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 bg-gray-800 rounded-full z-0"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center">
              <span className="mr-2 text-lg">{service.icon}</span>
              {service.title}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Tab content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
      >
        <h3 className="text-2xl font-bold text-white mb-2">
          {services[activeTab].title}
        </h3>
        <p className="text-gray-300 mb-4">
          {services[activeTab].description}
        </p>
        <div className="flex flex-wrap gap-2">
          {services[activeTab].features.map((feature, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-200"
            >
              {feature}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceTabs;