import { useEffect, useState } from "react";
import "./Navbar.css";
import Topnavbar from "./Topnavbar";
import arrow_down from "/assets/img/arrow_down.svg";
import cornerArrow from "/assets/img/corner-arrow.svg";
import topArrow from "/assets/img/drop-top.svg";

import { Link } from "react-router-dom";
import arrowBack from "/assets/img/arrow-back.svg";
import bar from "/assets/img/bar.svg";
import logo from "/assets/img/logo.svg";
import menuBar from "/assets/img/menu-bar.svg";
import menuCross from "/assets/img/menuCross.svg";
import mobilelogo from "/assets/img/mobile-logo.svg";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toggle, setToggle]= useState(false);
  const toggleDropdown = () => {
    setToggle(!toggle);
  };

  const menuDropdown = () => {
    setShowDropdown(!showDropdown);
  };



  const toggleMenu = () => {
    setToggle(!toggle);
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

const [showProductDropdown, setShowProductDropdown] = useState(false)

  const mobileDropdown =()=>{
    setShowProductDropdown(true)
  }

  return (
    <div>
      <header className={`w-full bg-white md:bg-white fixed top-0 left-0 right-0 z-50 ${toggle ? 'min-h-screen' : 'min-h-0'}`}>
        <Topnavbar />
        <div className="container mx-auto">
          <nav className="nav-for-desktop">
            <div className="flex space-x-5 justify-between items-center py-6">
              <a href="#">
                <img src={logo} alt="" />
              </a>
              <ul className="flex space-x-11 items-center">
                <li>
                  <Link
                    to={"/"}
                    className=" text-dark-dark-1 text-base transition-all hover:text-primary-main font-bold"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className=" text-dark-dark-1 text-base transition-all hover:text-primary-main font-bold" >
                    About
                  </Link>
                </li>
                <li
                  className="navbar-dropdown text-dark-dark-1 text-base transition-all hover:text-primary-main font-bold cursor-pointer"
                  onClick={menuDropdown} >
                  Products{" "}
                  <span className=" inline-flex ps-1">
                    <img src={arrow_down} alt="" />
                  </span>
                  {showDropdown && (
                    <div className="dropdown-content">
                      <img
                        src={topArrow}
                        className="absolute -top-3 left-1/2 -translate-x-1/2"
                        alt=""
                      />
                      <div>
                        <Link className="flex items-center justify-between text-[#FF5E5A] font-normal ">
                          Solutions
                          <span>
                            <img src={cornerArrow} className="" alt="" />
                          </span>
                        </Link>
                        <div className="nav-dropdown-row grid grid-cols-2 gap-[32px]">
                          <div>
                            <p className="pb-[10px] mt-[20px] border-b border-b-[#8E97A6] text-dark-dark-1 text-base font-normal ">
                              Grow
                            </p>
                            <Link className="flex link-dropdown items-center justify-between text-dark-dark-1 text-sm font-normal transition-all hover:text-primary-main py-[12px] cursor-pointer">
                              Solutions
                              <span className="">
                                {/* <img src={cornerArrow} className="" alt="" /> */}
                                <svg
                                  width="12"
                                  height="13"
                                  viewBox="0 0 12 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11.5781 6.12187L5.675 0.998437C5.62969 0.959375 5.57188 0.9375 5.51094 0.9375H4.12813C4.0125 0.9375 3.95938 1.08125 4.04688 1.15625L9.51875 5.90625H0.375C0.30625 5.90625 0.25 5.9625 0.25 6.03125V6.96875C0.25 7.0375 0.30625 7.09375 0.375 7.09375H9.51719L4.04531 11.8438C3.95781 11.9203 4.01094 12.0625 4.12656 12.0625H5.55625C5.58594 12.0625 5.61562 12.0516 5.6375 12.0312L11.5781 6.87813C11.6322 6.83109 11.6756 6.77299 11.7053 6.70776C11.735 6.64253 11.7504 6.57168 11.7504 6.5C11.7504 6.42832 11.735 6.35747 11.7053 6.29224C11.6756 6.22701 11.6322 6.16891 11.5781 6.12187V6.12187Z" />
                                </svg>
                              </span>
                            </Link>
                            <p className=" text-sm text-dark-dark-3 font-normal">
                              Compare the best in market lending products and
                              providers to access the right products for your
                              business. Limits from $5K - $1Mil.
                            </p>
                          </div>
                          <div>
                            <p className="pb-[10px] mt-[20px] border-b border-b-[#8E97A6] text-dark-dark-1 text-base font-normal ">
                              Save
                            </p>
                            <Link className="flex link-dropdown items-center justify-between text-dark-dark-1 text-sm font-normal transition-all hover:text-primary-main py-[12px] cursor-pointer">
                              Business payments
                              <span className="">
                                {/* <img src={cornerArrow} className="" alt="" /> */}
                                <svg
                                  width="12"
                                  height="13"
                                  viewBox="0 0 12 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11.5781 6.12187L5.675 0.998437C5.62969 0.959375 5.57188 0.9375 5.51094 0.9375H4.12813C4.0125 0.9375 3.95938 1.08125 4.04688 1.15625L9.51875 5.90625H0.375C0.30625 5.90625 0.25 5.9625 0.25 6.03125V6.96875C0.25 7.0375 0.30625 7.09375 0.375 7.09375H9.51719L4.04531 11.8438C3.95781 11.9203 4.01094 12.0625 4.12656 12.0625H5.55625C5.58594 12.0625 5.61562 12.0516 5.6375 12.0312L11.5781 6.87813C11.6322 6.83109 11.6756 6.77299 11.7053 6.70776C11.735 6.64253 11.7504 6.57168 11.7504 6.5C11.7504 6.42832 11.735 6.35747 11.7053 6.29224C11.6756 6.22701 11.6322 6.16891 11.5781 6.12187V6.12187Z" />
                                </svg>
                              </span>
                            </Link>
                            <p className=" text-sm text-dark-dark-3 font-normal">
                              Compare the best in market payments products and
                              providers to improve how your business transacts
                              and cut costs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    to={"/partners"}
                    href="#"
                    className=" text-dark-dark-1 text-base transition-all hover:text-primary-main font-bold"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/blog"}
                    href="#"
                    className=" text-dark-dark-1 text-base transition-all hover:text-primary-main font-bold"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
              <div className="flex space-x-5 items-center">
                <a
                  href="#"
                  className="px-3 py-1 text-base font-bold text-dark-dark-1 border-dark-dark-1 border transition-all hover:bg-secondary-main hover:border-secondary-main"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="px-3 py-1 text-base font-bold text-dark-dark-1 border-secondary-main border bg-secondary-main transition-all hover:border-dark-dark-1 hover:bg-transparent "
                >
                  Join
                </a>
                <a href="#">
                  <img src={bar} alt="" />
                </a>
              </div>
            </div>
          </nav>
          <nav className="nav-for-mobile">
            {!showProductDropdown && <div className="mobile-nav-wrapper flex items-center gap-6 justify-between py-[20px]">
              <Link>
                <img src={mobilelogo} alt="" />
              </Link>
              <Link onClick={toggleDropdown}>
                <img src={menuBar} alt="" />
              </Link>
            </div>}
     { toggle && <div className=" flex flex-col justify-between w-full  h-[86vh] py-6">
              <ul className={`mobile-menu-items list-none flex flex-col gap-y-3 ${showProductDropdown && "hidden"}` }>
                <li>
                  <Link
                    to={"/"}
                    className=" text-dark-dark-2 text-base transition-all hover:text-primary-main font-bold d-block "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className=" text-dark-dark-2 text-base transition-all hover:text-primary-main font-bold d-block "
                  >
                    About
                  </Link>
                </li>
                <li
                  className="navbar-dropdown text-dark-dark-2 text-base transition-all d-block  hover:text-primary-main font-bold cursor-pointer"
                  onClick={mobileDropdown}
                >
                  Products{" "}
                  <span className=" inline-flex ps-1">
                    <img src={arrow_down} alt="" />
                  </span>
                  {showDropdown && (
                    <div className="dropdown-content">
                      <img
                        src={topArrow}
                        className="absolute -top-3 left-1/2 -translate-x-1/2"
                        alt=""
                      />
                      <div>
                        <Link className="flex items-center justify-between text-[#FF5E5A] font-normal ">
                          Solutions
                          <span>
                            <img src={cornerArrow} className="" alt="" />
                          </span>
                        </Link>
                        <div className="nav-dropdown-row grid grid-cols-2 gap-[32px]">
                          <div>
                            <p className="pb-[10px] mt-[20px] border-b border-b-[#8E97A6] text-dark-dark-1 text-base font-normal ">
                              Grow
                            </p>
                            <Link className="flex link-dropdown items-center justify-between text-dark-dark-1 text-sm font-normal transition-all hover:text-primary-main py-[12px] cursor-pointer">
                              Solutions
                              <span className="">
                                {/* <img src={cornerArrow} className="" alt="" /> */}
                                <svg
                                  width="12"
                                  height="13"
                                  viewBox="0 0 12 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11.5781 6.12187L5.675 0.998437C5.62969 0.959375 5.57188 0.9375 5.51094 0.9375H4.12813C4.0125 0.9375 3.95938 1.08125 4.04688 1.15625L9.51875 5.90625H0.375C0.30625 5.90625 0.25 5.9625 0.25 6.03125V6.96875C0.25 7.0375 0.30625 7.09375 0.375 7.09375H9.51719L4.04531 11.8438C3.95781 11.9203 4.01094 12.0625 4.12656 12.0625H5.55625C5.58594 12.0625 5.61562 12.0516 5.6375 12.0312L11.5781 6.87813C11.6322 6.83109 11.6756 6.77299 11.7053 6.70776C11.735 6.64253 11.7504 6.57168 11.7504 6.5C11.7504 6.42832 11.735 6.35747 11.7053 6.29224C11.6756 6.22701 11.6322 6.16891 11.5781 6.12187V6.12187Z" />
                                </svg>
                              </span>
                            </Link>
                            <p className=" text-sm text-dark-dark-3 font-normal">
                              Compare the best in market lending products and
                              providers to access the right products for your
                              business. Limits from $5K - $1Mil.
                            </p>
                          </div>
                          <div>
                            <p className="pb-[10px] mt-[20px] border-b border-b-[#8E97A6] text-dark-dark-1 text-base font-normal ">
                              Save
                            </p>
                            <Link className="flex link-dropdown items-center justify-between text-dark-dark-1 text-sm font-normal transition-all hover:text-primary-main py-[12px] cursor-pointer">
                              Business payments
                              <span className="">
                                {/* <img src={cornerArrow} className="" alt="" /> */}
                                <svg
                                  width="12"
                                  height="13"
                                  viewBox="0 0 12 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11.5781 6.12187L5.675 0.998437C5.62969 0.959375 5.57188 0.9375 5.51094 0.9375H4.12813C4.0125 0.9375 3.95938 1.08125 4.04688 1.15625L9.51875 5.90625H0.375C0.30625 5.90625 0.25 5.9625 0.25 6.03125V6.96875C0.25 7.0375 0.30625 7.09375 0.375 7.09375H9.51719L4.04531 11.8438C3.95781 11.9203 4.01094 12.0625 4.12656 12.0625H5.55625C5.58594 12.0625 5.61562 12.0516 5.6375 12.0312L11.5781 6.87813C11.6322 6.83109 11.6756 6.77299 11.7053 6.70776C11.735 6.64253 11.7504 6.57168 11.7504 6.5C11.7504 6.42832 11.735 6.35747 11.7053 6.29224C11.6756 6.22701 11.6322 6.16891 11.5781 6.12187V6.12187Z" />
                                </svg>
                              </span>
                            </Link>
                            <p className=" text-sm text-dark-dark-3 font-normal">
                              Compare the best in market payments products and
                              providers to improve how your business transacts
                              and cut costs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    to={"/partners"}
                    href="#"
                    className=" text-dark-dark-2 text-base transition-all hover:text-primary-main font-bold d-block "
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/blog"}
                    href="#"
                    className=" text-dark-dark-2 text-base transition-all hover:text-primary-main font-bold d-block "
                  >
                    Blog
                  </Link>
                </li>
              </ul>
              <div className={`mobile-dropdown-items ${!showProductDropdown && "hidden"}`}>
                    <div className="mobile-dropdown-top flex items-center gap-4 justify-between py-[18px]">
                    <Link className="flex items-center gap-3 text-sm text-dark-dark-1" onClick={()=>setShowProductDropdown(false)}><img src={arrowBack} alt="" /> Back</Link>
                    <Link onClick={()=>setShowProductDropdown(false)}><img src={menuCross} alt="" /></Link>
                    </div>
                    <div className="mobile-dropdown-items-content">
                    <div className="nav-dropdown-row grid grid-cols-1 gap-[32px]">
                          <div>
                            <p className="pb-[10px] mt-[20px] border-b border-b-[#8E97A6] text-dark-dark-1 text-base font-normal ">
                              Grow
                            </p>
                            <Link className="flex link-dropdown items-center justify-between text-dark-dark-1 text-sm font-normal transition-all hover:text-primary-main py-[12px] cursor-pointer">
                              Solutions
                              <span className="">
                                {/* <img src={cornerArrow} className="" alt="" /> */}
                                <svg
                                  width="12"
                                  height="13"
                                  viewBox="0 0 12 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11.5781 6.12187L5.675 0.998437C5.62969 0.959375 5.57188 0.9375 5.51094 0.9375H4.12813C4.0125 0.9375 3.95938 1.08125 4.04688 1.15625L9.51875 5.90625H0.375C0.30625 5.90625 0.25 5.9625 0.25 6.03125V6.96875C0.25 7.0375 0.30625 7.09375 0.375 7.09375H9.51719L4.04531 11.8438C3.95781 11.9203 4.01094 12.0625 4.12656 12.0625H5.55625C5.58594 12.0625 5.61562 12.0516 5.6375 12.0312L11.5781 6.87813C11.6322 6.83109 11.6756 6.77299 11.7053 6.70776C11.735 6.64253 11.7504 6.57168 11.7504 6.5C11.7504 6.42832 11.735 6.35747 11.7053 6.29224C11.6756 6.22701 11.6322 6.16891 11.5781 6.12187V6.12187Z" />
                                </svg>
                              </span>
                            </Link>
                            <p className=" text-sm text-dark-dark-3 font-normal">
                              Compare the best in market lending products and
                              providers to access the right products for your
                              business. Limits from $5K - $1Mil.
                            </p>
                          </div>
                          <div>
                            <p className="pb-[10px] mt-[20px] border-b border-b-[#8E97A6] text-dark-dark-1 text-base font-normal ">
                              Save
                            </p>
                            <Link className="flex link-dropdown items-center justify-between text-dark-dark-1 text-sm font-normal transition-all hover:text-primary-main py-[12px] cursor-pointer">
                              Business payments
                              <span className="">
                                {/* <img src={cornerArrow} className="" alt="" /> */}
                                <svg
                                  width="12"
                                  height="13"
                                  viewBox="0 0 12 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11.5781 6.12187L5.675 0.998437C5.62969 0.959375 5.57188 0.9375 5.51094 0.9375H4.12813C4.0125 0.9375 3.95938 1.08125 4.04688 1.15625L9.51875 5.90625H0.375C0.30625 5.90625 0.25 5.9625 0.25 6.03125V6.96875C0.25 7.0375 0.30625 7.09375 0.375 7.09375H9.51719L4.04531 11.8438C3.95781 11.9203 4.01094 12.0625 4.12656 12.0625H5.55625C5.58594 12.0625 5.61562 12.0516 5.6375 12.0312L11.5781 6.87813C11.6322 6.83109 11.6756 6.77299 11.7053 6.70776C11.735 6.64253 11.7504 6.57168 11.7504 6.5C11.7504 6.42832 11.735 6.35747 11.7053 6.29224C11.6756 6.22701 11.6322 6.16891 11.5781 6.12187V6.12187Z" />
                                </svg>
                              </span>
                            </Link>
                            <p className=" text-sm text-dark-dark-3 font-normal">
                              Compare the best in market payments products and
                              providers to improve how your business transacts
                              and cut costs.
                            </p>
                          </div>
                        </div>
                    </div>
            </div>
              <div className="grid grid-cols-2 mx-5 space-x-5 items-center justify-center">
                <a
                  href="#"
                  className="px-3 py-1 text-center text-base block font-bold text-dark-dark-1 border-dark-dark-1 border transition-all hover:bg-secondary-main hover:border-secondary-main"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="px-3 py-1 text-center text-base block font-bold text-dark-dark-1 border-secondary-main border bg-secondary-main transition-all hover:border-dark-dark-1 hover:bg-transparent "
                >
                  Join
                </a>
              </div>
            </div>}


    


          </nav>
        </div>
      </header>

      <div className="dropdown-main-wrap max-w-[746px] w-full px-[40px] pt-[20px] pb-[30px]">
        {/* <h3>lsakdfjalsdkjflkj</h3> */}
      </div>
    </div>
  );
};

export default Navbar;
