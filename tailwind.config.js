/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: {
          10: "#0E8F14",
        },
        pink: {
          1: "#DC0A5E",
          10: "#FF0642",
          20: "#EA1272",
          30: "#EA0038",
          40: "#DA0161",
          50: "#DB015D",
          60: "#FC0768",
        },
        dark: {
          1: "#303030",
          10: "#2F2D2F",
          20: "#232323",
          30: "#3C3C3C",
          40: "#131111",
          50: "#1E2122",
          60: "#1E1C1C",
          70: "#121111",
          80: "#101010",
          90: "#090707",
        },
        gray: {
          1: "#5C5C5C",
          2: "#979797",
          3: "#EEEEEE",
          10: "#848484",
          15: "#414141",
          20: "#BBBBBB",
          25: "#D1D1D6",
          30: "#A1A1A1",
          35: "#A0A0A0",
          40: "#747373",
          50: "#3E3E3E",
          60: "#797979",
          70: "#919191",
          80: "#767676",
          90: "#CEC9C9",
        },
        red: {
          10: "#E42C27",
        },
        brown: {
          10: "#5A2232",
        },
        yellow: {
          10: "#F09F0E",
          20: "#EE9C0F",
          30: "#FFB906",
          40: "#EA9412",
        },
        blue: {
          10: "#0872FB",
          20: "#0A7BF8",
        },
      },
      backgroundPosition: {
        "top_20%": "center top 30%",
      },
      boxShadow: {
        1: "5px 2px 15px rgba(104, 25, 35, 0.1)",
        10: "3px 10px 30px rgba(159, 2, 45, 0.15)",
        20: "0px 4px 4px rgba(0, 0, 0, 0.01), 10px 4px 30px rgba(104, 25, 35, 0.15)",
        30: "2px 10px 30px rgba(7, 7, 7, 0.25)",
        40: "3px 10px 30px rgba(31, 31, 31, 0.15)",
        50: "0px 0px 14px rgba(255, 6, 66, 0.58)",
        60: "0px 10px 30px rgba(0, 0, 0, 0.3)",
      },
      dropShadow: {
        10: "3px 10px 30px rgba(172, 17, 20, 0.2)",
        20: "0px 3px 3px rgba(255, 6, 66, 0.1)",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.25rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1480px",
        },
      },
      screens: {
        "3k": "2080px",
        "4k": "3840px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
