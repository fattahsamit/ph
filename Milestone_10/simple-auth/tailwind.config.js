/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#34d399",

          secondary: "#d9f99d",

          accent: "#F471B5",

          neutral: "#1E293B",

          "base-100": "#363C4F",

          info: "#0CA5E9",

          success: "#2DD4BF",

          warning: "#F4BF50",

          error: "#FB7085",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
