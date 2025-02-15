import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] text-white">
      <h1 className="text-6xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-lg mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-[#419EBB] py-2 px-6 rounded-md text-lg font-semibold">
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;