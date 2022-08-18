/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Abril': ['Abril Fatface', 'cursive'],
      'Finlandica': ['Finlandica', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}