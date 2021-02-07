const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
}
