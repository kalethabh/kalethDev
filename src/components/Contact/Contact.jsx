import React from 'react';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  const socialMediaLinks = [
    { name: 'Faceboock', url:'https://www.facebook.com/kalethabh/',img:'' },
    { name: 'GitHub', url: 'https://github.com/kalethabh', img:'' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/', img:'' },
    { name: 'Instagram', url: 'https://www.instagram.com/', img:'' },
    { name: 'Twitter', url: 'https://twitter.com/', img:'' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center md:mt-14 2xl:mt-10 lg:mt-10 mt-24">
          <Link
            to="/projects"
            className="font-mono md:mt-40 mt-32 text-4xl text-[#00E0FF] hover:text-[#00FF57] font-medium text-center floating-text-arrow"
          >
            <span className="inline-block align-middle">&lt;</span>
          </Link>
          <div className="md:flex md:flex-col md:justify-center md:px-40 md:items-center">
            <h2 className="text-4xl font-mono text-center mb-8 text-[#00FF57]">Contact</h2>
            <div className="flex flex-col items-center md:space-y-20 lg:space-y-20 2xl:space-y-14 space-y-12 md:mt-8 ">
              {socialMediaLinks.map((link) => (
                <button className="transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-110 duration-200">
                  <img src={link.img} alt={link.name}/>
                  <a
                    key={link.name}
                    href={link.url}
                    className="hover:text-[#00E0FF]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  </a>
                </button>
              ))}
            </div>
            <Link className='flex justify-center p-10 text-white lg:font-extrabold lg:text-black'>kalethabh@gmail.com</Link>
          </div>
        <Link
          to="/home"
          className="font-mono mt-36 md:mt-40 text-4xl text-[#00E0FF] hover:text-[#00FF57] font-medium floating-text-arrow"
        >
          <span className="inline-block align-middle">&gt;</span>
        </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialMedia;
