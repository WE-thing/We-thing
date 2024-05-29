/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        innersmall: "inset 3px 3px 10px 5px blue",
      },
      keyframes: {
        move: {
          "0%": {
            opacity: 1,
            transform: " translate(-50%,calc(-50% + 40px)) scale(0.7)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-50%) scale(0.7) ",
          },
        },
        expand: {
          "0%": { transform: "translate(-50%, -50%) scale(0.7)" },
          "100%": {
            transform: "translate(-50%, calc(-50% - 25px)) scale(1)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(20px)" },
        },
        moveAndExpand: {
          "0%": {
            transform: "translate(0, 20px) scale(0.7)",
          },
          "50%": {
            transform: "translate(0, 0)",
            animationTimingFunction: "cubic-bezier(0.42, 0, 1, 1)",
          },
          "100%": {
            transform: "translate(100px, 0) scale(1.5)",
            animationTimingFunction: "cubic-bezier(1, 0.19, 0.91, 0.46)",
          },
        },
      },
      transitionProperty: {
        background: "background-color, background-image",
      },
      transitionDuration: {
        2000: "1000ms",
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
        expand: "expand 1s cubic-bezier(1,0,.8,1.03) forwards",
        move: "move 1s cubic-bezier(.01,.57,0,.99) forwards",
        moveAndExpand: "moveAndExpand 1s forwards",
      },
      fontFamily: {
        nanum: ["NanumMyeongjo"],
        continuous: ["Continuous"],
      },
      fontSize: {
        mini: "0.625rem",
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
      spacing: {
        8.75: "35px", // 사용자 정의 스페이싱 추가
      },
    },
  },
  plugins: [],
};
