import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#000000',
          secondary: '#ffffff',
          accent: '#3b82f6',
          neutral: '#2a323c',
          'base-100': '#ffffff',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
        dracula: {
          primary: '#ff79c6',
          secondary: '#bd93f9',
          accent: '#ffb86c',
          neutral: '#414558',
          'base-100': '#282a36',
          info: '#8be9fd',
          success: '#50fa7b',
          warning: '#f1fa8c',
          error: '#ff5555',
        },
      },
    ],
  },
};
