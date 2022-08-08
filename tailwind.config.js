/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'mainColor': '#5DD5C4',
        'heading': '#202221',
        'textinfo': '#606564',
      },
      screens: {
        max1170: { max: "1170px" },
        max1080: { max: "1080px" },
        max992: { max: "992px" },
        max820: { max: "820px" },
        max768: { max: "768px" },
        max576: { max: "576px" },
        max480: { max: "480px" },
        max375: { max: "375px" },
      },
    },
  },
  plugins: [],
}
