/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js", // configure the Flowbite JS source template paths
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: "#144700",
      secondary: "#237803",
      light: "#D7EEC2",
      "text-muted": "#636363",
      "background-primary": "#154902",
      "card-border": "#9BC58B",
      accent: "#FFD633",
    },
    extend: {
      minWidth: {
        "slider-2": "50%",
        "slider-3": "calc(100%/3)",
        "slider-4": "25%",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // require Flowbite's plugin for Tailwind CSS
  ],
};
