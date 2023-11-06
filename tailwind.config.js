/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '784px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        introAndEmailBg: 'hsl(217, 28%, 15%)',
        mainBg: 'hsl(218, 28%, 13%)',
        footerBg: 'hsl(216, 53%, 9%)',
        testimonialBg: 'hsl(219, 30%, 18%)',
        cta: 'hsl(176, 68%, 64%)',
        cta2: 'hsl(0, 100%, 63%)',
        btn: 'hsl(188deg  61%  57%)',
      },
    },
  },
  plugins: [],
};

