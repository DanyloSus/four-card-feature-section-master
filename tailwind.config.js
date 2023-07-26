/** @type {imp'ort('tailwindcss')'.Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: "hsl(0, 78%, 62%)",
      cyan: "hsl(180, 62%, 55%)",
      orange: "hsl(34, 97%, 64%)",
      blue: "hsl(212, 86%, 64%)",
      "very-dark-blue": "hsl(234, 12%, 34%)",
      "grayish-blue": "hsl(229, 6%, 66%)",
      "very-light-gray": "hsl(0, 0%, 98%)",
    },
    screens: {
      some: { max: "1150px" },
    },
    keyframes: {
      wigle: {
        0: {
          position: "relative",
          opacity: 0,
          left: "-20px",
        },
        100: {
          position: "relative",
          opacity: 1,
          left: "0px",
        },
      },
    },
    animation: {
      left: "wigle 1s ease-in-out both",
    },
  },
  plugins: [],
};
