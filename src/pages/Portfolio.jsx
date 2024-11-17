import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the list of repositories from GitHub
    const fetchProjects = async () => {
      const response = await fetch('https://api.github.com/users/ltxstudio/repos');
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="relative">
      {/* 3D Animated Background */}
      <AnimatedBackground />
      
      <Navbar />
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 container mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-900">{project.name}</h3>
              <p className="text-lg text-gray-700 mb-4">{project.description || 'No description available.'}</p>
              
              <div className="flex justify-between">
                {project.html_url && (
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                )}
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                )}
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
