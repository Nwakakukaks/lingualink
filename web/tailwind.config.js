/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-1": "#2d2d2d",
        limegreen: {
          "100": "rgba(61, 179, 0, 0.12)",
          "200": "rgba(88, 204, 2, 0.02)",
          "300": "rgba(88, 204, 2, 0.12)",
          "400": "rgba(88, 204, 2, 0.14)",
        },
        darkgray: "#9e9e9e",
        matchgreen: '#28CA42',
        whitesmoke: {
          "100": "#f2f2f2",
          "200": "#eee",
        },
        "grey-2": "#5b5b5b",
        "green-2": "#337700",
        "fg-foregroundquaternary": "#465065",
        blue: "#443cc7",
        black: "#000",
        gray1: {
          "100": "#86898c",
          "200": "#25292e",
        },
        beige: "#ebf9e1",
        green: "#58cc02",
        "chrome-light-disabled": "#6b6c6e",
        red: "#e8303a",
        crimson: {
          "100": "rgba(255, 74, 84, 0.1)",
          "200": "rgba(232, 48, 58, 0.1)",
        },
        lightblue: "rgba(204, 235, 255, 0.25)",
        bisque: "rgba(254, 228, 204, 0.25)",
        lightcyan: "rgba(216, 242, 238, 0.25)",
        black: "#252525",
        "gray-50": "#5f6d7e",
        gainsboro: "#d7dadd",
        silver: "#bcbcbc",
        "gray-700": "#272d37",
        "old-colour-system-imbue-purple-dark": "#03116a",
        darkslategray: "#282d34",

        "light-connectbuttonbackground": "#fff",
        limegreen: "rgba(88, 204, 2, 0.12)",
        "gray-1": "#2d2d2d",
        "green-2": "#337700",
        black1: "#000",
        lightgoldenrodyellow: "#e0ffc8",
        darkolivegreen: "#1d4400",
        whitesmoke: "#eee",
        beige: "#ebf9e1",
        green: "#58cc02",
      },
      spacing: {},
      fontFamily: {
        "body-2-body-2": "Montserrat",
        roboto: "Roboto",
      },
      borderRadius: {
        "341xl": "360px",
        "981xl": "1000px",
        "157xl": "176px",
        smi: "13px",
        "41xl": "60px",
        "10xs-2": "2.2px",
        "8xs": "5px",
        "152xl-4": "171.4px",
        lg: "18px",
        base: "16px"
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      "9xl": "28px", 
      "3xl": "22px",
      "43xl": "62px",
      "18xl": "37px",
      "31xl": "50px",
      lg: "18px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "8xl-9": "27.9px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      base: "0em", // 0px
      sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
      md: "48em", // ~768px
      lg: "62em", // ~992px
      xl: "80em", // ~1280px
      "2xl": "96em", // ~1536px
    },
  },
  corePlugins: {
    preflight: false,
  },
};
