/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#001232", // background
        lightPrimary: "#314C81", // button background, border
        primary: "#021339", // header, footer, sidebar
        disabled: "#AA52A1",
        highlight: "#31D7A9",
        gradientStart: "rgba(255, 67, 67, 0.85)",
        gradientMid: " #AA52A1",
        gradientStop: "#002DBB",
        textinf: "rgba(255, 255, 255, 0.60)",
      },
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
