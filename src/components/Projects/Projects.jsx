import React from 'react';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Error404 from '../../assets/Preview-404-ERROR.jpg'


const Projects = () => {
  const projects = [
    {
      title: '404-NOT-FOUND-RESPONSIVE',
      image: Error404,
      link: 'https://error404-kalethabh.vercel.app/'
    },
    {
      title: 'Ecommerce Bodu Gemu',
      image: 'ruta-de-la-imagen-2.jpg',
      link: 'https://front-project-board-games.vercel.app/'
    },
    {
      title: 'Project 3',
      image: 'ruta-de-la-imagen-2.jpg',
    },
    {
      title: 'Project 4',
      image: 'ruta-de-la-imagen-2.jpg',
    },
    {
      title: 'Project 5',
      image: 'ruta-de-la-imagen-2.jpg',
    },
    {
      title: 'Project 6',
      image: 'ruta-de-la-imagen-2.jpg',
    },
  ];

  return (
    <div className="lg:overflow-hidden xl:overflow-hidden 2xl:overflow-hidden">
      <Navbar />
      <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:justify-center justify-center md:flex flex mx-auto md:h-screen lg:mt-10 md:mt-16 lg:py-0 md:py-0 xl:py-0 2xl:py-0 mt-2 py-24">
        <Link
              to="/skills"
              className="font-mono mt-40  text-4xl text-[#00E0FF] hover:text-[#00FF57]  md:py-2 rounded-md font-medium block mb-4 text-center floating-text-arrow"
            >
              <span className="inline-block align-middle">&lt;</span>
            </Link>
              <div className='md:px-10 lg:px-24 px-4'>
                <h2 className="text-4xl font-mono text-center mb-8 text-[#00FF57]">Projects</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-5  gap-8 ">
                  {projects.map((project, index) => (
                    <Link to={project.link} key={index} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#85f1ff] duration-300 bg-gray-700 md:p-6 lg:p-8 p-4 rounded-md">
                      <img className=" md:h-20 object-cover rounded-md mb-4" src={project.image} alt={project.title} />
                      <h3 className="md:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-xs font-semibold text-white mb-2">{project.title}</h3>
                     
                    </Link>
                  ))}
                </div>
              </div>
        <Link
              to="/contact"
              className="font-mono mt-40 text-4xl text-[#00E0FF] hover:text-[#00FF57] md:py-2 rounded-md font-medium block mb-4 text-center floating-text-arrow"
            >
              <span className="inline-block align-middle">&gt;</span>
            </Link>
      </div>
      </motion.div>
    </div>
  );
};

export default Projects;
