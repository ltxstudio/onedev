import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Build responsive and dynamic websites.',
    icon: <FaCode className="text-4xl text-blue-500" />,
  },
  {
    title: 'Mobile Development',
    description: 'Develop cross-platform mobile applications.',
    icon: <FaMobileAlt className="text-4xl text-green-500" />,
  },
  {
    title: 'Backend Development',
    description: 'Create secure and efficient server-side applications.',
    icon: <FaDatabase className="text-4xl text-orange-500" />,
  },
];

const Services = () => (
  <div>
    <Navbar />
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-12">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">{service.title}</h3>
            <p className="text-center text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
    <Footer />
  </div>
);

export default Services;
