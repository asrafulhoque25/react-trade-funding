/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    extend: {
      boxShadow: {
        'black_sw': '0px 30px 60px 0px rgba(0, 50, 126, 0.10);',
        'md': '0px 30px 60px 0px rgba(0, 50, 126, 0.10);',
        '3xl': '0 30px 60px 0 rgba(0, 50, 126, 0.10)',
      },
      colors: {
        "dark-dark-1":"#001B44",
        "dark-dark-2":"#4B5768",
        "dark-dark-3":"#5D6878",
        "dark-dark-4":"#8E97A6",
        "dark-dark-6":"#E5E8ED",
        "ascent-1":"#FF5E5A",
        "ascent-3":"#DAF6F8",
        "ascent-2":"#00149E",
        "secondary-main":"#FFB966",
        "primary-main":"#0067FF",
        "primary-main2":"#1252B0",
        "primary-main-light":"#E5EFFE",
        "primary-white":"#334969",
      },
      fontSize: {
        base: '16px',
      }
    },
  },
  plugins: [],
}

