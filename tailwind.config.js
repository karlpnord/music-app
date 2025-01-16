/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#500fb9',
        primaryContent: '#deccfb',
        primaryLight: '#6413e8',
        primaryDark: '#3c0b8a',
        secondary: '#b90fb1',
        secondaryContent: '#fbccf9',
        secondaryLight: '#e813de',
        secondaryDark: '#8a0b84',
        bgForeground: '#25202d',
        bgBackground: '#18151e',
        borderClr: '#3d354b',
        textColor: '#fbfbfc',
        textColorLight: '#d7d2df',
        textColorLightest: '#a296b5',
        bgSuccess: '#0fb90f',
        textSuccess: '#ccfbcc',
        bgWarning: '#b9b90f',
        textWarning: '#000000',
        bgError: '#b90f0f',
        textError: '#fbcccc',
      },
      zIndex: {
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
      }
    },
  },
  plugins: [],
};