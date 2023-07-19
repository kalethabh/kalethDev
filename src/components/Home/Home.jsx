import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./Home.css"

const Home = () => {
  return (
     
    <div className="bg-[#1D1F21] min-h-screen">
      <Navbar />
      <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:p-20 md:flex flex py-24 ">
      <Link
          to="/contact"
          className="font-mono md:mt-40 mt-44 text-4xl text-[#00E0FF] hover:text-[#00FF57] md:px-4 md:py-2 rounded-md font-medium block md:mb-0 text-center floating-text-arrow"
        >
          <span className="inline-block align-middle">&lt;</span>
        </Link>
        <div className="md:text-center md:mt-16 lg:mt-2 text-center">
          <h1 className="md:text-7xl md:text-center text-4xl font-mono tracking-wide text-[#05FF00] floating-text">
            ¡Bienvenidos!
          </h1>
          <h2 className="mt-5 px-8 md:text-xl md:px-5 lg:px-10 lg:mt-10 font-mono justify-center text-[#ffffff] floating-text">
            ¡Bienvenidos a mi portafolio. Soy un desarrollador junior fullstack con experiencias básicas en React, HTML, CSS, JavaScript, PostgresDB, Git, Node.js y Express. Aquí podrás explorar mi trabajo y descubrir mi pasión por crear interfaces de usuario interactivas y atractivas. Estoy entusiasmado por seguir aprendiendo y creciendo en el campo del desarrollo web. ¡Espero que disfrutes navegando por mi sitio!
          </h2>
        </div>
        <Link
          to="/skills"
          className="font-mono  md:mt-40 mt-44 text-4xl text-[#00E0FF] hover:text-[#00FF57] md:px-4 md:py-2 rounded-md font-medium block md:mb-0 text-center floating-text-arrow"
        >
          <span className="inline-block align-middle">&gt;</span>
        </Link>
      </div>
      </motion.div>
    </div>
  );
};

export default Home;
