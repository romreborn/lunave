/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baby-pink': '#F8C9D4',
        'cream-nude': '#FDF1ED',
        'charcoal-gray': '#333333',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}