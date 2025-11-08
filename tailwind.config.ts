/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{ts,tsx}","./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Rajdhani','Space Grotesk','system-ui'],
        sans: ['Space Grotesk','system-ui'],
        mono: ['JetBrains Mono','monospace']
      },
      colors: {
        // Mythological weapon inspired colors
        'vajra': {
          50: '#F4F7FF',
          100: '#E2E8FF',
          500: '#4F46E5',
          600: '#4338CA',
          900: '#1E1B4B'
        },
        'trishul': {
          100: '#FFF0F8',
          200: '#FFD6EC',
          500: '#FF3FA0',
          700: '#D63384'
        },
        'chakra': {
          100: '#E8FFFF',
          300: '#7DEAFF',
          500: '#00E5FF',
          700: '#00B8CC'
        },
        'cosmic': {
          100: '#E6F8FF',
          300: '#00BFFF',
          500: '#0099CC',
          900: '#070B14'
        },
        'mystic': {
          100: '#F4EEFF',
          300: '#926EFF',
          500: '#8A63FF',
          900: '#2C1450'
        }
      },
      backgroundImage: {
        'astra-pattern': "url('/patterns/astra-bg.svg')",
        'chakra-glow': "radial-gradient(circle at center, var(--chakra-500) 0%, transparent 70%)",
        'cosmic-grid': "linear-gradient(to right, rgba(99,102,241,.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,.1) 1px, transparent 1px)",
        'hero-gradient': "radial-gradient(circle at top right, rgba(79,70,229,0.2) 0%, transparent 60%), radial-gradient(circle at bottom left, rgba(255,51,153,0.15) 0%, transparent 60%)"
      },
      keyframes: {
        'cosmic-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' }
        },
        'chakra-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'astra-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'cosmic-pulse': 'cosmic-pulse 3s ease-in-out infinite',
        'chakra-spin': 'chakra-spin 20s linear infinite',
        'astra-flow': 'astra-flow 15s ease infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      boxShadow: {
        'astra': '0 0 60px -15px rgba(79,70,229,0.5)',
        'chakra': '0 0 60px -15px rgba(255,153,0,0.5)',
        'inner-glow': 'inset 0 0 30px rgba(255,255,255,0.1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
}
