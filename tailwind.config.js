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
      'footer-texture': "url('/img/footer-texture.png')",
      'work': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
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
      'transparent': 'transparent',
      'light-grayish': '#e5e7eb',
      'grayish': '#d1d5db',
      'dark-grayish': '#1e293b',
      'blue-400': '#60a5fa',
      'blue-500': '#3b82f6',
      'blue-700': '#1d4ed8',
      'gray-50': '#f9fafb',
      'gray-700': '#374151',
      'gray-100': '#f3f4f6',
      'gray-400': '#9ca3af',
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
  
