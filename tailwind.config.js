/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B9FF66',
        dark: '#191A23',
        light: '#F3F3F3',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['60px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h2: ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h3: ['30px', { lineHeight: '1.2' }],
        h4: ['20px', { lineHeight: '1.3' }],
        h5: ['18px', { lineHeight: '1.3' }],
        h6: ['16px', { lineHeight: '1.3' }],
      },
    },
  },
  plugins: [],
}

