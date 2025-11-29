import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-950 text-gray-400 py-8 border-t border-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="text-sm mb-2">
            &copy; {currentYear} Lungsom Lamnio. All rights reserved.
          </p>

          <p className="text-xs flex items-center justify-center">
            Built with{" "}
            <FaHeart className="text-purple-500 mx-1 animate-pulse" /> &{" "}
            <span className="text-purple-400 ml-1">React & Tailwind CSS.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
