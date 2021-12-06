// craco.config.js
// Create React App Configuration Override
// necesarry to use Tailwind with a CRA app
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
