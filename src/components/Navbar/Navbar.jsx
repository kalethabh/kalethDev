import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#000000] md:h-28 h-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 147 720 45"
        className="md:h-24 absolute md:top-3.5 top-2 left-0 h-20 w-screen"
      >
        <path
          fill="#00FF57"
          fillOpacity="0.8"
          d="M0,96L40,122.7C80,149,160,203,240,213.3C320,224,400,192,480,176C560,160,640,160,720,176C800,192,880,224,960,224C1040,224,1120,192,1200,170.7C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div className="px-4">
        <div className="md:flex flex decoration-2 md:text-xl justify-center md:space-x-16 lg:space-x-16 xl:space-x-16 2xl:space-x-16 space-x-4 md:py-6 py-6 relative">
          <Link
            to="/home"
            className="text-[#00f7ff] md:hover:text-[#00FF57] md:px-4 md:py-2 px-2 rounded-md font-medium block mb-4 md:mb-0 text-center"
          >
            Home
          </Link>
          <Link
            to="/skills"
            className="text-[#00f7ff] md:hover:text-[#00FF57] md:px-4 md:py-2 px-2 rounded-md font-medium block mb-4 md:mb-0 text-center"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-[#00f7ff] md:hover:text-[#00FF57] md:px-4 md:py-2 px-2 rounded-md font-medium block mb-4 md:mb-0 text-center"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-[#00E0FF] hover:text-[#00FF57] md:px-4 md:py-2 px-2 rounded-md font-medium block mb-4 md:mb-0 text-center"
          >
            Contact
          </Link>
        </div>
        <div className="md:absolute md:left-10 md:top-32 absolute top-28 lg:top-12 lg:left-10 flex items-center">
          <Link to="/" className='flex items-center'>
            <img
              className="md:h-10 md:w-10 h-8 w-8 rounded-full md:bg-[#00f7ff] lg:bg-[#000000] 2xl:bg-[#000000] bg-[#00f7ff] mr-2"
              src="{person.imageUrl}"
              alt=""
            />
            
            <h2 className="text-white 2xl:font-bold xl:font-bold md:font-bold font-bold lg:text-[#000000] 2xl:text-[#000000]">Kaleth Dev</h2>
            <i className="text-blue-400 ml-1 fas fa-check-circle"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
