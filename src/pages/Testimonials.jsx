import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'Amazing work! Highly professional and creative.',
  },
  {
    name: 'Jane Smith',
    feedback: 'Excellent developer, great attention to detail.',
  },
  {
    name: 'Michael Lee',
    feedback: 'Delivers high-quality projects on time.',
  },
];

const Testimonials = () => {
  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-12 text-yellow-100">What People Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-800 text-gray-200 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaQuoteLeft className="text-5xl text-yellow-400 mb-6 mx-auto" />
              <p className="text-lg mb-4 italic">{testimonial.feedback}</p>
              <h4 className="text-xl font-semibold text-yellow-200">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Testimonials;
