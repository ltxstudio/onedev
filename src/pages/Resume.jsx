import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <section className="py-20 bg-light text-center">
        <h2 className="text-3xl font-bold mb-8">My Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="px-8 py-4 bg-primary text-white rounded-full hover:bg-secondary transition-all"
        >
          Download Resume
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default Resume;
