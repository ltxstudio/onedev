import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      {/* 3D Galaxy Background */}
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

          {/* Rotating Spheres */}
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[2, 100, 200]} position={[2, 1, -5]}>
              <MeshDistortMaterial
                color="#ff6f61"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0}
              />
            </Sphere>
          </Float>

          <Float speed={3} rotationIntensity={1.5} floatIntensity={3}>
            <Sphere args={[1.5, 100, 200]} position={[-3, -2, -6]}>
              <MeshDistortMaterial
                color="#61dafb"
                attach="material"
                distort={0.6}
                speed={3}
                roughness={0}
              />
            </Sphere>
          </Float>

          {/* Orbit Controls for interaction */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

          {/* Ambient and Directional Lights */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[2, 5, 2]} />
        </Canvas>
      </div>

      {/* About Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-light relative z-10"
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
