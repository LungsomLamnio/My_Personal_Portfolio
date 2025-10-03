import React from "react";

export default function About() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-[#120024] py-12 px-4">
      <div className="max-w-3xl w-full rounded-xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 flex flex-col items-center">
        {/* Avatar */}
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" // Replace with your actual photo/avatar URL
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg mb-6"
        />
        {/* Animated Header */}
        <h2 className="text-3xl md:text-4xl text-white font-extrabold mb-2 tracking-tight">
          About <span className="text-purple-400">Me</span>
        </h2>
        {/* Animated Subline */}
        <p className="text-lg text-gray-200 mb-5 text-center font-medium">
          Passionate Full Stack Developer, Open Source Enthusiast, and AI for
          Agriculture Visionary.
        </p>
        {/* Content */}
        <div className="text-gray-200 text-base mb-6 leading-7 text-center">
          I am a 3rd year Computer Science Engineering student at Assam down
          town University. My journey in tech has led me to build robust
          mobile/web apps, lead hackathon teams, and contribute to open source
          projects.
          <br />
          <br />
          Lately, I’ve been focused on building{" "}
          <span className="text-purple-300">Krishi Sakhi</span>, an AI-powered
          agricultural assistant app that empowers farmers with weather, crop,
          and market insights. I thrive in environments where I can bridge
          technology and community impact.
        </div>
        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3 mb-2">
          <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            React & React Native
          </span>
          <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
            Node.js
          </span>
          <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            MongoDB
          </span>
          <span className="px-4 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">
            Expo CLI
          </span>
          <span className="px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
            AI/ML
          </span>
          <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            AgriTech
          </span>
        </div>
        {/* Social: optional */}
        <div className="pt-4 flex gap-5 justify-center">
          {/* Add your actual social links/icons here */}
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-7 h-7"
            />
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-7 h-7"
            />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
              alt="Twitter"
              className="w-7 h-7"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
