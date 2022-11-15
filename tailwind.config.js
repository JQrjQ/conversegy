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
   /* fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },*/
    
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
  
