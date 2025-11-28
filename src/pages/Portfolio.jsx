import React, { useEffect, useState } from "react";
import PillNav from "../components/PillNav";
import Home from "./Home";
import About from "./About";
import logo from "../assets/logo.png";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Achievements from "./Achievements";
import Footer from "./Footer";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Portfolio = () => {
  const [activeHref, setActiveHref] = useState(
    window.location.hash || window.location.pathname
  );

  useEffect(() => {
    const onHashChange = () =>
      setActiveHref(window.location.hash || window.location.pathname);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div>
      {/* Sticky Navbar */}
      <div className="sticky top-5 z-50 bg-black">
        <PillNav logo={logo} items={navItems} activeHref={activeHref} />
      </div>

      {/* Main content with anchor targets */}
      <div className="pt-[var(--nav-h, 42px)]">
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          {/* Add your Projects component/content here */}
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
