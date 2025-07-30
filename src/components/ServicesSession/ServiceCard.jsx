import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative bg-black border border-white/20 rounded-2xl p-6 shadow-[0_0_40px_rgba(34,255,137,0.1)] overflow-hidden group"
    >
      {/* Green Glow Background Circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-primary/20 blur-3xl z-0"></div>
      </div>

      {/* Top Glow Dot */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_30px_rgba(34,255,137,0.6)]"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center text-center">
        {/* Icon */}
        <div className="text-6xl mb-4 text-white/80 transition duration-500 group-hover:scale-110 group-hover:text-white">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">{service.title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4">{service.description}</p>

        {/* Features */}
        <ul className="mt-auto space-y-2 text-white/90 text-sm text-left w-full max-w-xs mx-auto">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Overlay */}
      <motion.div 
        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none"
      />
    </motion.div>
  );
};

export default ServiceCard;
