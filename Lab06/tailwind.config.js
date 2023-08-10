/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes:{
        yellowFade:{
          '0%': {background: '#FFFF00'},
          '100%': {background: 'transparent'}
        }
      },
      animation:{
        'yellowFade': 'yellowFade 3s ease-in-out'
      }
    },
  },
  plugins: [],
}

