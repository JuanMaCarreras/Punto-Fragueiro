/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        orange: '#f17808'
      },

      backgroundImage: {
        mainImg: 'url(assets/pizza-humo.jpg)',
        menuBackground: 'url(assets/background-menu.jpg)'

      }
    }
  },
  plugins: []
}
