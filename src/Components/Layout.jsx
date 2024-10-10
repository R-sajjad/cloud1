import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percentage = (scrollTop / totalHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 bg-[#0ea5e9]" style={{ width: `${scrollPercentage}%` }} />
  );
};

const Layout = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsNavFixed(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <nav className={`flex flex-col md:flex-row justify-between bg-[#0c0a09] ${isNavFixed ? 'fixed top-0 left-0 w-full z-10' : ''}`}>
        <ul className={`flex flex-col text-1xl md:flex-row justify-center gap-8 md:justify-between text-white font-mono space-y-4 md:space-y-0 md:space-x-4 p-4 ${isMobileNavOpen ? '' : 'hidden md:flex'}`}>
          <li className="hover:text-[#0ea5e9]">
            <Link to="/" onClick={toggleMobileNav}>Home</Link>
          </li>
          <li className="hover:text-[#0ea5e9]">
            <Link to="/about" onClick={toggleMobileNav}>About</Link>
          </li>
          <li className="hover:text-[#0ea5e9]">
            <Link to="/projects" onClick={toggleMobileNav}>Projects</Link>
          </li>
          <li className="hover:text-[#0ea5e9]">
            <Link to="/technologies" onClick={toggleMobileNav}>Technologies</Link>
          </li>
          <li className="hover:text-[#0ea5e9]"> 
            <Link to="/contact" onClick={toggleMobileNav}>Contact</Link>
          </li>
          <li className="hover:text-[#0ea5e9]">
            <Link to="/resume" onClick={toggleMobileNav}>Resume</Link>
          </li>
        </ul>

        <div className="flex items-center cursor-pointer mt-4 md:mt-0 md:ml-10 space-x-4 mr-5">
          <div className="h-10 w-10 p-0.4 hover:bg-white cursor-pointer hover:rounded-full">
            <img src="public\icons8-github-48.png" alt="GitHub" />
          </div>

          <div className="dark:md:hover:bg-white  h-10 w-10 p-1 hover:bg-white hover:rounded-full">
            <img src="public\icons8-behance-48 (1).png" alt="Behance" className='' />
          </div>

          {/* Close Button for Mobile Navigation */}
          <button className="md:hidden " onClick={toggleMobileNav}>
            <svg className="h-6 w-6 fill-current  text-white" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

      </nav>
      <Outlet />
      <ScrollIndicator />
    </>
  );
};

export default Layout;
