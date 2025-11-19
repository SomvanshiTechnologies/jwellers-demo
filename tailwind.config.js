/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-serif': ['"Libertinus Serif Display"', '"Noto Serif TC"', 'serif'],
      },
    },
  },
  plugins: [],
}
