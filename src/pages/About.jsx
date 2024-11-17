import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      {/* 3D Animated Background */}
      <div className="relative w-full h-[400px]">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} />
          <Sphere visible args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#6C63FF"
              attach="material"
              distort={0.3}
              speed={1.5}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* About Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-light"
      >
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg mb-6 text-gray-700">
            I'm a dedicated web developer passionate about creating impactful web experiences. 
            With a strong background in front-end and full-stack development, I aim to build user-friendly, 
            accessible, and responsive applications that solve real-world problems.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express.js'].map((skill, index) => (
              <div key={index} className="bg-primary text-white text-center py-3 px-6 rounded-lg shadow-md">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default About;
