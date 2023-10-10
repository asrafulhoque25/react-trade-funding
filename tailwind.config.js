/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-dark-1":"#001B44",
        "dark-dark-2":"#4B5768",
        "ascent-1":"#FF5E5A",
        "ascent-3":"#DAF6F8",
        "secondary-main":"#FFB966",
        "primary-main":"#0067FF",
        "primary-main2":"#1252B0",
      },
      fontSize: {
        base: '16px',
      }
    },
  },
  plugins: [],
}

