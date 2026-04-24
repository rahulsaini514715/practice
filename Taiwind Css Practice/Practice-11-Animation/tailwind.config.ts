import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ws: '#2699fb',
        lip: '#ccc',
      },
      boxShadow: {
        myshadow: '0px 0px 20px 2px red',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotateDiv: 'rotate 2s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
