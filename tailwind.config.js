/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'purple': '#8053FF',
        'black-800': '#333333',
        'black-900': '#1A1A1A',
        'grey-100': '#F2F2F2',
        'grey-900': '#808080',

      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
        'body-2': ['Arial', 'sans-serif'],
      },
    }
  },
}

