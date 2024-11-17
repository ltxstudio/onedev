import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web application built with React.',
      github: 'https://github.com/project1',
      live: 'https://live-project1.com',
    },
    {
      title: 'Project 2',
      description: 'A Node.js backend application.',
      github: 'https://github.com/project2',
      live: 'https://live-project2.com',
    },
  ];

  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-light"
      >
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 container mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary">
                  <FaGithub className="text-2xl" />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-secondary">
                  <FaExternalLinkAlt className="text-2xl" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Portfolio;
