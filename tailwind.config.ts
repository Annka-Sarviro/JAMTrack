import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main_dark: 'rgb(var(--dark))',
        main_card: 'rgb(var(--card))',
        main_theme: 'rgb(var(--theme))',
        green_back: 'rgb(var(--back))',
        black: 'rgb(var(--black))',
        white: 'rgb(var(--white))',
        gray_light: 'rgb(var(--graylight))',
        gray_dark: 'rgb(var(--graydark))',
        red_error: 'rgb(var(--error))',
        red_back: 'rgb(var(--redback))',
        gray_back: 'rgba(var(--grayback))',
        red_card: 'rgb(var(--red))',
        blue_card: 'rgb(var(--blue))',
        yellow_card: 'rgb(var(--yellow))',
        green_card: 'rgb(var(--green))',
        orange_card: 'rgb(var(--orange))',
      },
      fontFamily: {
        exo: ['Exo 2', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
