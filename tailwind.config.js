/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors: {
        'custom-blue': `#249498`,
      },
      boxShadow: {
        '3xl': '0 1px 3px 0 rgba(0,0,0,.2),0 2px 1px -1px rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.14)'
      }
    }
  },
  plugins: [require("daisyui")],
}