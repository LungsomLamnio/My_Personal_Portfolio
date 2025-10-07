import React, { useRef, useEffect, useState } from "react";

const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.13 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[2200ms] ease-[cubic-bezier(0.24,1,0.32,1)]
        ${
          isVisible
            ? "opacity-100 scale-100 blur-0 translate-y-0"
            : "opacity-0 scale-90 blur-md translate-y-16"
        }
      `}
    >
      {children}
    </div>
  );
};

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
      <RevealOnScroll>
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-100">
          Experience
        </h2>
        <div className="relative w-full max-w-6xl flex flex-col items-center">
          {/* Vertical timeline line ONLY */}
          <div
            className="absolute left-1/2 top-0 h-full w-2 bg-gradient-to-b from-purple-900 via-violet-400 to-purple-900 rounded-full z-0"
            style={{
              transform: "translateX(-50%)",
              background:
                "linear-gradient(180deg, #7c3aed 0%, #8b5cf6 20%, #7c3aed 40%, #8b5cf6 60%, #7c3aed 80%, #8b5cf6 100%)",
            }}
          />

          <div className="flex flex-col gap-28 w-full z-10">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <RevealOnScroll key={idx} delay={idx * 180}>
                  <div className="relative flex w-full items-center">
                    <div
                      className={`flex-1 px-8 ${
                        isLeft ? "justify-end flex" : "justify-start flex"
                      }`}
                    >
                      {isLeft && (
                        <div
                          className={`group bg-white/10 p-12 rounded-3xl border border-white/20 backdrop-blur-lg shadow-2xl w-full max-w-3xl
                            transform transition duration-300 hover:scale-105 hover:border-purple-400/80 hover:bg-white/20 hover:shadow-2xl
                            text-right`}
                        >
                          <div className="mb-4 text-gray-400 text-base transition group-hover:text-purple-200">
                            {exp.period}
                          </div>
                          <h3 className="text-3xl font-bold mb-2 text-purple-300 transition group-hover:text-white">
                            {exp.role}
                          </h3>
                          <h4 className="text-2xl mb-4 font-semibold text-blue-200 transition group-hover:text-cyan-300">
                            {exp.company}
                          </h4>
                          <p className="text-gray-100 leading-relaxed tracking-wide text-lg group-hover:text-gray-50 transition">
                            {exp.description}
                          </p>
                        </div>
                      )}
                    </div>
                    {/* Logo for timeline event */}
                    <div className="flex flex-col items-center justify-center z-30">
                      <img
                        src={exp.logo}
                        alt={exp.company + " logo"}
                        className="w-20 h-20 rounded-full border-4 border-white bg-white object-contain shadow-lg transition duration-300
                          group-hover:shadow-[0_0_24px_10px_rgba(192,132,252,0.5)]"
                      />
                    </div>
                    <div
                      className={`flex-1 px-8 ${
                        !isLeft ? "justify-start flex" : "justify-end flex"
                      }`}
                    >
                      {!isLeft && (
                        <div
                          className={`group bg-white/10 p-12 rounded-3xl border border-white/20 backdrop-blur-lg shadow-2xl w-full max-w-3xl
                            transform transition duration-300 hover:scale-105 hover:border-purple-400/80 hover:bg-white/20 hover:shadow-2xl
                            text-left`}
                        >
                          <div className="mb-4 text-gray-400 text-base transition group-hover:text-purple-200">
                            {exp.period}
                          </div>
                          <h3 className="text-3xl font-bold mb-2 text-purple-300 transition group-hover:text-white">
                            {exp.role}
                          </h3>
                          <h4 className="text-2xl mb-4 font-semibold text-blue-200 transition group-hover:text-cyan-300">
                            {exp.company}
                          </h4>
                          <p className="text-gray-100 leading-relaxed tracking-wide text-lg group-hover:text-gray-50 transition">
                            {exp.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
