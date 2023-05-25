/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'play': ['Playfair Display', 'serif'],
        'ari': ['Arizonia', 'cursive'],
        'header': ['Alkatra', 'cursive'],
        'abril': ['Abril Fatface', 'cursive']
      }
    },
  },
  plugins: [],
}

