import React, { useEffect, useState } from "react";
import SplitText from "../components/SplitText";
import TextType from "../components/TextType";
import ChromaGrid from "../components/ChromaGrid";
import img1 from "../assets/img1.jpeg";

// ... (achievementCardsData remains the same)

const achievementCardsData = [
  // ... (Your achievement data here)
  {
    image:
      "https://res.cloudinary.com/dgmftp80m/image/upload/v1764353376/StudentOfTheYear_uo5por.jpeg", // 👈 Use the path to your AWS badge/image
    title: "Awarded as Student of the Year & Academics",
    subtitle: "Assam down town University, 2025",
    handle: "@Education",
    borderColor: "#FF9900", // AWS Orange
    gradient: "linear-gradient(145deg, #FF9900, #000)",
    url: "https://www.credly.com/aws-badge-link", // 👈 Link to your Credly badge
  },
  {
    image:
      "https://res.cloudinary.com/dgmftp80m/image/upload/v1764350071/IMG-20250610-WA0050_ju86v8.jpg", // 👈 Use the path to your AWS badge/image
    title: "Received 5 Lakh Grant under DST NIDHI iTBI",
    subtitle: "Assam down town University, 2025",
    handle: "@StartUp",
    borderColor: "#FF9900", // AWS Orange
    gradient: "linear-gradient(145deg, #FF9900, #000)",
    url: "https://www.credly.com/aws-badge-link", // 👈 Link to your Credly badge
  },
  {
    image:
      "https://res.cloudinary.com/dgmftp80m/image/upload/v1764353739/WhatsApp_Image_2025-02-19_at_23.28.47_1_gx3yog.jpg", // 👈 Use a general education icon/image
    title: "Awarded as All Rounder (Rising Star)",
    subtitle: "Assam down town University, 2025",
    handle: "@Education",
    borderColor: "#4F46E5", // Purple/Blue
    gradient: "linear-gradient(180deg, #4F46E5, #000)",
    url: "/cv-or-degree-link", // 👈 Link to relevant proof
  },
  {
    image:
      "https://res.cloudinary.com/dgmftp80m/image/upload/v1764353856/Screenshot_2025-05-09-21-34-49-505_com.instagram.android-edit_n4clw8.jpg", // 👈 Use a general education icon/image
    title: "Awarded as Student of the Month (February)",
    subtitle: "Assam down town University, 2025",
    handle: "@Education",
    borderColor: "#4F46E5", // Purple/Blue
    gradient: "linear-gradient(180deg, #4F46E5, #000)",
    url: "/cv-or-degree-link", // 👈 Link to relevant proof
  },
  {
    image:
      "https://res.cloudinary.com/dgmftp80m/image/upload/v1764353559/WhatsApp_Image_2025-02-19_at_23.28.48_vlmtx2.jpg", // 👈 Use a general education icon/image
    title: "Winner of Innovathon",
    subtitle: "Assam down town University, 2024",
    handle: "@Hackathon",
    borderColor: "#4F46E5", // Purple/Blue
    gradient: "linear-gradient(180deg, #4F46E5, #000)",
    url: "/cv-or-degree-link", // 👈 Link to relevant proof
  },
  {
    image:
      "https://res.cloudinary.com/dgmftp80m/image/upload/v1764354060/1744033003308_xxzjuc.jpg", // 👈 Use a general education icon/image
    title: "Winner of Co. GPD Hackathon",
    subtitle: "Jorhat Engineering Hackathon, 2025",
    handle: "@Hackathon",
    borderColor: "#EF4444", // Purple/Blue
    gradient: "linear-gradient(180deg, #4F46E5, #000)",
    url: "/cv-or-degree-link", // 👈 Link to relevant proof
  },
  {
    image:
      "https://res.cloudinary.com/dgmftp80m/image/upload/v1764350071/WhatsApp_Image_2025-02-04_at_12.12.01_hbkxrs.jpg",
    title: "Received a grant of 25k under AdtU Student Innovation Grant",
    subtitle: "Assam down town University, 2025",
    handle: "@StartUp",
    borderColor: "#EF4444", // Red
    gradient: "linear-gradient(195deg, #EF4444, #000)",
    url: "/hackathon-project-link",
  },
  {
    image:
      "https://res.cloudinary.com/dgmftp80m/image/upload/v1764354587/WhatsApp_Image_2025-01-18_at_17.29.08_wchlha.jpg",
    title: "Pitching at Udyomotsav (National StartUp Day)",
    subtitle: "Assam Don Bosco University, 2025",
    handle: "@StartUp",
    borderColor: "#10B981", // Green
    gradient: "linear-gradient(225deg, #10B981, #000)",
    url: "https://github.com/LungsomLamnio?tab=contributions",
  },
];

const Achievements = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      // CHANGED: Using a gradient from a very dark black to a slightly lighter dark-gray for depth.
      className="relative w-full py-16 overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] flex flex-col items-center"
    >
      {/* Header Section (Kept for split text animation) */}
      <div
        className={`relative z-10 text-center text-white transition-all duration-1000 ease-in-out mb-12 ${
          animateIn ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-sky-100">
          My Achievements
        </h2>
      </div>

      <div
        className="w-full max-w-7xl px-4"
        style={{ minHeight: "80vh", height: "auto" }}
      >
        <ChromaGrid
          items={achievementCardsData}
          radius={300} // Radius of the spotlight effect (300px)
          damping={0.45} // Smoothness of the cursor follow
          fadeOut={0.6} // Duration of the fade back to grayscale when cursor leaves
          ease="power3.out"
        />
      </div>
    </div>
  );
};

export default Achievements;
