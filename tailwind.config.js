/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#878787",
        secondaryDark: "var(--secondary-dark, #16194F)",
      },
      backgroundImage: {
        heroBg: "url('../public/Rectangle-71.svg')",
        heroHd: "url('../public/Vector-2.png')",
        footerBg: "url('../public/Vector-12.svg')",
      },
      listStyleImage : {
        checkMark:"url('../public/Check-icon-1.svg')",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        sans: "Roboto",
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
      "30xl": "45px",
      inherit: "inherit",
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
  
    }
  },
  corePlugins: {
    preflight: false,
  },
};
