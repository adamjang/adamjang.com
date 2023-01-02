/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['adobe-garamond-pro', 'sans-serif'],
      sans: ['franklin-gothic-urw', 'serif'],
    },
    extend: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}