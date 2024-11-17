import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Build responsive and dynamic websites.',
    icon: <FaCode className="text-4xl text-primary" />,
  },
  {
    title: 'Mobile Development',
    description: 'Develop cross-platform mobile applications.',
    icon: <FaMobileAlt className="text-4xl text-primary" />,
  },
  {
    title: 'Backend Development',
    description: 'Create secure and efficient server-side applications.',
    icon: <FaDatabase className="text-4xl text-primary" />,
  },
];

const Services = () => (
  <div>
    <Navbar />
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 bg-light"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            {service.icon}
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
    <Footer />
  </div>
);

export default Services;
