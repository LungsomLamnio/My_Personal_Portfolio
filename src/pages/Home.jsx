// src/pages/Home.jsx

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import Squares from "../components/Squares"; // Animated squares background
import SplitText from "../components/SplitText";
import TextType from "../components/TextType";
import LogoLoop from "../components/LogoLoop";
import logo from "../assets/react.svg";

const socialLogos = [
  {
    src: "https://github.blog/wp-content/uploads/2013/04/074d0b06-a5e3-11e2-8b7f-9f09eb2ddfae.jpg?resize=1234%2C701",
    alt: "GitHub",
    href: "https://github.com/yourhandle",
    title: "GitHub",
    width: 40,
    height: 40,
  },
  {
    src: "data:image/jpeg;base64,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",
    alt: "Twitter",
    href: "https://twitter.com/yourhandle",
    title: "Twitter",
    width: 40,
    height: 40,
  },
  {
    src: "data:image/png;base64,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",
    alt: "LinkedIn",
    href: "https://linkedin.com/in/yourhandle",
    title: "LinkedIn",
    width: 40,
    height: 40,
  },
  // Add more logos by URL here
];

// Loader component for suspense fallback, rendered inside 3D scene using Html from drei
const Loader = () => (
  <Html center>
    <span className="text-white">Loading 3D...</span>
  </Html>
);

// Load and render GLB 3D model with scale for larger size
const CubeModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={[1.3, 1.3, 1.3]} />; // adjust scale as needed
};

const Home = () => (
  <div className="relative w-full h-screen overflow-hidden bg-black flex">
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
    <div className="relative z-10 flex flex-col items-center justify-center h-full w-1/2 text-white p-8 text-center">
      <h1 className="text-5xl font-bold inline">
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
        text={["Full Stack Developer", "Open Source Contributor"]}
        as="h2"
        typingSpeed={70}
        deletingSpeed={40}
        pauseDuration={2000}
        className="text-white mt-4 text-3xl font-semibold"
        showCursor={true}
        cursorCharacter="|"
      />

      <div className="w-full mt-8">
        <LogoLoop
          logos={socialLogos}
          speed={120}
          direction="left"
          gap={32}
          logoHeight={40}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="rgba(255,255,255,0.1)"
          className="mx-auto max-w-md"
          ariaLabel="Social media handles"
        />
      </div>
    </div>

    {/* Right 3D Model */}
    <div className="relative z-10 w-1/2 h-full">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <CubeModel modelPath="/models/smart_cube.glb" />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  </div>
);

export default Home;
