/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0c0800',
        accents: {
          100: '#111111',
          200: '#333333',
          300: '#444444',
          400: '#666666',
          500: '#888888',
          600: '#999999',
          700: '#eaeaea',
          800: '#fafafa',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
