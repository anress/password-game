/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,vue,mdx,ts}",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FFFFFF",
        green: "#335145",
        red: "#BA1B1D",
        cream: "#FEFADC",
        sand: {
          light: "#F6D4BA",
          dark: "#F3B391",
        },
      },
    },
  },
  plugins: [],
};
