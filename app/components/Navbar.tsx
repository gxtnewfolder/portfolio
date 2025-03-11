'use client';

import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleClick = (): void => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300 z-10">
      <div className="text-2xl">Arnat Ngawsuwan</div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="scale-125" />
        ) : (
          <FaTimes className="scale-125" />
        )}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? "menu-hide" : "menu-show"}>
        <li className="py-5 text-xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-5 text-xl">
          <Link onClick={handleClick} to="education" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className="py-5 text-xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-5 text-xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-5 text-xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 rounded-r-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/arnat0228/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-r-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/gxtnewfolder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E84F4B] rounded-r-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:arnat.ngaw@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-r-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://resume.io/r/Il4d70nvH"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar; 