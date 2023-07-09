/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          normal: "hsl(26, 100%, 55%)",
          pale: "hsl(25, 100%, 94%)",
        },
        blue: {
          "very-dark": "hsl(220, 13%, 13%)",
          "dark-grayish": "hsl(219, 9%, 45%)",
          grayish: "hsl(220, 14%, 75%)",
          "light-grayish": "hsl(223, 64%, 98%)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
