// src/components/Services/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import ServiceTabs from './ServiceTabs';
import ServiceVisualization from './ServiceVisualization';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern, responsive websites with React, Next.js & Tailwind CSS",
      icon: "🌐",
      features: ["SEO Optimized", "Lightning Fast", "Mobile First"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Cross-platform apps with React Native & Flutter",
      icon: "📱",
      features: ["iOS & Android", "Offline Support", "Push Notifications"],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Backend Solutions",
      description: "Scalable APIs with Node.js, Express & MongoDB",
      icon: "⚙️",
      features: ["REST/GraphQL", "Authentication", "Database Design"],
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Beautiful interfaces with Figma & Tailwind CSS",
      icon: "🎨",
      features: ["Prototyping", "Design Systems", "User Testing"],
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              width: Math.random() * 8 + 2 + 'px',
              height: Math.random() * 8 + 2 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cutting-edge solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Interactive Service Tabs */}
        <ServiceTabs services={services} />

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* 3D Visualization Component */}
        <ServiceVisualization />
      </div>
    </section>
  );
};

export default Services;