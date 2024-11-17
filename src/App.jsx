import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Resume from './pages/Resume';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
     <Home />
     <About />
     <Services />
<Testimonials />
<Blog />
<Portfolio />

  );
};

export default App;
