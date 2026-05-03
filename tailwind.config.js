/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          300: '#ffb74d',
          400: '#ffa726',
          500: '#ff6b00',
          600: '#e65100',
          700: '#ff6b00',
        },
        maroon: {
          500: '#7f1d1d',
          600: '#450a0a',
          700: '#3a0909',
          800: '#2b0707',
          900: '#1c0505',
        },
        nature: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      }
    },
  },
  plugins: [],
}
