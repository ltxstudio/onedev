import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPost = ({ title, content }) => {
  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-light"
      >
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-center mb-6">{title}</h1>
          <div className="text-lg text-dark mb-12">
            {content}
          </div>
          <div className="text-center">
            <Link
              to="/blog"
              className="text-primary font-semibold hover:text-secondary"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default BlogPost;
