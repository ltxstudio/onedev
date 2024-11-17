import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  return (
    <div>
      {/* 3D Animated Galaxy Background */}
      <AnimatedBackground />
      
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center text-white relative z-10 px-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Welcome to My Portfolio
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          I'm a passionate developer crafting impactful digital experiences.
        </motion.p>
        
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="bg-white text-black py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-all"
        >
          Learn More About Me
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 text-center bg-gradient-to-r from-gray-800 via-gray-900 to-black relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
        >
          About Me
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
        >
          I am a passionate web developer skilled in React, JavaScript, Node.js, and more. I enjoy building impactful applications that enhance user experience.
        </motion.p>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
