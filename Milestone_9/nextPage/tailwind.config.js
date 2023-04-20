/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7E90FE",

          secondary: "#93c5fd",

          accent: "#dbeafe",

          neutral: "#161923",

          "base-100": "#f3f4f6",

          info: "#65ABD7",

          success: "#53EAB5",

          warning: "#F8B944",

          error: "#FB374B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
