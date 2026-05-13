/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#b8860b',
          light: '#d4a017',
          dark: '#9a7009',
          50: '#fdf8ee',
          100: '#f9edcc',
        },
        dark: '#1a1a1a',
        charcoal: '#2d2d2d',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
