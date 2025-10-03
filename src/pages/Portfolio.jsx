import React from "react";
import PillNav from "../components/PillNav";
import Home from "./Home"; // or use Outlet if nested routes are used
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  // Add more items
];

const Portfolio = () => {
  return (
    <div>
      {/* Sticky Navbar */}
      <div className="sticky top-5 z-50 bg-black">
        <PillNav
          logo={logo}
          items={navItems}
          activeHref={window.location.pathname}
        />
      </div>

      {/* Main content */}
      <div className="pt-[var(--nav-h, 42px)]">
        <Home />
        {/* Replace <Home /> with <Outlet /> if using react-router nested routes */}
      </div>
    </div>
  );
};

export default Portfolio;
