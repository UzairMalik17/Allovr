/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Hero: "url('./images/hero.png')",
        Gradient: "url('./images/gradient.png')",
      },
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
      },
      colors: {
        Red: "#ED1E79",
      },
    },
  },
  plugins: [],
};
