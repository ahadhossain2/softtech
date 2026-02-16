import React from "react";
import { Menus } from "../Data/utils";
import DesktopMenu from "./Header/DesktopMenu";
import MobMenu from "./Header/MobMenu";

const Navbar = () => {
  return (
    <header className="h-16 text-[15px] fixed top-0 left-0 right-0 flex items-center bg-white/95 border-b border-gray-200 z-50 shadow-lg">
      <nav className="px-4 flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-x-3">
          <a
            href="/home"
            className="flex items-center text-xl font-extrabold tracking-wide text-[#1E5470] hover:text-[#031A09] transition-colors"
          >
            <img
              src="https://i.ibb.co/xSnVq4zQ/softtechlogo.png"
              alt="SoftTech Logo"
              className="w-8 h-8 object-contain rounded-md mr-3"
            />
            SoftTech
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-x-4 items-center">
          {Menus.map((menu, index) => (
            <DesktopMenu menu={menu} key={index} />
          ))}
        </ul>

        <div className="flex items-center gap-x-4">
          {/* Contact Button */}
          <a
            href="/contact"
            className="relative hidden lg:inline-flex items-center justify-center 
             px-6 py-2 overflow-hidden font-semibold text-white 
             rounded-lg group transition-all duration-300 ease-out"
          >
            {/* Background */}
            <span
              className="absolute inset-0 w-full h-full bg-gradient-to-r 
                   from-blue-600 to-indigo-600 
                   group-hover:from-indigo-600 group-hover:to-blue-600 
                   transition-all duration-500 ease-out rounded-lg"
            ></span>

            {/* Shine Effect */}
            <span
              className="absolute left-0 w-0 h-full bg-white opacity-20 
                   transform skew-x-12 group-hover:w-full 
                   transition-all duration-700 ease-out"
            ></span>

            {/* Text */}
            <span
              className="relative z-10 group-hover:tracking-wider 
                   transition-all duration-300"
            >
              Contact Us
            </span>
          </a>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
