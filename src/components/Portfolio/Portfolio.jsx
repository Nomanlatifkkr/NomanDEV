import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from './PortfolioCard';
import PortfolioModal from './PortfolioModal';
import { project1, project2, project3, project4, project5, project8 } from '../../assets';

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React & Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      image: project2,
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Analytics dashboard with real-time data visualization",
      tags: ["Next.js", "Tailwind", "Firebase"],
      image: project3,
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application",
      tags: ["React Native", "GraphQL", "AWS"],
      image: project4,
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "GPT-3 powered content creation tool",
      tags: ["Next.js", "OpenAI", "Node.js"],
      image: project5,
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto price tracking dashboard",
      tags: ["React", "CoinGecko API", "Firebase"],
      image: project1,
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Travel Booking Platform",
      description: "Hotel and flight booking web application",
      tags: ["Next.js", "MongoDB", "Stripe"],
      image: project8,
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="relative py-20 bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
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
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Selected projects that showcase my skills and expertise
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard 
              key={project.id} 
              project={project}
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedId && (
            <PortfolioModal
              project={projects.find(p => p.id === selectedId)}
              onClose={() => setSelectedId(null)}
            />
          )}
        </AnimatePresence>
      </div>
     
    </section>
  );
};

export default Portfolio;