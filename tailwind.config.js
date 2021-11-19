module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0f171e',
        secondary: '#1a242f',
        'primary-text': '#ffffff',
        'secondary-text': '#79b8f3',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
