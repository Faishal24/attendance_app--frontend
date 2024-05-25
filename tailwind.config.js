/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#75a19d',
        'main-dark': '#293635',
        'main-text': '#f5fffe',

        'secondary': '#BDDFDD',
        'secondary-dark': '#0047a7',
        'secondary-text': '#1a1f1f',
        'secondary-hover': '#caedeb',
        'secondary-hover2': '#2366c2',
      }
    },
  },
  plugins: [],
}

