// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#D11F4E',
      },
      fontFamily: {
        // Add your custom fonts here
        'sans': ['Sora', ...defaultTheme.fontFamily.sans],
        'mono': ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        'heading': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}