import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import Squares from "../components/Squares";
import SplitText from "../components/SplitText";
import TextType from "../components/TextType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FaChevronDown } from "react-icons/fa";

const socialLogos = [
  {
    node: <FontAwesomeIcon icon={faGithub} size="2x" color="#181717" />,
    alt: "GitHub",
    href: "https://github.com/LungsomLamnio",
    title: "GitHub",
  },
  {
    node: <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0A66C2" />,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/lungsom-lamnio-339914282/",
  },
  {
    node: <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F" />,
    alt: "Instagram",
    href: "https://www.instagram.com/lungsom.lamnio/",
  },
  {
    node: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
        alt="Twitter"
        className="h-4 w-4"
      />
    ),
    alt: "Twitter",
    href: "https://x.com/lungsom_lamnio",
    title: "Twitter",
  },
  {
    node: <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F3" />,
    alt: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100036725803105",
  },
];
// Loader component for suspense fallback
const Loader = () => (
  <Html center>
    <span className="text-white">Loading 3D...</span>
  </Html>
);

// CubeModel with desired rotation
const CubeModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      // Gentle floating
      ref.current.position.y = 0.2 + Math.sin(clock.getElapsedTime()) * 0.1;
      // Slow rotation
      ref.current.rotation.y = Math.PI / 5 + clock.getElapsedTime() * 0.25;
      ref.current.rotation.x =
        Math.PI / 7 + Math.sin(clock.getElapsedTime() * 0.3) * 0.07;
    }
  });

  return <primitive ref={ref} object={scene} scale={[1.3, 1.3, 1.3]} />;
};

const Home = () => {
  const [animateIn, setAnimateIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black via-[#120024] to-gray-900 flex">
      {/* Squares animated background */}
      <div className="absolute inset-0 w-full h-full">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#666"
          squareSize={40}
          hoverFillColor="#060010"
        />
      </div>

      {/* Left Animated Text */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full w-1/2 text-white p-8 text-center transition-all duration-1000 ease-in-out ${
          animateIn
            ? "translate-x-0 opacity-100"
            : "-translate-x-[80px] opacity-0"
        }`}
      >
        <h1 className="text-6xl font-bold inline">
          <>
            <SplitText
              text="Hi, I am "
              className="text-white overflow-visible"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              tag="span"
            />{" "}
            &nbsp;
            <SplitText
              text="Lungsom"
              className="text-purple-500 overflow-visible"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              tag="span"
            />{" "}
            <br />
          </>
        </h1>

        <TextType
          text={["Full Stack Web Developer", "Open Source Contributor"]}
          as="h2"
          typingSpeed={70}
          deletingSpeed={40}
          pauseDuration={2000}
          className="mt-4 text-4xl font-semibold ml-16"
          showCursor={true}
          cursorCharacter="|"
        />

        <div className="w-full mt-8 flex justify-center gap-6">
          {socialLogos.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title || item.alt}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:scale-110 transition-transform duration-200"
            >
              {React.cloneElement(item.node, {
                style: { width: "24px", height: "24px" },
              })}
            </a>
          ))}
        </div>

        {/* Added buttons below social icons */}
        <div className="w-full mt-6 flex justify-center gap-6">
          <a
            href="/LungsomLamnio.pdf"
            download
            className="px-8 py-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-purple-600 text-purple-600 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right 3D Model with slide-in animation */}
      <div
        className={`relative z-10 w-1/2 h-full transition-all duration-1000 ease-in-out ${
          animateIn
            ? "translate-x-0 opacity-100"
            : "translate-x-[80px] opacity-0"
        }`}
      >
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Suspense fallback={<Loader />}>
            <CubeModel modelPath="/models/smart_cube.glb" />
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
      </div>
      <button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute left-1/2 bottom-8 -translate-x-1/2 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg p-4 transition-all duration-300 animate-bounce z-20"
        aria-label="Scroll Down"
      >
        <FaChevronDown size={28} />
      </button>
    </div>
  );
};

export default Home;
