import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProfileCard from "../components/ProfileCard";
import Profile from "../assets/Profile.png";
import LogoLoop from "../components/LogoLoop";
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

const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 3, ease: "easeOut" },
  },
};

export default function About() {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });

  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.2 });

  return (
    <section className="min-h-screen w-full flex items-start bg-gradient-to-br from-black via-[#120024] to-gray-900 py-12 px-8">
      <motion.div
        ref={cardRef}
        className="flex-shrink-0 w-72 mr-40 mt-10 ml-10"
        variants={revealVariants}
        initial="hidden"
        animate={isCardInView ? "visible" : "hidden"}
        style={{ originY: 0 }}
      >
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
      </motion.div>

      <motion.article
        ref={textRef}
        className="flex-1 ml-30 text-gray-200 mt-20"
        variants={revealVariants}
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
      >
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
        <p className="text-white leading-relaxed italic">
          I’m always excited to collaborate, innovate, and learn from the best
          minds in tech!
        </p>

        <div className="w-full max-w-5xl mt-8">
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
      </motion.article>
    </section>
  );
}
