import React from 'react';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'PostgresDB',
    'Git',
    'Responsive Design',
    'Tailwind'
  ];

  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex md:flex xl:mt-14 2xl:mt-10 md:mt-16 md:justify-center xl:flex xl:justify-center mt-24">
            <Link
              to="/home"
              className="font-mono md:mt-40 mt-40 text-4xl text-[#00E0FF] hover:text-[#00FF57] rounded-md font-medium block mb-4 md:mb-0 text-center floating-text-arrow"
            >
              <span>&lt;</span>
            </Link>
            <div className='md:px-14 xl:px-30 2xl:px-36 px-10'>
              <h2 className="md:text-4xl lg:text-5xl xl:text-5xl text-4xl font-mono text-center mb-8 text-[#05FF00]">
                SKILLS
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 2xl:grid-cols-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-clip-content lg:p-2 lx:-p-4 md:p-4 p-2 border-4 border-[#00E0FF] rounded-md flex items-center justify-center"
                  >
                    <span className="md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-sm font-mono text-[#ffffff]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
              <Link
                to="/projects"
                className="font-mono mt-40 text-4xl text-[#00E0FF] hover:text-[#00FF57]  md:py-2 rounded-md font-medium block mb-4 md:mb-0 text-center floating-text-arrow"
              >
                <span>&gt;</span>
              </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
