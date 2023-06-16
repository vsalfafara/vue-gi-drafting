/** @type {import('tailwindcss').Config} */
const sb = require("tailwind-scrollbar");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('/assets/Background/bg.webp')",
      },
    },
  },
  plugins: [sb({ noncompatible: true })],
};
