/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme');

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        "primary-dark": 'var(--color-primary-dark)',
        "primary-dark2": 'var(--color-primary-dark2)',
        "primary-light": 'var(--color-primary-light)',
        "primary-light2": 'var(--color-primary-light2)',
        secondary: 'var(--color-secondary)',
        "secondary-dark": 'var(--color-secondary-dark)',
        "secondary-dark2": 'var(--color-secondary-dark2)',
        "secondary-light": 'var(--color-secondary-light)',
        "secondary-light2": 'var(--color-secondary-light2)',
        accent: 'var(--color-accent)',
        accent2: 'var(--color-accent-2)',

        //bg colors
        "main-dark": 'var(--color-bg-dark)',
        "main-darker": 'var(--color-bg-darker)',
        "main-darkest": 'var(--color-bg-darkest)',
        "main-light": 'var(--color-bg-light)',
        "main-lighter": 'var(--color-bg-lighter)',
        "main-lightest": 'var(--color-bg-lightest)',

        // text colors
        t1: 'var(--color-text-1)',
        t2: 'var(--color-text-2)',
        t3: 'var(--color-text-3)',
        t4: 'var(--color-text-4)',
        t5: 'var(--color-text-5)',
        tw: 'var(--color-text-white)',
      }

    },
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans]
    },
    screens: {

      xs: {'max': '640px'},
      sm: {'max': '980px'},
      md: {'min': '981px', 'max': '1200px'},
      lg: {'min': '1201px', 'max': '1440px'},
      xl: {'min': '1441px', 'max': '1920px'},
      // xs: '320px',
      // sm: '350px',
      // md: '768px',
      // lg: '976px',
      // xl: '1440px',
    },
    
    fontSize: {
      "3xs": '0.375',
      "2xs": '0.5rem',
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
};

