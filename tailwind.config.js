/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: "Lato",
      },
      colors: {
        highRed: "#E22845",
        lightRed: "#E65168",
        ashRade: "#F4E1E4",
        highBlue: "#021D3A",
        lightBlue: "#33485F",
        darkBlack: "#101825",
        ash: "#DDE0E3",
        lightAsh: "#637385",
        ash_dark: "#949FAA",
      },
      spacing: {
        200: "12.5rem",
        70: "4.357rem",
        "-48px": "-30px",
        300: "300px",
        500: "500px",
      },
    },
  },
  plugins: [],
};
