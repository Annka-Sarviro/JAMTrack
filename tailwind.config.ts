import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
        main_dark: '#0C4E42',
        main_card: '#0B7A6A',
        main_theme: '#14988B',
        green_back: '#DEFFFE',
        black: '#1E1E1E',
        white: '#FFFFFF',
        gray_light: '#D9D9D9',
        gray_dark: '#BBBABA',
        red_error: '#9C1414',
        red_back: '#FFC2C2',
        gray_back: 'rgba(187, 186, 186, 0.50)',
        red_card: '#C31F5C',
        blue_card: '#2B74B9',
        yellow_card: '#FCC02A',
        green_card: '#69A042',
        orange_card: '#F57C1F',
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
