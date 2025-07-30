import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <FiMail className="text-primary h-6 w-6" />,
      title: "Email",
      value: "NomanLatif@gmail.com",
      link: "mailto:nomanlatif672@gmail.com"
    },
    {
      icon: <FiPhone className="text-primary h-6 w-6" />,
      title: "Phone",
      value: "+92 305 9824400",
      link: "tel:+923059824400"
    },
    {
      icon: <FiMapPin className="text-primary h-6 w-6" />,
      title: "Location",
      value: "Bahawalnagar, Pakistan",
      link: "https://maps.app.goo.gl/GRRUfvz5CogNcDbg9"
    }
  ];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-2xl"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-primary/10 transition-colors">
              {item.icon}
            </div>
            <div>
              <h4 className="text-gray-400 text-sm">{item.title}</h4>
              <p className="text-white font-medium">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;