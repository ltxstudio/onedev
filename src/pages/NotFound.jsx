import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">Page Not Found</p>
      <Link
        to="/"
        className="px-8 py-4 bg-primary text-white rounded-full hover:bg-secondary transition-all"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
