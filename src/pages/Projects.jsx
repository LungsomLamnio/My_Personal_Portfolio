import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // <-- REQUIRED IMPORTS

// Define the reveal animation variants (copied from About.jsx)
const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    // Use a function to accept index (i) for staggered delay
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Reduced duration for faster card reveals
      delay: i * 0.15, // Staggered delay based on index
      ease: "easeOut",
    },
  }),
};

const projectItems = [
  {
    title: "Intelligent Traffic Management System",
    description: "Real-time traffic flow management for smart cities.",
  },
  {
    title: "Krishi Sakhi (SIH 2025)",
    description: "AI-powered agricultural advisor App for Indian farmers.",
  },
  {
    title: "AgriCare (Solution Challenge 2025)",
    description:
      "AI-powered agricultural assistant Web App for Indian farmers.",
  },
  {
    title: "FindHome (Trek-A-Thon 2025)",
    description:
      "Online Travel Booking Platform specifically for the rural areas.",
  },
  {
    title: "EthniCraft (ByteHacks 2024)",
    description: "Digital platform to supports Indian Local Artisans.",
  },
  {
    title: "ReacTalk",
    description: "A secure chat app built using ReactJS.",
  },
];

const Projects = () => {
  // 1. Create a ref for the entire grid container
  const gridRef = useRef(null);
  // 2. Check if the grid is in view (trigger once, when 10% is visible)
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#232946] via-[#1a1725] to-[#20153c] py-24 px-2">
      {/* Header (Animate separately or keep simple) */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-sky-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Projects
      </motion.h2>

      {/* Grid Container */}
      <div
        ref={gridRef} // Attach ref to the container
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl"
      >
        {projectItems.map((proj, idx) => (
          // 3. Apply motion.div to each item
          <motion.div
            key={idx}
            variants={revealVariants}
            initial="hidden"
            // Pass the index (idx) to the visible variant for staggered delay
            animate={isGridInView ? "visible" : "hidden"}
            custom={idx}
            className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-2xl border border-white/20 hover:bg-white/20 transition group"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-200 group-hover:text-purple-300 transition">
              {proj.title}
            </h3>
            <p className="text-base text-sky-50 group-hover:text-white transition">
              {proj.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
