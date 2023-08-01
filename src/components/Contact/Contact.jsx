import React from 'react';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  const socialMediaLinks = [
    { name: 'GitHub', url: 'https://github.com/kalethabh', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAAh1BMVEUAAAD////6+vrS0tJqamrg4ODZ2dmtra339/fIyMjLy8vY2Njf39/k5OTc3Nzp6em4uLi+vr59fX2ampoxMTF3d3cqKiqLi4vw8PCoqKiFhYVnZ2d/f39bW1uGhoa8vLxOTk5CQkJWVlZGRkYmJiYZGRmRkZGWlpYcHBw5OTkMDAygoKA8PDwMPSO4AAALCklEQVR4nNVd2WLaMBAsNyYBTBISKDmckKa5/v/7WhcMvmTNrCWvOs841sT2ao/Z1Y8fHWA//Pk1Wc0W8+Wm3+v1ppvNcnQRPW2v73cfXdzfL27WX9Eo5dWA6eXqeviqvVIZbq4mi2Z2RSwm6/+L6e1dNGUInh5qdPefEN3FGwnBDJvJTpuBDeuoDcEMs3ttHmasZy4YHnmutdnUYR+7Y3hAvNfmVMLj3DXFFMs7bV5n3E58MDxgcqvN7h8Sh19iHWaJNsMfLxd+Kaa4eNGlSDk1cowTNYr7Dp5ihsGzCsV3J/s+jtVn9xy33VJM8dUxxaHIAW+L6bBDir8GGhRTzDp7Zx+1KKboxgl672jbMGH8yz/HK12KKa58c+x436jHzCvFRMWoVjFN/HF80yZ3xpsvjkG8qhkiLxRfW+Wn3GPpwcq+aJOqwnkEFsDOUYXjpN6XNp96OHXZPSZx2iF2xzEos1qEM79ALeZAcOGG41ibRzMuXXAcabOwYd6e46U2Bztas1QOHjG0fGM9Z8ddYdCG40p79ShauOsKaUcpJlKOP7VXzuBRxvFBe90cHiQcb7VXzUJSyQwsRrZjw3P8TzaPPOiN5Lf2iiW45jgGmOxAwBkfi+ivt4niOFp0mYWdD1bxylb17TMcrRFkcvjd527iRdtSWvrqMVOM2sJ3Irq8s902b8je37w68f1JPiln3bvhoteN9c7b0gVb2+stxaBcdrXeCN0t7W/gd+Wax6UTUkXEN5X7WMVtYHBp3z1qt92h669zUldV3lkv+41wBNw5QyJw6PJpxobCuf1KRBcMiHOMMs0rV5tKZPy07FYOsLBrYAkNpZaGELS/mS8Gs+gvZoOLy2XD/2OZiG6QwV6JBuzktOn618oeO4+2d8P9e81vf+2Hd5NZ5SVv3AaG9vVZXQKkIGBxhM8an010PawjV8b31XZw+udaMhlIBGhJE9i3yF5ll6witfOj7ZDT3NzcP/19pn2rzB5ZYXXryQOqCNgzDQ9C6dQrkMRATHhjhQQLPnR7GqDn0FSfxfZzXQH8E7LEBr8HsFwpEFviD1it1Py9gB5Lh4xqgCWDjY8SfJDKJK+xRZoeJephd8qpApCk4VHCyWQFnXQOqEajPt8DV5Sbt1rfQEUatX76M8qxl3TLqgS40la30+Flui6V4FXAfRqr6rWfMEd/CkUIePmiei1otFI4VAgJgK+zmlAn6jtORCVSJPg6K6koe4IoBw1yGRhhcXkXoZRlml1wzELL8TfD0R41ewS10OKl99S1Sx1+KbgafzEGJzWCiQrBFJzopuj1cBwdqNmkINUa+eQpJ2ZpTEn6BqcTz2c3ubdVd7wMpaDKv68UR+1ZDlQ59HwZUho4wU/XCQHCy84/ESgBdgRVlvcD5pmcQxGmFqUbZx1AmJCTkYRqA0e0Upa6wiux4KwobtVB5KCb+shA9KlkwS/h8z6pcjsDX3FmJ4lPMpQRVnhb1fGjJDSfNWkTJeBrPhTmCUdJZwBHHfA5TofiOv4Vq+Y9iviGF30oO+NuklDn7QWwamjx7+cwR+UiSBF4rif9NW53gnAEMuDLTi0PWrDrauwGClj+lTqieFY5DG8nA2wv0xwznDVRTQhUAb+B6eYOG1f1QLKId3TdqXmFnTpSq+8d6MLTNxDlGEQkmQdcw2OCybDsDuHZ3RAdINqkyoD7c17whElgxpVI9azxtIBi2rwecDL9Dg8/x9qkytijK//CHYegPNcUsMmc4A6P3+lbAsA5uyc8ixUcyV/oyiM8URscSdivm+Fis+C+Sfh1vcBneziaCeMOsOFZ4ENaFtqkynhGVz7CSQbnDMAO6RwnKehw9wtYX0WQDKAwWQScFJ8TQ4W0SZUBJyXnRGo5lGJPBlghcUlUbXXnylcBO6QXRHHS+4BcErAbMyN0XKElsmCFbkTUwMIpTh4AL/yJEDgFVLhLAcfMvS0zrkWbVhG4evWaUbqGlZPEa8c/GfF5WOYV3+CHxKstH5vmBfi698yPg4pDiLFIn5QMVJtYHsSA5B9ExVZf6ZoHHlikbQHEWLOA3AFC9Jpm4Jih0drUziBU86m9ZI44CefUROIgqFR9RHR4hVNRhxPLvWOISPw+mPeVaIQ8rJkZGqnbH3oGseZDAo7pYwskZYcLrLJPjHn0gWyVzNjyQ6xPtT8F8SipFR9TU8wlro+vEIEaHie5JgB9BNWQNDpexB2U0fWxelVQMx2zrl3GVvW0m+4Y+XmKk5PGkVRs9k1BtomeriNnl2r2bZMva06Yw57Qo+mnk0e0njPizyRJxc+SPU0oN6SVnXPZ15o7xB5El/dd6HPPlRwf+rSEfIKRP4ZAxcTyJ0Ik+cv5mcmbDg70LIEfQF90z+j3tdf9IEKm8/qIYjqcyYGc0Kmv/ik5Far0HERnSnSYoqTmBWUoGw4qcj6h31WHgewwofIgbVhyWMKsC/uzFs6Sr+zm4vNBvHuyifT8smoCVfTSH+A1wnyRHydYM2jRYHrGk993b9uo2TBNfBWh1y1OoavzV2p7J0an1/qjWUGx8LCffE9anetQ2+5Z98NCBtIiFJk55Zls2x4CUPtn66LK4oSIG1vKa/yVuCD4vl61n/9vsBR1Py19vID7d7GFBrybkLyt3Bx2Zfj7tQFpiSXW9dQfx2871hglV9uZu8O8TCqO+npYqcbDJD2nOE9JhNAIY1hff6dR8ZwXQt2UwBzp3I0NZjmOqRBfvAJW43GOrdtj5xpuZFp/seMO9EFIbZPTAwQbfU3TRUWdEmTf6aKJy5PnGm9kNJ6FJiYoJcRHYe5eWMtsC6ObUXj5AFso0KhxExQbYMuymR9S4cnYnUpJSdrVMUfWc/3McWV+57HK90StMmy5wgB7E6RZIVP4LG3pEtGEbWaAXgOAZIU5E18Q9Vo0I6JjaBkxoxnQRB1zqFH4WfNuKeJIl3PqgFm8D+P1xcCrKSsk7Cgla961AP1l865c9GIb/u/C7BYjmTMAbtExJlZKfc07404iTRK03kRG9nscYU7ClpvSDF7BTNqhB/dfmUDc2Bg0Vr612yrNy9/yhLMsU34G5YIYb1ZTyhrGZ8s/f7pvVYSmpkZXQRZnTDuWYZO/eRiuhy/ts6+ykkwGtv5tjO5a82gEM0+3CvqIeNOW5beLkjsjoQRBic30ebhnlkObaEtUkjF4NF7F9i1ICgewGIyPT/GynKS0kezT4H9Uj6J2BjFJuQzXFN/56xYVG54WSzKJQrypW6QkWy3IVH/2NZhYSLKlbNPkxY7pjReCjGRrU2j01WMfs0BEJB2Ye3MZa+Z+M+Elgo6EYU3FusH1QznqeH14jMWyFwFJR/9pi/pluoji7ddfbONocHAgxOPfeJLONGFEJ/gBYteP6Vj9B1nqsxYfpNakM5JOD0v45NK+YpJcPDl1beAp9Vc3JD1M0mOy22LDw5D0cgoNESF0QdJT5/E3nPrtgGTijlcJqChWTBJtbln47L4B/9PiMakgSc9C4g9IveCX5NT/BD3EyopJIjKXTnoYXuwPU0zSnkHvd9XXaK1YiKf6Wkl22IryYWm3EZO06D823c6zbI6JxNPvm0l23xjfZIDEXmUTyZVGZ+qt2TXwQHKsdQTd3qTEFY+dNJFcavaKv9QX+XF5Qgn1dnupfbJOUhdoisf41T3JyxAmc31XW1QdJrJmwUxBvi4FYeJUaFlcE/tJ1Auxy5vaFq3recXM6Ke79bnCW5bsWrZpHM3+WdOJ9rQYAz6+BvPRqmVKe7daLBex0y/xD1HKqot1IZWrAAAAAElFTkSuQmCC' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kaleth-alexander-benjumea-hern%C3%A1ndez-b848a4254/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrIIRXdssPOSjjn9xzyMUo9K58qNHCehhfg&usqp=CAU' },
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
                <button className="transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-110 duration-200" key={link.name}>
                  <a
                    href={link.url}
                    className="hover:text-[#ffffff]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className='w-12' src={link.img} />
                    {link.name}
                  </a>
                </button>
              ))}
            </div>
            <Link className='flex justify-center p-10 text-white lg:font-extrabol'>kalethabh@gmail.com</Link>
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
