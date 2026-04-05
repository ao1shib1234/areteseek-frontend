/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color - used for buttons, links, CTAs, focus states
        primary: {
          DEFAULT: '#0C4DA2',
          50:  '#e8f0fb',
          100: '#c5d8f5',
          200: '#9ebdee',
          300: '#75a1e7',
          400: '#4d86e0',
          500: '#0C4DA2',
          600: '#0a4392',
          700: '#083780',
          800: '#062b6e',
          900: '#041e5c',
        },
        // Secondary green - used as accent preset color
        secondary: {
          DEFAULT: '#008B2C',
          50:  '#e6f4eb',
          100: '#c0e3cc',
          200: '#94d1aa',
          300: '#65bf87',
          400: '#35b168',
          500: '#008B2C',
          600: '#007a26',
          700: '#00681f',
          800: '#005618',
          900: '#00440f',
        },
        // Neutral / text colors
        neutral: {
          900: '#000000',
          800: '#313131',
          700: '#373737',
          600: '#585858',
          200: '#dddddd',
          100: '#eeeeee',
          50:  '#f8f8f8',
          0:   '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs':   ['13px', { lineHeight: '1.5' }],
        'sm':   ['14px', { lineHeight: '1.5' }],
        'base': ['16px', { lineHeight: '1.6' }],
        'xl':   ['20px', { lineHeight: '1.4' }],
        '3xl':  ['36px', { lineHeight: '1.2' }],
        '4xl':  ['42px', { lineHeight: '1.1' }],
      },
      spacing: {
        // Extracted from bmeters.com spacing scale
        '1.5':  '0.375rem',  // ~6px
        '2.5':  '0.44rem',   // ~7px
        '3':    '0.67rem',   // ~11px
        '4':    '1rem',      // 16px
        '6':    '1.5rem',    // 24px
        '9':    '2.25rem',   // 36px
        '14':   '3.38rem',   // ~54px
        '20':   '5.06rem',   // ~81px
      },
      borderRadius: {
        'pill': '9999px',
      },
      maxWidth: {
        'container': '1400px',
        '8xl': '1400px',
      },
      boxShadow: {
        'natural':  '6px 6px 10px -1px rgba(0,0,0,0.15), 0 2px 2px -1px rgba(0,0,0,0.06)',
        'deep':     '2px 4px 16px 0 rgba(0,0,0,0.08), 0 2px 4px 0 rgba(0,0,0,0.05)',
        'sharp':    '1px 1px 3px rgba(0,0,0,0.25)',
        'outlined': '6px 6px 0 0 rgba(0,0,0,0.08)',
        'crisp':    '6px 6px 0 rgba(0,0,0,0)',
      },
    },
  },
  plugins: [],
}
