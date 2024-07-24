/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {colors: {
      primary: "#41463D",
      secondary: "rgb(15 23 42)",
      tertiary: " #000035",
      "custom-blue": "blue",
  },
  margin: {
    first: "50%",
  },
  padding: {
    pFirst: "50px"
  },
},
  },
  plugins: [],
}

