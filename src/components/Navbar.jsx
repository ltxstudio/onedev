import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg fixed w-full top-0 z-50"
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
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobile(!isMobile)}>
            <FaBars className="text-2xl hover:text-gray-200 transition-all" />
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
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
