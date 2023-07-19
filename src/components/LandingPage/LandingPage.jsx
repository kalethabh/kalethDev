import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#000000] md:w-auto h-screen">
      <div className="flex items-center justify-center font-extrabold">
        <h1 className="text-[#00e1ff] lg:text-7xl xl:text-7xl 2xl:text-7xl md:text-7xl text-5xl">KALETH</h1>
        <h1 className="text-[#00FF57] lg:text-7xl xl:text-7xl 2xl:text-7xl md:text-7xl text-5xl">DEV</h1>
      </div>
      <button className="mt-4 font-extrabold text-[#ffff] md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-xl p-2 bg-[#003AD0] rounded-md">
        <Link to="/home">Know me</Link>
      </button>
    </div>
  );
};

export default LandingPage;
