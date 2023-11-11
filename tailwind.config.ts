import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(22px)' },
          '50%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        jump: 'jump 800ms ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
