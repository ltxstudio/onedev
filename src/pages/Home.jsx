import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="h-screen flex items-center justify-center text-center text-white relative z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="bg-white text-dark py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-light transition-all"
        >
          Learn More About Me
        </Link>
      </section>

      <AnimatedBackground />

      <section
        id="about"
        className="py-20 text-center bg-light relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-4"
        >
          About Me
        </motion.h2>
        <p className="text-lg text-dark max-w-3xl mx-auto">
          I am a passionate web developer skilled in React, JavaScript, Node.js, and more. I enjoy building impactful applications that enhance user experience.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
