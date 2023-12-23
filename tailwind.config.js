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
        dark: "#482509",
        brown: "#361B07",
        red: "#BA1B1D",
        green: "#335145",
        sand: {
          100: "#F6D4BA",
          200: "#F3C7A5",
          300: "#F3B391",
          400: "#A35514",
        },
      },
    },
  },
  plugins: [],
};
