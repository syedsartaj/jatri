/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        corporate: '#F04935',
        corporateBg: '#E8E8E8',
        bgShade3: '#F4F8FB',
        successLight: '#F1F9F1',
        blackPrimary: '#151414',
        blackSecondery:'#676769',
        blackLight: '#4D4D4F',
      },
      // fontFamily: {
      //   inter: ['"Inter"', ...defaultTheme.fontFamily.sans]
      // },
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
