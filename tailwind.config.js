// tailwind.config.js
module.exports = {
  // configure Tailwind to remove unused styles in production
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'yellow': {
        100: '#FFFBE8',
        200: '#FEF7D8',
        300: '#FDF2BE',
        400: '#FCEDA6',
        500: '#FAE581',
        600: '#F9DE60',
        700: '#F6CD09',
      },
      'orange': {
        100: '#FCEDE3',
        200: '#F9DBC7',
        300: '#F6C8A9',
        400: '#F1AE80',
        500: '#EE9961',
        600: '#EB8846',
        700: '#E66A19',
      },
      'red': {
        100: '#FCE1E4',
        200: '#FACED2',
        300: '#F7B4BB',
        400: '#F497A0',
        500: '#F17985',
        600: '#ED5565',
        700: '#E6192E',
      },
      'pink': {
        100: '#FCE6F4',
        200: '#FACFE9',
        300: '#F8BADF',
        400: '#F59FD3',
        500: '#F183C5',
        600: '#EE5FB5',
        700: '#E61995',
      },
      'purple': {
        100: '#F5EAF3',
        200: '#EDD9E9',
        300: '#E5C8DF',
        400: '#DBB2D2',
        500: '#D09AC4',
        600: '#C27DB3',
        700: '#B25A9F',
      },
      'indigo': {
        100: '#F4EDFF',
        200: '#ECE0FE',
        300: '#D8BFFE',
        400: '#BA8CFD',
        500: '#9B58FC',
        600: '#6E0CFB',
        700: '#4903AE'
      },
      'gray': {
        100: '#EBEBEB',
        200: '#DDDDDD',
        300: '#C4C4C4',
      },
      'white': '#FFFFFF',
      'black': '#000000',
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [],
}
