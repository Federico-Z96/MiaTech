/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
         primary: "#41463D",
         secondary: "rgb(15 23 42)",
         tertiary: " #000035",
        "custom-blue": "blue",
         primary: "green",
         purple: '#7e5bef',
         pink: '#ff49db',
         orange: '#ff7849',
         yellow: '#ffc82c',
        "custom-green": '#10B981',
        "custom-red": '#EF4444',
        "custom-yellow": '#F59E0B',
        "custom-purple": '#8B5CF6',
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

