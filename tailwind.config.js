/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkGreen: "#164951",
        darkViolet: "#3A032D",
      },
      backgroundImage: {
        
      },
      spacing: {},
      fontFamily: {
        gascogne: "Gascogne Serial",
        favorit: "Favorit Pro",
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
      "12xl": "36px",
      "5xl": "24px",
      "111xl": "130px",
      "45xl": "64px",
      "29xl": "50px",
      "31xl": "55px",
      "30xl": "45px",
      inherit: "inherit",
      "444": "400px",
      "4xl" : "20px"
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
