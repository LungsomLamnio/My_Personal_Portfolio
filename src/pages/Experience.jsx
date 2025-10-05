import React from "react";

const experiences = [
  {
    company: "Google Developers Group",
    role: "Web Dev Lead",
    period: "Oct 2024 – June 2025",
    description:
      "Led web development workshops and events, built technical communities, and inspired innovative solutions on campus.",
    logo: "/logos/gdg-adtu.png",
  },
  {
    company: "CodeSpirit",
    role: "Full Stack Web Developer Intern",
    period: "Feb 2025 – Mar 2025",
    description:
      "Built a web platform providing centralized updates for national and international hackathons, integrating notifications and event tracking.",
    logo: "/logos/codespirit.png",
  },
  {
    company: "UptoSkills",
    role: "Full Stack Web Developer Intern",
    period: "July 2025 – Sept 2025",
    description:
      "Developed a scalable platform for human resource management, streamlining workflows and automating staff processes.",
    logo: "/logos/uptoskills.png",
  },
  {
    company: "GirlScript Summer of Code",
    role: "Tech Contributor",
    period: "July 2025 – Present",
    description:
      "Actively contributed to open source projects, enhancing features and mentoring newer contributors in national OSS programs.",
    logo: "/logos/girlscript.png",
  },
  {
    company: "Google Developers Group",
    role: "Technical Lead",
    period: "Sept 2025 – Present",
    description:
      "Managing all technical initiatives, mentoring team leads, and ensuring the successful execution of developer events campus-wide.",
    logo: "/logos/gdg-adtu.png",
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen w-full px-4 bg-gradient-to-br from-black via-[#120024] to-gray-900 flex flex-col items-center py-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">
        Experience
      </h2>
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        {/* Vertical timeline line */}
        <div
          className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-800 via-violet-400 to-purple-900 rounded-full z-0"
          style={{ transform: "translateX(-50%)" }}
        />

        <div className="flex flex-col gap-20 w-full z-10">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative flex w-full items-center">
                {/* Left/Right connector */}
                <div
                  className={`flex-1 px-6 ${
                    isLeft ? "justify-end flex" : "justify-start flex"
                  }`}
                >
                  {isLeft && (
                    <div
                      className={`group bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-lg shadow-xl w-full max-w-md 
                        transform transition duration-300 hover:scale-105 hover:border-purple-400/60 hover:bg-white/20 hover:shadow-2xl
                        text-right`}
                    >
                      <div className="mb-2 text-gray-400 text-sm transition group-hover:text-purple-200">
                        {exp.period}
                      </div>
                      <h3 className="text-2xl font-bold mb-1 text-purple-300 transition group-hover:text-white">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg mb-2 font-semibold text-blue-200 transition group-hover:text-cyan-300">
                        {exp.company}
                      </h4>
                      <p className="text-gray-100 leading-relaxed tracking-wide text-sm group-hover:text-gray-50 transition">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>
                {/* Logo for the timeline event */}
                <div className="flex flex-col items-center justify-center z-30">
                  <img
                    src={exp.logo}
                    alt={exp.company + " logo"}
                    className="w-12 h-12 rounded-full border-4 border-white bg-white object-contain shadow transition duration-300
                      group-hover:shadow-[0_0_16px_4px_rgba(192,132,252,0.5)]"
                  />
                </div>
                <div
                  className={`flex-1 px-6 ${
                    !isLeft ? "justify-start flex" : "justify-end flex"
                  }`}
                >
                  {!isLeft && (
                    <div
                      className={`group bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-lg shadow-xl w-full max-w-md
                        transform transition duration-300 hover:scale-105 hover:border-purple-400/60 hover:bg-white/20 hover:shadow-2xl
                        text-left`}
                    >
                      <div className="mb-2 text-gray-400 text-sm transition group-hover:text-purple-200">
                        {exp.period}
                      </div>
                      <h3 className="text-2xl font-bold mb-1 text-purple-300 transition group-hover:text-white">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg mb-2 font-semibold text-blue-200 transition group-hover:text-cyan-300">
                        {exp.company}
                      </h4>
                      <p className="text-gray-100 leading-relaxed tracking-wide text-sm group-hover:text-gray-50 transition">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
