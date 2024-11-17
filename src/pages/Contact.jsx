import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { init } from '@emailjs/browser'; // EmailJS import
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Initialize EmailJS with your User ID (This step only needs to be done once)
  init('YOUR_USER_ID'); // Replace with your EmailJS user ID

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Sending the email through EmailJS
      const result = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
      console.log(result.text); // Success message in the console

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending the message.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const canvas = document.getElementById('spaceCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star particle properties
    const stars = [];
    const numStars = 300;

    class Star {
      constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
      }

      // Update star position
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      // Draw the star
      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Generate stars
    function generateStars() {
      for (let i = 0; i < numStars; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speed = Math.random() * 0.5 + 0.2;
        stars.push(new Star(x, y, size, speed));
      }
    }

    // Animate the stars
    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animateStars);
    }

    generateStars();
    animateStars();
  }, []);

  return (
    <div className="relative">

      {/* Navbar Component */}
      <Navbar />

      {/* Fullscreen Space Background */}
      <canvas id="spaceCanvas" className="absolute top-0 left-0 z-0"></canvas>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 relative z-10 bg-light"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

          {success && (
            <div className="text-center mb-4 text-green-500">
              <p>Message sent successfully!</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full mb-4 p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full mb-4 p-3 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              className="w-full mb-4 p-3 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Google Map Embed */}
        <div className="mt-16 max-w-full overflow-hidden">
          <h3 className="text-2xl text-center mb-4">Find Me Here</h3>
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <iframe
              title="Google Map"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed/v1/place?q=Saikot+house&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-github text-3xl"></i>
            </a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Contact;
