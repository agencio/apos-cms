const defaultTheme = require('tailwindcss/defaultTheme');

// Brand colors — AntiDDoS.su cyber-blue
const brand = process.env.APP_BRAND || 'antiddos';
const brandColors = require(`./colors/${brand}.json`);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.html',
    process.env.NODE_ENV === 'production'
      ? './modules/**/*.{html,js,vue}'
      : './modules/**/*.{html,njk,js,vue}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [ '"Inter var"', ...defaultTheme.fontFamily.sans ],
      mono: [ '"JetBrains Mono"', ...defaultTheme.fontFamily.mono ]
    },
    extend: {
      colors: {
        brand: brandColors,
        gray: {
          DEFAULT: '#D1D5DB'
        },
        // AntiDDoS dark theme colors
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        },
        accent: {
          green: '#10b981',
          red: '#ef4444',
          yellow: '#f59e0b',
          purple: '#8b5cf6'
        }
      },
      screens: {
        xs: '475px'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  safelist: [
    'app-pager__item',
    'is_active',
    'text-brand',
    'text-brand-300',
    'apos-input--select',
    // AntiDDoS specific
    'bg-dark-900',
    'bg-dark-800',
    'text-dark-200',
    'border-brand'
  ],
  corePlugins: {
    aspectRatio: false
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};
