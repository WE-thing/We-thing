/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nanum: ["NanumMyeongjo"],
        continuous: ["Continuous"],
      },
      fontSize: {
        caption: "0.75rem",
        body2: "0.875rem",
        body1: "1rem",
        subheading: "1.125rem",
        heading3: "1.375rem",
        heading2: "1.75rem",
        heading1: "2.375rem",
        hero: "3.125rem",
      },
      colors: {
        theme1: {
          primary: "#F6F4EE",
          invitation: "#E8EADB",
          pink: "#F5B9B1",
          red: "#BE5B46",
        },
        black: "#191919",
        darkGray: "#848484",
        gray: "#C7C7C7",
        lightGray: "#F9F9F9",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
