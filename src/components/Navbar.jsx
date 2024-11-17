import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's system preference for dark mode
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(userPrefersDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white'
      } p-4 shadow-lg fixed w-full top-0 z-50 transition-all`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-2xl">
          <Link to="/" className="hover:text-gray-200 transition-all">My Portfolio</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-200 text-lg transition-all">Home</Link>
          <Link to="/portfolio" className="hover:text-gray-200 text-lg transition-all">Portfolio</Link>
          <Link to="/blog" className="hover:text-gray-200 text-lg transition-all">Blog</Link>
          <Link to="/about" className="hover:text-gray-200 text-lg transition-all">About</Link>
          <Link to="/contact" className="hover:text-gray-200 text-lg transition-all">Contact</Link>
          <Link to="/services" className="hover:text-gray-200 text-lg transition-all">Services</Link>
          <Link to="/testimonials" className="hover:text-gray-200 text-lg transition-all">Testimonials</Link>
          <Link to="/resume" className="hover:text-gray-200 text-lg transition-all">Resume</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="text-2xl hover:text-gray-200">
            {darkMode ? '🌙' : '🌞'}
          </button>

          <button onClick={() => setIsMobile(!isMobile)} className="text-2xl hover:text-gray-200">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-blue-900 text-white p-6 rounded-lg shadow-lg">
          <button onClick={() => setIsMobile(false)} className="self-end text-3xl text-white hover:text-gray-200">
            <FaTimes />
          </button>
          <Link to="/" onClick={() => setIsMobile(false)} className="hover:text-gray-200 text-lg">Home</Link>
          <Link to="/portfolio" onClick={() => setIsMobile(false)} className="hover:text-gray-200 text-lg">Portfolio</Link>
          <Link to="/blog" onClick={() => setIsMobile(false)} className="hover:text-gray-200 text-lg">Blog</Link>
          <Link to="/about" onClick={() => setIsMobile(false)} className="hover:text-gray-200 text-lg">About</Link>
          <Link to="/contact" onClick={() => setIsMobile(false)} className="hover:text-gray-200 text-lg">Contact</Link>
          <Link to="/services" onClick={() => setIsMobile(false)} className="hover:text-gray-200 text-lg">Services</Link>
          <Link to="/resume" onClick={() => setIsMobile(false)} className="hover:text-gray-200 text-lg">Resume</Link>
          <Link to="/testimonials" onClick={() => setIsMobile(false)} className="hover:text-gray-200 text-lg">Testimonials</Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
