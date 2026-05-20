/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06080F',
        card: '#1A1F35',
        'card-light': '#222842',
        gold: {
          DEFAULT: '#E8C547',
          light: '#F2D96B',
          dark: '#C9A832',
          dim: 'rgba(232, 197, 71, 0.15)',
        },
        orange: {
          DEFAULT: '#FF6B35',
          light: '#FF8A5C',
          dark: '#E55A28',
        },
        heading: '#F0EDE8',
        body: '#9A978F',
        'body-light': '#C8C4BC',
        navy: '#1A1F35',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cursive: ['"Dancing Script"', 'cursive'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'cursor-glow': 'cursor-glow 1.5s ease-in-out infinite',
        'badge-float': 'badge-float 4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'whatsapp-pulse': 'whatsapp-pulse 2s ease-in-out infinite',
        'draw-border': 'draw-border 0.6s ease-out forwards',
        'gold-pulse': 'gold-pulse 2s ease-in-out infinite',
        'tilt-left': 'tilt-left 0.5s ease-out forwards',
        'tilt-right': 'tilt-right 0.5s ease-out forwards',
        'noise': 'noise 0.5s steps(10) infinite',
        'write': 'write 2s ease-out forwards',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'shimmer': {
          '0%': { left: '-200%' },
          '100%': { left: '200%' },
        },
        'cursor-glow': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
        'badge-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-6px) rotate(1deg)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'whatsapp-pulse': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(37, 211, 102, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(37, 211, 102, 0.5), 0 0 50px rgba(37, 211, 102, 0.2)' },
        },
        'draw-border': {
          '0%': { strokeDashoffset: '100%' },
          '100%': { strokeDashoffset: '0' },
        },
        'gold-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(232, 197, 71, 0.2), inset 0 0 15px rgba(232, 197, 71, 0.02)',
            borderColor: 'rgba(232, 197, 71, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(232, 197, 71, 0.35), 0 0 60px rgba(255, 107, 53, 0.1), inset 0 0 20px rgba(232, 197, 71, 0.05)',
            borderColor: 'rgba(232, 197, 71, 0.7)',
          },
        },
        'noise': {
          '0%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 10%)' },
          '80%': { transform: 'translate(-15%, 0)' },
          '90%': { transform: 'translate(10%, 5%)' },
          '100%': { transform: 'translate(5%, 0)' },
        },
        'write': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
