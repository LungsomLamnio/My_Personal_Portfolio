import React from "react";
import ProfileCard from "../components/ProfileCard";
import Profile from "../assets/Profile.png";
import LogoLoop from "../components/LogoLoop"; // update path if needed
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
];

export default function About() {
  return (
    <section className="min-h-screen w-full flex items-start bg-gradient-to-br from-black via-[#120024] to-gray-900 py-12 px-8">
      {/* Left: Profile Card */}
      <div className="flex-shrink-0 w-72 mr-40 mt-10 ml-10">
        <ProfileCard
          name="Lungsom Lamnio"
          title="Full Stack Developer"
          handle="lungsomlamnio"
          status="Online"
          contactText="Contact Me"
          avatarUrl={Profile}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>

      {/* Right: Description text */}
      <article className="flex-1 ml-30 text-gray-200 mt-20">
        <h2 className="text-4xl font-bold mb-4 text-purple-500">About Me</h2>
        <p className="text-lg leading-relaxed mb-3">
          I am Lungsom Lamnio, a 3rd Year B.Tech CSE student at Assam down town
          University. I am passionate about solving real world problems with my
          skills and expertise.
        </p>
        <p className="text-lg leading-relaxed mb-3">
          I am a Full Stack Web and App Developer, who has participated in many
          hackathons and won several of them. My journey has equipped me to
          build robust web and mobile applications, lead technical teams, and
          contribute actively to the open source community.
        </p>
        <p className="text-lg leading-relaxed mb-3">
          Currently, I serve as the Technical Lead at Google Developers Group on
          Campus, Assam down town University. Alongside this, I am building my
          own startup where we focus on solving traffic management problems in
          urban cities.
        </p>
        <p className="text-white leading-relaxed">
          I’m always excited to collaborate, innovate, and learn from the best
          minds in tech!
        </p>
        <div className="w-full max-w-4xl mt-8">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={36}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#18153a"
            ariaLabel="Technology stack icons"
          />
        </div>
      </article>
    </section>
  );
}
