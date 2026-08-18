/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Gold palette ─────────────────────────
        gold: {
          50:  '#fdf9ee',
          100: '#f9efcf',
          200: '#f3dc9a',
          300: '#e8c45d',
          400: '#d4a843',
          500: '#b8891f',
          600: '#9a6e14',
          700: '#7a5410',
          800: '#5e3f0e',
          900: '#3d280a',
        },
        // ── Cream palette ────────────────────────
        cream: {
          50:  '#fefcf8',
          100: '#fdf8ef',
          200: '#faf0db',
          300: '#f5e4bf',
          400: '#eed4a0',
        },
        // ── Noir/dark palette ────────────────────
        noir: {
          900: '#0e0c09',
          800: '#1a1610',
          700: '#251f16',
          600: '#332a1b',
          500: '#4a3c27',
        },
      },

      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['Jost', 'system-ui', 'sans-serif'],
      },

      maxWidth: {
        '8xl': '90rem',
      },

      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },

      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'fade-in':    'fadeIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
    },
  },
  plugins: [],
}
