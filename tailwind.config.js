/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#878787",
        aliceblue: "rgba(236, 241, 255, 0.6)",
      },
      backgroundImage: {
        heroBg: "url('../public/Group-14.png')",
      },
      spacing: {},
      fontFamily: {
        medium: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "31xl": "50px",
        "35xl": "54px",
      },
    },
    fontSize: {
      mid: "17px",
      xs: "12px",
      "29xl": "48px",
      "11xl": "30px",
      "5xl": "24px",
      "111xl": "130px",
      "45xl": "64px",
      "31xl": "50px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
