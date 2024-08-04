const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/me.png')",
        'hero1': "url('../src/assets/lockscereen.jpg')"
      },
    },
  },
  plugins: [],
}
