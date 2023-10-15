/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#001232", // background of container
            primaryLayer: "rgba(0, 18, 50, 0.8)", // layer of image background
            primaryBar: "rgba(5, 17, 63, 0.8)", // header, navbar, footer, sidebar
            lightPrimary: "#31AFD7", // toggle button, more icon
            borderColor: "#314C81", // button background, border
            disabled: "#AA52A1",
            highlight: "#31D7A9",
            gradientStart: "rgba(255, 67, 67, 0.85)",
            gradientMid: " #AA52A1",
            gradientStop: "#002DBB",
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
