/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        gold: {
          DEFAULT: "#C8942A",
          light: "#F0C96B",
        },
        teal: {
          DEFAULT: "#1A7A6E",
          light: "#2AA89A",
        },
        cream: "#FAF7F2",
        "warm-white": "#FEFCF8",
        "soft-gray": "#EDE8E0",
        "body-text": "#3D3530",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
        mono: ['"DM Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
