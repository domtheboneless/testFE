/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './public/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [],
   corePlugins: {
    preflight: false,
  }
 }
 