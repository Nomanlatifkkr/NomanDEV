import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const SocialLinks = () => {
  const socials = [
    {
      icon: <FiGithub className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/Nomanlatifkkr",
      color: "hover:bg-gray-700"
    },
    {
      icon: <FiLinkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/noman-latif-a776b0294/",
      color: "hover:bg-blue-600"
    },
    {
      icon: <FiTwitter className="h-5 w-5" />,
      name: "Twitter",
      url: "https://twitter.com/nomandev",
      color: "hover:bg-blue-400"
    },
    {
      icon: <FiInstagram className="h-5 w-5" />,
      name: "Instagram",
      url: "https://www.instagram.com/khokharhoyar250/",
      color: "hover:bg-pink-600"
    }
  ];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-2xl"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
      <div className="flex flex-wrap gap-3">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white ${social.color} transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {social.icon}
            <span>{social.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;