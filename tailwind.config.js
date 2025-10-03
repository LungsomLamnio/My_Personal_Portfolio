/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // IMPORTANT: This tells Tailwind to scan all files in src
  ],
  theme: {
    extend: {
      // Add the Inter font family for consistency with the portfolio design
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
