import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-primary text-white py-6 text-center"
    >
      <div className="container mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
