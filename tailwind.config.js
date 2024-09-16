/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7848F4",
          light: "#8c5ff7",
          dark: "#6b3ed0",
        },
        "dark-purple": {
          DEFAULT: "#172554",
          light: "#1f2e62",
          dark: "#0f1a3b",
        },
      },
      backgroundImage: {
        hero: "url('/src/assets/image/hero/hero.jpg')",
      },
    },
  },
  plugins: [],
};
