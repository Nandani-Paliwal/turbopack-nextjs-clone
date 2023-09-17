import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        btnContent: "rgb(var(--color-btnContent) / <alpha-value>)",
        btnBackground: "rgb(var(--color-btnBackground) / <alpha-value>)",
        dark: "rgb(17,17,17)",
      },
      animation: {
        slideInDown: "slideInDown 0.5s",
      },
      keyframes: {
        slideInDown: {
          from: {
            "-webkit-transform": "translate3d(0, -100%, 0)",
            transform: "translate3d(0, -100%, 0)",
            visibility: "visible",
          },
          to: {
            "-webkit-transform": "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
