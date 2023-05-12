/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgBlue: '#d2ecff'
      },
      backgroundImage: {
        homeTextBg: "url('/public/home-text-bg.png')"
      },
      textColor: {
        textLightBlue: '#d2ecff'
      }
    },
  },
  plugins: [],
}

