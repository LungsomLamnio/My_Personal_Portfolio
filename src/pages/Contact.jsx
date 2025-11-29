import React, { useEffect, useState, useCallback, memo } from "react"; // 👈 Import useCallback and memo
import emailjs from "@emailjs/browser";
import SplitText from "../components/SplitText";

// Configuration: Reading keys from environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
    // Note: We receive value, onChange, and onFocus as stable props now.
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
            value={value} // Use stable prop
            onChange={onChange} // Use stable prop
            required
            onFocus={onFocus} // Use stable prop
            className="w-full p-4 bg-gray-800 border border-purple-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 resize-none break-words"
            placeholder={`Enter your ${label.toLowerCase()}`}
          ></textarea>
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value} // Use stable prop
            onChange={onChange} // Use stable prop
            required
            onFocus={onFocus} // Use stable prop
            className="w-full p-4 bg-gray-800 border border-purple-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 break-words"
            placeholder={`Enter your ${label.toLowerCase()}`}
          />
        )}
      </div>
    );
  }
);
// Naming for easier debugging
InputField.displayName = "InputField";

const Contact = () => {
  const [animateIn, setAnimateIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

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

  // Debugging check for key existence
  useEffect(() => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EMAILJS CONFIGURATION ERROR: One or more keys are missing or undefined. Check .env file and restart the server."
      );
    }
  }, []);

  // 1. Use useCallback for handleChange to create a stable function reference
  const handleChange = useCallback((e) => {
    // No need for interaction flag logic here, as we removed TextType animation
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setStatusMessage("");
  }, []); // Empty dependency array ensures this function is created once

  // 2. Use useCallback for handleSubmit to create a stable function reference
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setStatusMessage("");

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        setIsSubmitting(false);
        setStatusMessage(
          "Configuration Error: Cannot send message (Keys missing)."
        );
        return;
      }

      try {
        const templateParams = {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

        setStatusMessage("Message sent successfully! Thank you.");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("EmailJS Error:", error);
        setStatusMessage(
          "Failed to send message. Please check console for details."
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  ); // Dependency on formData is needed for submission payload

  // Stable no-op function for onFocus (since we removed the animation fix)
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

          <form onSubmit={handleSubmit} className="bg-transparent">
            {/* 4. Pass stable props and individual values */}
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

            {/* Submission Status Message */}
            {statusMessage && (
              <p
                className={`text-center mb-4 ${
                  statusMessage.includes("sent")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
