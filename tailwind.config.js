/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'plus': ['"PlusJakartaSans"', 'sans-serif']
      },
      colors: {
        "red": "hsl(1, 90%, 64%)",
        "blue": "hsl(219, 85%, 26%)",
        "White": "hsl(0, 0%, 100%)",
        "Verylightgrayishblue": "hsl(210, 60%, 98%)",
        "Lightgrayishblue1": "hsl(211, 68%, 94%)",
        "Lightgrayishblue2": "hsl(205, 33%, 90%)",
        "Grayishblue": "hsl(219, 14%, 63%)",
        "Darkgrayishblue": "hsl(219, 12%, 42%)",
        "Verydarkblue": "hsl(224, 21%, 14%)"
      },
      height: {
        'h-500px': '500px'
      }
      
    },
  },
  plugins: [],
}

