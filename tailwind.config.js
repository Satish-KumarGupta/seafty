/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'container': "url('https://uat.safetyassist.velocityvue.com/static/media/city-background-x2.3a8d7783.png')"
      }
    },
  },
  plugins: [],
}

