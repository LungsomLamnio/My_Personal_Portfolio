import React, { useEffect, useState, useCallback, memo } from "react";
// Removed: emailjs from "@emailjs/browser"
import SplitText from "../components/SplitText";

// Removed: EmailJS Configuration constants (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)

// --- CONTACT PAGE COMPONENT ---

// 3. Make InputField a memoized component for performance stability
const InputField = memo(
  ({
    label,
    name,
    type = "text",
    isTextArea = false,
    value,
    onChange,
    onFocus,
  }) => {
    return (
      <div className="mb-6">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {label}
        </label>
        {isTextArea ? (
          <textarea
            id={name}
            name={name}
            rows="6"
            value={value}
            onChange={onChange}
            required
            onFocus={onFocus}
            className="w-full p-4 bg-gray-800 border border-purple-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 resize-none break-words"
            placeholder={`Enter your ${label.toLowerCase()}`}
          ></textarea>
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required
            onFocus={onFocus}
            className="w-full p-4 bg-gray-800 border border-purple-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 break-words"
            placeholder={`Enter your ${label.toLowerCase()}`}
          />
        )}
      </div>
    );
  }
);
InputField.displayName = "InputField";

const Contact = () => {
  const [animateIn, setAnimateIn] = useState(false);
  // Removed: isSubmitting, statusMessage states

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // 1. Use useCallback for handleChange (Kept for local state update)
  const handleChange = useCallback((e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }, []); // Stable function

  // 2. handleSubmit is no longer needed since Netlify handles submission.
  //    If you need client-side validation, you would use this function.
  //    For Netlify's basic form setup, we rely on standard HTML submission.

  // Stable no-op function for onFocus
  const handleFocus = useCallback(() => {}, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#120024] to-gray-900 flex justify-center items-center">
      {/* Centered Contact Form */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full w-full text-white p-8 transition-all duration-1000 ease-in-out ${
          animateIn
            ? "translate-y-0 opacity-100"
            : "translate-y-[80px] opacity-0"
        }`}
      >
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
        <div className="w-full max-w-2xl mx-auto bg-gray-900 p-8 rounded-xl shadow-2xl border border-purple-700">
          {/* Static H2 Subtitle */}
          <h2 className="mt-2 mb-8 text-2xl font-semibold text-gray-400 text-center">
            Let's Build Something Great!
          </h2>

          {/* 💥 NETLIFY FORM INTEGRATION 💥 
              1. Removed onSubmit={handleSubmit}
              2. Added data-netlify="true"
              3. Added hidden netlify-honeypot field (for spam filtering)
              4. Added form name="contact" (crucial for detection)
          */}
          <form
            name="contact"
            method="POST" // Use POST method
            data-netlify="true"
            data-netlify-honeypot="bot-field" // Honeypot spam filter
            className="bg-transparent"
          >
            {/* Required hidden field for Netlify to recognize the form by name */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field (must be hidden from users) */}
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <InputField
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <InputField
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <InputField
              label="Message"
              name="message"
              isTextArea={true}
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
            />

            {/* Status Message is removed, as Netlify handles submission confirmation via redirect */}

            <button
              type="submit"
              // Removed disabled={isSubmitting} as state is simplified
              className="w-full px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
