import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-light"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="mb-8 text-lg text-dark">
            <p className="mb-4">
              Hello! I'm a passionate web developer with a love for creating engaging and dynamic web experiences. 
              I specialize in front-end development, particularly using modern frameworks like React, and I also have a background in full-stack development. 
              I thrive in environments where I can learn and grow while building projects that have a real-world impact.
            </p>
            <p className="mb-4">
              My main expertise lies in front-end technologies such as HTML, CSS, JavaScript, React, and I am constantly exploring new tools and libraries to stay up-to-date with the latest trends in web development.
              I'm also familiar with back-end technologies such as Node.js, Express, and MongoDB. 
            </p>
            <p className="mb-4">
              When I'm not coding, you can find me experimenting with design, reading the latest tech articles, or working on personal projects. 
              I believe in the power of collaboration and enjoy working in teams that foster creativity and innovation.
            </p>
            <p className="mb-4">
              If you’re looking for someone who’s eager to take on challenges, create high-quality code, and bring fresh ideas to the table, let’s connect!
            </p>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <ul className="flex flex-wrap justify-center gap-8">
              <li className="bg-primary text-white py-2 px-6 rounded-lg shadow-md">React</li>
              <li className="bg-primary text-white py-2 px-6 rounded-lg shadow-md">JavaScript</li>
              <li className="bg-primary text-white py-2 px-6 rounded-lg shadow-md">Node.js</li>
              <li className="bg-primary text-white py-2 px-6 rounded-lg shadow-md">CSS / Tailwind CSS</li>
              <li className="bg-primary text-white py-2 px-6 rounded-lg shadow-md">MongoDB</li>
              <li className="bg-primary text-white py-2 px-6 rounded-lg shadow-md">Express.js</li>
            </ul>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default About;
