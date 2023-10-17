/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#001232", // background of container
        bgPrimaryLayer: "rgba(0, 18, 50, 0.8)", //#0A1E5ECC layer of image background
        bgPrimaryBar: "rgba(5, 17, 63, 0.8)", // header, navbar, footer, sidebar
        lightPrimary: "#31AFD7", // toggle button, more icon
        borderColor: "#314C81", // button background, border
        disabled: "#AA52A1",
        highlight: "#31D7A9",
        gradientStart: "rgba(255, 67, 67, 0.85)",
        gradientMid: " #AA52A1",
        gradientStop: "#002DBB",
      },
      fontFamily: {
        comfortaa: ['"Comfortaa"', ...defaultTheme.fontFamily.sans],
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      sm: "390px",
      md: "680px",
      lg: "900px",
      xl: "1024px",
      "2xl": "1366px",
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
