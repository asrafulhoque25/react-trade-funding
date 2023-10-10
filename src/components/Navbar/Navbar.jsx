import React, { useEffect, useState, Fragment, useRef } from "react";
import logo from "/assets/img/logo.svg";
import bar from "/assets/img/bar.svg";
import arrow_down from "/assets/img/arrow_down.svg";
import './Navbar.css'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  // const navItems = [
  //     {link:"Home",path:"home"}
  // ]
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 py-5">
   <div className="container mx-auto">
   <nav>
        <div className="flex space-x-5 justify-between items-center">
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <ul className="flex space-x-11 items-center">
            <li>
              <a href="#" className=" text-dark-dark-1 text-base transition-all hover:text-primary-main font-bold">Home</a>
            </li>
            <li>
              <a href="#" className=" text-dark-dark-1 text-base transition-all hover:text-primary-main font-bold">About</a>
            </li>
            <li className="navbar-dropdown text-dark-dark-1 text-base transition-all hover:text-primary-main font-bold cursor-pointer" onClick={toggleDropdown} >
              Products <span className=" inline-flex ps-1"><img src={arrow_down} alt="" /></span>
              {showDropdown && (
                <ul className="dropdown-content">
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className=" text-dark-dark-1 text-base transition-all hover:text-primary-main font-bold">Partners</a>
            </li>
            <li>
              <a href="#" className=" text-dark-dark-1 text-base transition-all hover:text-primary-main font-bold">Blog</a>
            </li>
          </ul>
          <div className="flex space-x-5 items-center">
            <a href="#" className="px-3 py-1 log-in border-dark-dark-1 border transition-all hover:bg-secondary-main hover:border-secondary-main">Login</a>
            <a href="#" className="px-3 py-1 log-in border-secondary-main border bg-secondary-main transition-all hover:border-dark-dark-1 hover:bg-transparent ">Join</a>
            <a href="#">
                <img src={bar} alt="" />
            </a>
          </div>
        </div>
      </nav>
   </div>
    </header>
  );
};

export default Navbar;
