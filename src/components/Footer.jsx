import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-800 text-white py-8 px-4 sm:px-8 text-center"
    >
      <div className="container mx-auto">
        {/* Copyright */}
        <p className="text-sm sm:text-base mb-4 text-gray-400">
          &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-all transform hover:scale-110"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 transition-all transform hover:scale-110"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all transform hover:scale-110"
          >
            <FaTwitter className="text-3xl" />
          </a>
        </div>

        {/* Additional Links Section (Optional) */}
        <div className="flex justify-center space-x-8 sm:space-x-12">
          <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-all">Privacy Policy</a>
          <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-all">Terms & Conditions</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
