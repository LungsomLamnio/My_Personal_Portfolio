import React from "react";
import TextType from "../components/TextType";

const ContactTyping = () => {
  return (
    <TextType
      text={["Let's Build Something Great", "I Respond Quickly!"]}
      as="h2"
      typingSpeed={70}
      deletingSpeed={40}
      pauseDuration={2000}
      className="mt-2 mb-8 text-2xl font-semibold text-gray-400"
      showCursor={true}
      cursorCharacter="|"
    />
  );
};

export default React.memo(ContactTyping);
