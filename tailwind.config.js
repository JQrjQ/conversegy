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
    fontFamily: {
      'lato': ['Lato'],
      'mono': ['Roboto Mono', 'monospace'],
    },
    backgroundImage: {
      'hero-home': "url('/static/img/conversegy_homepage_hero_sheep.webp')",
      'footer-texture': "url('/img/footer-texture.png')"
    },
    backgroundSize: ({ theme }) => ({
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      ...theme('spacing')
    }),
  
    colors: {
      'blackish': '#5F6366',
      'blueish': '#301008',
      'purpleish': '#482673',
      'light-blueish': '#4cbfa6',
      'silver': '#ecebff',
      'bubble-gumish': '#ed0b70',
      'bermuda': '#78dcca',
      'white': '#fff',
      'softlilac': '#f6ebf4',
      'black': '#000',
      'yellow': '#FFFF00',
      'transparent': 'transparent'
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
  
