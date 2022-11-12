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
