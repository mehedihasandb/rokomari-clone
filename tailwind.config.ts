const defaultTheme = require('tailwindcss/defaultTheme');
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/bg-img.jpeg')",
      },
      fontFamily:{
        bodyfont: ["Futura PT", ...defaultTheme.fontFamily.sans],
      },
      colors :{
        bodyColor: "#fbfaf7",
        bgLight: "#1010100d",
        darkText: "#242424",
        lightText: "#a5a5a5",
        container: "#f1f2f4",
        offwhite: "#e3e3e3",
        btnback: "#4398FE",
        bestc: '#96addb',
        bestc1: '#ba96db',
        bestc2: '#96cadb',
        cate: "#e3f3fa",
        writerh: "#fff7ea",
        cartbtn: "#FFAD33"
      },
    },
  },
  plugins: [],
};
export default config;
