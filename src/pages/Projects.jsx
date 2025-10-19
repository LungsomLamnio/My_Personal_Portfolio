import React from "react";

const projectItems = [
  {
    title: "Krishi Sakhi (SIH 2025)",
    description:
      "AI-powered agricultural advisor for Indian farmers, awarded winner at Smart India Hackathon 2025.",
  },
  {
    title: "Intelligent Traffic Management System",
    description:
      "Real-time dashboard and ML-based traffic flow management for smart cities.",
  },
  {
    title: "React Portfolio (Three.js)",
    description:
      "Responsive portfolio site with 3D graphics, animated timeline, and beautiful interactions.",
  },
  {
    title: "Open Source: GSSoC Contributor",
    description:
      "Meaningful contributions to open source projects under GirlScript Summer of Code.",
  },
];

const Projects = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#232946] via-[#1a1725] to-[#20153c] py-24 px-2">
    <h2 className="text-4xl font-bold mb-12 text-center text-sky-100">
      Projects
    </h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
      {projectItems.map((proj, idx) => (
        <div
          key={idx}
          className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-2xl border border-white/20 hover:bg-white/20 transition group"
        >
          <h3 className="text-2xl font-bold mb-4 text-purple-200 group-hover:text-purple-300 transition">
            {proj.title}
          </h3>
          <p className="text-base text-sky-50 group-hover:text-white transition">
            {proj.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
