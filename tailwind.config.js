/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html, js}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['"Fira Sans"', ...defaultTheme.fontFamily.sans],
      },
  },
  plugins: [],
}

}