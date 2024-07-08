/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontSize: {
        "cha": "10vw",
        "cha/2": "5vw",
        "cha/3": "3.333vw",
        "cha/4": "2.5vw",
        "desc": "5vw",
        "desc/2": "2.5vw",
        "desc/3": "1.666vw",
        "desc/4": "1.25vw",
      },
    },
  },
  plugins: [],
}

