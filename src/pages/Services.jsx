import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Build responsive and dynamic websites.',
    icon: <FaCode className="text-4xl text-cyan-500" />,
  },
  {
    title: 'Mobile Development',
    description: 'Develop cross-platform mobile applications.',
    icon: <FaMobileAlt className="text-4xl text-green-400" />,
  },
  {
    title: 'Backend Development',
    description: 'Create secure and efficient server-side applications.',
    icon: <FaDatabase className="text-4xl text-orange-500" />,
  },
];

const Services = () => {
  // JavaScript-based Background Animation
  useEffect(() => {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate random particles
    const particles = [];
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;  // Shrink particle

        // Boundary conditions to reset particles
        if (this.x + this.size > canvas.width || this.x - this.size < 0) this.speedX = -this.speedX;
        if (this.y + this.size > canvas.height || this.y - this.size < 0) this.speedY = -this.speedY;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, 0.8)`; // White color for particles
        ctx.strokeStyle = `rgba(255, 255, 255, 0.8)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Create particles on mouse move
    canvas.addEventListener('mousemove', (e) => {
      const particleCount = 10;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(e.x, e.y));
      }
    });

    // Animation Loop
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.2) particles.splice(i, 1);
      }

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }, []);

  return (
    <div>
      <Navbar />
      
      {/* Full Background Animation */}
      <canvas id="backgroundCanvas" className="absolute top-0 left-0 z-0"></canvas>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-500 text-white z-10"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-100">Our Services</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">{service.title}</h3>
              <p className="text-center text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Services;
