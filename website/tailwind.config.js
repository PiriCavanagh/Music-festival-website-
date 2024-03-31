/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/hero.jpg')",
      },
      listStyleImage: {
        logo: 'url("/src/assets/logo.jpg")',
      },
      colors: {
        'piri-cyan': '#00b1ff',
        'piri-blue': '#4F9AF5',
        'piri-darkblue': '#007DC6',
      },
      fontFamily: {
        pirifont: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
  
}
