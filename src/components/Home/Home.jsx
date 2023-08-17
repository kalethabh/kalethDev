import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./Home.css"

const Home = () => {
  return (
     
    <div className=" min-h-screen">
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
          Saludos! 👋 Me entusiasma profundamente el arte de crear soluciones tecnológicas integrales. Mi foco principal se centra en el Desarrollo Web Full Stack, una disciplina que abarca tanto el diseño de interfaces atractivas y funcionales mediante el uso de herramientas como HTML, CSS y JavaScript, como la construcción de aplicaciones interactivas y escalables utilizando tecnologías avanzadas como React, Redux, NodeJS y Express. También me siento cómodo trabajando con bases de datos como PostgreSQL y Sequelize para garantizar una gestión eficiente de la información. Sí te intereza mi perfil aquí te dejo mi CV para que le eches un vistazo, no dudes en contactarme!.
          </h2>
            <button className="transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300 p-6">
              <a href="/assets/CV Kaleth Benjumea-ac6ba3ec.pdf" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] font-mono border-4 p-1 text-2xl bg-[#16bd4d] border-[#16bd4d] rounded-md">Descargar CV</a>
          </button>
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
