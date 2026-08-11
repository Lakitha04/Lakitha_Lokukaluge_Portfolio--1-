/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0c0f',
          soft: '#0d1014',
        },
        surface: {
          DEFAULT: '#12151b',
          raised: '#191d24',
          border: '#242932',
        },
        ink: {
          DEFAULT: '#e9e7e1',
          dim: '#9aa1ad',
          faint: '#5c636f',
        },
        gold: {
          DEFAULT: '#d4a24c',
          soft: '#e8bd75',
          dim: '#8a6b34',
        },
        crimson: {
          DEFAULT: '#a6303b',
          soft: '#c44650',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        blink: 'blink 1s step-end infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
