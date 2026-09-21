/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#050505',
        dark: '#0B0D0C',
        white: '#F5F5F2',
        electric: '#B6FF00',
        darkgreen: '#163000',
        gray: {
          light: '#CCCCCC',
          DEFAULT: '#8A8A8A',
          dark: '#1F2220',
        },
        orange: {
          accent: '#FF5A1F',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.02em',
        widest: '0.25em',
      },
      boxShadow: {
        'glow-electric': '0 0 25px rgba(182, 255, 0, 0.35)',
        'glow-orange': '0 0 25px rgba(255, 90, 31, 0.35)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
      }
    },
  },
  plugins: [],
}
