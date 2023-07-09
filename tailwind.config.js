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
      },
    },
  },
  plugins: [],
};
