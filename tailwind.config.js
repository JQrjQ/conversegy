/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens: {
      xs: "314px",
      sm: '480px',
      md: '786px',
      lg: '1024px',
      xl: '1200px',
    },
    colors: {
      'blackish': '#5F6366',
      'blueish': '#4D6D9A',
      'purpleish': '#86B3D1',
      'light-blueish': '#99CED3',
      'silver': '#ecebff',
      'bubble-gumish': '#EDB5BF',
      'bermuda': '#78dcca',
      'white': '#fff'
    },
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

