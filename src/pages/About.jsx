import React from "react";
import ProfileCard from "../components/ProfileCard";
import Profile from "../assets/Profile.png";

export default function About() {
  return (
    <section className="min-h-screen w-full flex items-center justify-start bg-gradient-to-br from-black via-[#120024] to-gray-900 py-12 px-4">
      <ProfileCard
        className="ml-10"
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
    </section>
  );
}
