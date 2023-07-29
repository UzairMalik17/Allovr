/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Gradient: "url('./images/gradient.png')",
        Hero: "url('./images/hero.png')",
      },
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        Red: "#ED1E79",
        Yellow: "#FBB03B",
      },
    },
  },
  plugins: [],
};
