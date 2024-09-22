import React, { useState, useEffect, useRef } from 'react';
import { Link } from "@remix-run/react";

const menuItems = [
  { name: 'home', link: "home" },
  { name: 'about', link: "about-us" },
  { name: 'service', link: "service" },
  { name: 'projects', link: "project" },
  { name: 'contact', link: "contact-us" } // Ensure this matches the actual ID
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navListRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-secondary-200 py-5 font-sans font-normal fixed top-0 left-0 w-full z-50 border-b-2 border-secondary-100">
      <div className="container flex justify-between lg:flex-col xl:flex-row gap-3">
        {/* Brand Image */}
        <div className="flex items-center">
          <Link to="#home">
            <img src="assets/img/logo.png" alt="Solo Codes" className="w-[100px]" />
          </Link>
        </div>

        {/* Nav Items */}
        <ul
          className={`bg-secondary-200 z-10 text-gray-400 capitalize gap-11 items-center 
            max-lg:py-2 max-lg:absolute max-lg:w-full max-lg:right-0 
            max-lg:top-[79px] max-lg:border-[0.01em] max-lg:border-x-0 border-y-red-[#101624] 
            lg:flex lg:uppercase ${isNavOpen ? '' : 'hidden'}`}
          ref={navListRef}
        >
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="max-lg:py-2 max-lg:px-5 hover:text-primary-100 hover:opacity-70 duration-100"
            >
              <Link to={`#${item.link}`} onClick={handleLinkClick}>
                {item.name}
              </Link>
            </li>
          ))}
          <li className="text-[11px] hidden lg:block">|</li>
          <li className="hidden lg:flex">
            <div className="mt-2 mr-4">
              <svg className="fill-gray-400" viewBox="0 0 513.64 513.64" width="14px">
                <g>
                  <g>
                    <path
                      d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="text-primary-gradient">+880 1648 949926</div>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="flex items-center lg:hidden">
          <span className="text-gray-300 text-2xl" onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
