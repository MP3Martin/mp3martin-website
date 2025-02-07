import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        jetbrains: ['var(--font-jetbrains)'],
      },
    },
  },
  darkMode: 'selector',
  plugins: [heroui(
    {
      themes: {
        dark: {
          colors: {
            background: {
              DEFAULT: '#0d1422',
            },
            content1: '#192037',
            content2: '#1f273f',
            content3: '#2a334d',
            content4: '#35405c',
            default: {
              foreground: '#ECEDEE'
            }
          }
        }
      }
    }
  )],
  blocklist: [
    'motion-reduce:transition-none'
  ]
};
