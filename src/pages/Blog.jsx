import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts = [
  {
    title: 'Understanding React Hooks',
    description: 'An in-depth look at how React Hooks work and why they are so powerful.',
    link: '/blog/react-hooks',
  },
  {
    title: 'Building Scalable Web Applications',
    description: 'How to scale web applications for thousands of users using modern web technologies.',
    link: '/blog/scalable-applications',
  },
  {
    title: 'CSS Grid and Flexbox: The Ultimate Guide',
    description: 'A comparison between CSS Grid and Flexbox, and when to use each of them.',
    link: '/blog/css-grid-vs-flexbox',
  },
];

const Blog = () => {
  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-light"
      >
        <h2 className="text-3xl font-bold text-center mb-12">My Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 container mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-lg mb-4">{post.description}</p>
              <Link
                to={post.link}
                className="text-primary font-semibold hover:text-secondary"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Blog;
