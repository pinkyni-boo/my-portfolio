/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "Inter", "sans-serif"],
        signature: ['"Allura"', "cursive"],
      },
      keyframes: {
        "soft-float": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
      },
      animation: {
        "soft-float": "soft-float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
