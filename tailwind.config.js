/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf4f0',
          100: '#fce8e0',
          200: '#f9d1c1',
          300: '#f5b9a2',
          400: '#f09c7d',
          500: '#e16b3b', // Primary brand color
          600: '#d15a2b',
          700: '#b44a22',
          800: '#933c1d',
          900: '#78301a',
          DEFAULT: '#e16b3b',
        },
        secondary: {
          50: '#e7eaeb',
          100: '#cfd5d7',
          200: '#a0acb0',
          300: '#728389',
          400: '#435a62',
          500: '#1b3942', // Secondary brand color
          600: '#18333b',
          700: '#152b32',
          800: '#122229',
          900: '#0e1a20',
          DEFAULT: '#1b3942',
        },
        success: {
          DEFAULT: '#4CAF50',
          dark: '#3a8c3f',
        },
        danger: {
          DEFAULT: '#EF4444',
          dark: '#B91C1C',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        background: {
          page: '#f7f7f7',
          card: '#ffffff',
        },
        border: {
          DEFAULT: '#e5e7eb',
          accent: '#e16b3b',
        },
        text: {
          primary: '#1b3942',
          secondary: '#4b5563',
          muted: '#6b7280',
          light: '#ffffff',
        },
      },
      fontFamily: {
        serif: ['PT Serif', 'serif']
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}