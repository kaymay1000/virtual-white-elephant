// tailwind.config.js
module.exports = {
  // configure Tailwind to remove unused styles in production
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ['hover']
    },
  },
  plugins: [],
}
