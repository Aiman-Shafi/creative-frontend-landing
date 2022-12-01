/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    fontFamily: {
      baloo: ['"Baloo Da 2"'],
      poppins: "Poppins",
      bangla: "Hind Siliguri",
    },
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
};
