/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s forwards",
        scrollDown: "scrollDown 2s infinite",
        floatSlow: "float 2s ease-in-out infinite alternate",
        floatMedium: "float 2s ease-in-out infinite alternate",
        floatFast: "float 1s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scrollDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        float: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "100%": { transform: "translateY(-20px) translateX(10px)" },
        },
      },
    },
  },
  plugins: [daisyui],
};
