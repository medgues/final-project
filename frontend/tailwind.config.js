/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        40: ".4",
      },
      // spacing: {
      //   "13%": "13",
      // },
    },
  },
  plugins: [require("daisyui")],
};
