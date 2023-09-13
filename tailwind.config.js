/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    'node_modules/tv-*/dist/tv-*.umd.min.js',
  ],
  theme: {
    extend: {
      colors: {
        corporate: '#F04935',
        corporateBg: '#E8E8E8',
        bgShade3: '#F4F8FB',
        successLight: '#F1F9F1',
        blackPrimary: '#151414',
        blackSecondary:'#676769',
        blackLight: '#4D4D4F',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      animation: {
        animateZoom: 'animateZoom 0.6s',
      },
      keyframes: {
        animateZoom: {
          from: { transform: 'scale(0)' },
          to: { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
