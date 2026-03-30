/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { 400: '#8a7340', 500: '#6d5a30', 600: '#554520' },
        warm: { 50: '#faf8f5', 100: '#f5f2ed', 200: '#ece9e3', 300: '#e8e4dc' },
        // Palette sombre pour la homepage et les sections CTA
        dark: { 50: '#1a1714', 100: '#141210', 200: '#0f0d0b', 300: '#0c0a09', 400: '#090807', 500: '#060504' },
      },
      fontFamily: {
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
