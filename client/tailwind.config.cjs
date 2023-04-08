/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s cubic-bezier(0.19, 1, 0.22, 1) infinite',
      }
    },
  },
  plugins: [],
}
