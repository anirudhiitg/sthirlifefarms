/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kraft: {
          light: '#F4EFEA',
          DEFAULT: '#E8E0D5',
          dark: '#D8CBB9',
        },
        forest: {
          light: '#3C5C4A',
          DEFAULT: '#2C4637',
          dark: '#1E3226',
        },
        terracotta: {
          light: '#C87358',
          DEFAULT: '#B45F44',
          dark: '#934831',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
