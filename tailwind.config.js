/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tomRed: '#C8102E',
        torranceBlue: '#003E7A',
        accentRed: '#E30613',
        darkNavy: '#002F5A',
        lightGray: '#F4F4F4',
        darkGray: '#333333',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      maxWidth: {
        '7xl': '1200px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 