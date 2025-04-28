/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          950: '#080c14',
          900: '#0A0E17',
          800: '#101725',
          700: '#162033',
          600: '#1C2941',
          500: '#22324F',
        },
        'gold': {
          500: '#D4AF37',
          400: '#DCBB51',
          300: '#E4C76B',
          200: '#ECD385',
          100: '#F3DF9F',
        },
        'accent': {
          500: '#E63946',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'clapboard': 'clapboard 1.5s ease-out forwards',
        'spotlight': 'spotlight 15s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        clapboard: {
          '0%': { transform: 'rotateX(0deg)' },
          '15%': { transform: 'rotateX(-30deg)' },
          '30%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
        spotlight: {
          '0%': { 
            opacity: '0.3', 
            transform: 'translate(-50%, -50%) scale(1) rotate(0deg)' 
          },
          '50%': { 
            opacity: '0.5', 
            transform: 'translate(-50%, -50%) scale(1.5) rotate(180deg)' 
          },
          '100%': { 
            opacity: '0.3', 
            transform: 'translate(-50%, -50%) scale(1) rotate(360deg)' 
          },
        }
      },
      backgroundImage: {
        'spotlight-gradient': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
      },
    },
  },
  plugins: [],
};