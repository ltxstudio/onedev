import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Box } from '@react-three/drei';  // Correct import for OrbitControls
import { FaReact, FaJsSquare, FaNodeJs, FaCss3Alt, FaPython, FaGitAlt } from 'react-icons/fa';
import { DiMongodb, DiNodejs, DiDocker, DiPostgresql } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiGraphql } from 'react-icons/si';
import { MeshStandardMaterial } from '@react-three/fiber'; // Correct import for MeshStandardMaterial
import { DirectionalLight, AmbientLight } from '@react-three/fiber'; // Correct import for lights
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="relative">

      {/* 3D Background with rotating cubes */}
      <div className="absolute inset-0 z-[-1]">
        <Canvas>
          {/* Starry Sky */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            fade
          />

          {/* Rotating cubes for background animation */}
          <Box args={[2, 2, 2]} position={[-2, 1, -4]} rotation={[0.5, 0.5, 0]}>
            <MeshStandardMaterial color="#ff6347" />
          </Box>
          <Box args={[1.5, 1.5, 1.5]} position={[3, -2, -5]} rotation={[0.5, 1, 0]}>
            <MeshStandardMaterial color="#1E90FF" />
          </Box>

          {/* Orbit Controls for interaction */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

          {/* Ambient and Directional Lights */}
          <AmbientLight intensity={0.3} /> {/* Correct import for ambient light */}
          <DirectionalLight position={[2, 5, 2]} /> {/* Correct import for directional light */}
        </Canvas>
      </div>

      {/* Navbar Component */}
      <Navbar />

      {/* About Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 relative z-10 bg-light"
      >
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl font-bold text-dark mb-8">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            I'm a passionate web developer with experience in front-end and full-stack development. I specialize in creating user-friendly, responsive applications using modern technologies.
          </p>

          <h3 className="text-2xl font-semibold mb-8">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8">
            {/* React */}
            <div className="flex flex-col items-center text-center">
              <FaReact className="text-5xl text-blue-500 mb-4" />
              <p className="text-lg">React</p>
            </div>
            {/* JavaScript */}
            <div className="flex flex-col items-center text-center">
              <FaJsSquare className="text-5xl text-yellow-500 mb-4" />
              <p className="text-lg">JavaScript</p>
            </div>
            {/* Node.js */}
            <div className="flex flex-col items-center text-center">
              <FaNodeJs className="text-5xl text-green-500 mb-4" />
              <p className="text-lg">Node.js</p>
            </div>
            {/* CSS */}
            <div className="flex flex-col items-center text-center">
              <FaCss3Alt className="text-5xl text-blue-600 mb-4" />
              <p className="text-lg">CSS</p>
            </div>
            {/* Python */}
            <div className="flex flex-col items-center text-center">
              <FaPython className="text-5xl text-yellow-400 mb-4" />
              <p className="text-lg">Python</p>
            </div>
            {/* MongoDB */}
            <div className="flex flex-col items-center text-center">
              <DiMongodb className="text-5xl text-green-700 mb-4" />
              <p className="text-lg">MongoDB</p>
            </div>
            {/* Express.js */}
            <div className="flex flex-col items-center text-center">
              <DiNodejs className="text-5xl text-green-700 mb-4" />
              <p className="text-lg">Express.js</p>
            </div>
            {/* Docker */}
            <div className="flex flex-col items-center text-center">
              <DiDocker className="text-5xl text-blue-500 mb-4" />
              <p className="text-lg">Docker</p>
            </div>
            {/* Git */}
            <div className="flex flex-col items-center text-center">
              <FaGitAlt className="text-5xl text-red-600 mb-4" />
              <p className="text-lg">Git</p>
            </div>
            {/* PostgreSQL */}
            <div className="flex flex-col items-center text-center">
              <DiPostgresql className="text-5xl text-blue-700 mb-4" />
              <p className="text-lg">PostgreSQL</p>
            </div>
            {/* TypeScript */}
            <div className="flex flex-col items-center text-center">
              <SiTypescript className="text-5xl text-blue-600 mb-4" />
              <p className="text-lg">TypeScript</p>
            </div>
            {/* Tailwind CSS */}
            <div className="flex flex-col items-center text-center">
              <SiTailwindcss className="text-5xl text-cyan-400 mb-4" />
              <p className="text-lg">Tailwind CSS</p>
            </div>
            {/* Next.js */}
            <div className="flex flex-col items-center text-center">
              <SiNextdotjs className="text-5xl text-black mb-4" />
              <p className="text-lg">Next.js</p>
            </div>
            {/* GraphQL */}
            <div className="flex flex-col items-center text-center">
              <SiGraphql className="text-5xl text-pink-500 mb-4" />
              <p className="text-lg">GraphQL</p>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default About;
