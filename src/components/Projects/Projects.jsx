import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Error404 from '../../img/Preview-404-ERROR.jpg'
import Ecommerce from '../../img/Preview-ecommerce.jpg'
import Login from '../../img/Login.png'


const Projects = () => {
  const projects = [
    {
      title: '404-NOT-FOUND-RESPONSIVE',
      image: Error404,
      description: '',
      link: 'https://error404-kalethabh.vercel.app/'
    },
    {
      title: 'Ecommerce Bodu Gemu',
      image: Ecommerce,
      description: '',
      link: 'https://front-project-board-games.vercel.app/'
    },
    {
      title: 'Component-Login-Responsive',
      image: Login,
      description: '',
      link: 'https://login-kalethabh.vercel.app',

    }
  ];

  return (
    <div className="lg:overflow-hidden xl:overflow-hidden 2xl:overflow-hidden min-h-screen">
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
              class="font-mono mt-40  text-4xl text-[#00E0FF] hover:text-[#00FF57]  md:py-2 rounded-md font-medium block mb-4 text-center floating-text-arrow"
            >
              <span className="inline-block align-middle">&lt;</span>
            </Link>
              <div className='md:px-10 lg:px-10 px-4'>
                <h2 className="text-5xl font-mono text-center mb-8 text-[#00FF57]">Projects</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-5 gap-8 justify-center">
                  {projects.map((project, index) => (
                    <Link to={project.link} key={index} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#85f1ff] duration-300 bg-gray-700 md:p-6 lg:p-10 xl:p-12 p-4 rounded-md">
                      <img className="md:h-32 w-42 object-cover rounded-md mb-4" src={project.image} alt={project.title} />
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
