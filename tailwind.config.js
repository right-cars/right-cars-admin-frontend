const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "460px",
      sm: "660px",
      md: "768px",
      l: "989px",
      lg: "1150px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        blue: "#006FEE",
        opacity20Blue: "#006FEE33",
        opacity5Blue: "#006FEE0D",
        black: "#18181B",
        pureBlack: "#000",
        grey: "#52525B",
        lightGrey: "#D4D4D8",
        white: "#FAFAFA",
        background: "#F3F4F6",
        textColor: "#1e1e1e",
        pureWhite: "#fff",
      },
      boxShadow: {
        custom:
          "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10);",
      },
      fontFamily: {
        metrophobic: ["Metrophobic", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1" }],
        sm: ["14px", { lineHeight: "1.7" }],
        "sm-extended": ["14px", { lineHeight: "1.43", letterSpacing: "-3%" }],
        base: ["16px", { lineHeight: "1.5" }],
        "base-extended": ["16px", { lineHeight: "1.7" }],
        md: ["20px", { lineHeight: "1.7", letterSpacing: "-3%" }],
        l: ["32px", { lineHeight: "1.17", letterSpacing: "-3%" }],
        lg: ["72px", { lineHeight: "1.17", letterSpacing: "-3%" }],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
