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
        className="py-20 bg-light text-center"
      >
        <h2 className="text-3xl font-bold mb-8">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaQuoteLeft className="text-primary text-4xl mb-4" />
              <p className="text-lg mb-4">{testimonial.feedback}</p>
              <h4 className="text-xl font-semibold">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Testimonials;
