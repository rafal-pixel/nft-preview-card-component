/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
    colors: {
      "soft-blue": "hsl(215, 51%, 70%)",
      cyan: "hsl(178, 100%, 50%)",
      "dark-blue-main": "hsl(217, 54%, 11%)",
      "dark-blue-card": "hsl(216, 50%, 16%)",
      "dark-blue-line": "hsl(215, 32%, 27%)",
      "p-color": "hsl(215, 51%, 70%)",
      "white-color": "hsl(0, 0%, 100%)",
    },
    screens: {
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
