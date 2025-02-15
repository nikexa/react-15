import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] mt-[-85px] text-white bg-center max-xl:mt-[-120px]" style={{backgroundImage: "url('/404-Space .png')"}}>
      <h1 className="text-6xl font-bold mt-[400px] mb-[20px] max-md:text-[20px] max-md:tracking-[5px]">Oops! Page Not Found</h1>
      <p className="text-lg mb-6 max-md:text-[15px]">The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-[#419EBB] py-2 px-6 rounded-md text-lg font-semibold">
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;