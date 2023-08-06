/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d65766",

          secondary: "#5868c4",

          accent: "#f4c93a",

          neutral: "#252230",

          "base-100": "#ffffff",

          info: "#3572d4",

          success: "#139586",

          warning: "#944f05",

          error: "#f55681",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
