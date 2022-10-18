/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          primary:'#3296e6',
          dark:"#0f172a",
          secondary:'#64748b'
        }
      }
  },
  plugins: [],
}
