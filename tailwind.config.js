/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite', // slow infinite spin
      },
    },
  },
  plugins: [],
}
