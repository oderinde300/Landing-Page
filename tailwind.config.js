/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '960px',
        lg: '1024px',
        xl: '1280px',
        '1xl': '1340px',
        '2xl': '1536px',
      },
      fontFamily: {
        body: ['Roboto']
      },
      colors: {
        primary: '#FFAD4C',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        textColor: '#4B4B4B'

      }
    },
  },
  plugins: [],
}
