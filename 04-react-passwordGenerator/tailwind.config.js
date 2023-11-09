/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    // Define your custom colors here
    colors: {
      red: "#ff0000", // Change to your desired color
    },
  },
};
