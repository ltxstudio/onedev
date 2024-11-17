import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-primary text-white p-4 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">My Portfolio</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <Link to="/portfolio" className="hover:text-secondary">Portfolio</Link>
          <Link to="/blog" className="hover:text-secondary">Blog</Link>
          <Link to="/about" className="hover:text-secondary">About</Link>
          <Link to="/contact" className="hover:text-secondary">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobile(!isMobile)}>
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>
      {isMobile && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
          <Link to="/" onClick={() => setIsMobile(false)} className="hover:text-secondary">Home</Link>
          <Link to="/portfolio" onClick={() => setIsMobile(false)} className="hover:text-secondary">Portfolio</Link>
          <Link to="/blog" onClick={() => setIsMobile(false)} className="hover:text-secondary">Blog</Link>
          <Link to="/about" onClick={() => setIsMobile(false)} className="hover:text-secondary">About</Link>
          <Link to="/contact" onClick={() => setIsMobile(false)} className="hover:text-secondary">Contact</Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
