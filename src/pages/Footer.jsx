import React from "react";
// Removed: FontAwesomeIcon, faGithub, faLinkedin, etc. imports
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Footer container using a dark, dense color and purple accent border
    <footer className="w-full bg-gray-950 text-gray-400 py-8 border-t border-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Central Content: Copyright and Build Info */}
        <div className="text-center">
          {/* Copyright */}
          <p className="text-sm mb-2">
            &copy; {currentYear} Lungsom Lamnio. All rights reserved.
          </p>

          {/* Build Info */}
          <p className="text-xs flex items-center justify-center">
            Built with{" "}
            <FaHeart className="text-purple-500 mx-1 animate-pulse" /> &{" "}
            <span className="text-purple-400 ml-1">React & Tailwind CSS.</span>
          </p>
        </div>

        {/* Removed: Navigation Links (Center Section) */}
        {/* Removed: Social Icons (Right Section) */}
      </div>
    </footer>
  );
};

export default Footer;
