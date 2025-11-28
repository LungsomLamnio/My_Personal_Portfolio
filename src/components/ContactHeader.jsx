import React from "react";
import SplitText from "../components/SplitText";

const ContactHeader = () => {
  return (
    <h1 className="text-5xl font-bold mb-5 inline-block text-center">
      <SplitText
        text="Get in "
        className="text-white overflow-visible"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        tag="span"
      />
      &nbsp;
      <SplitText
        text="Touch"
        className="text-purple-500 overflow-visible"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        tag="span"
      />
    </h1>
  );
};

export default React.memo(ContactHeader);
