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
      fontSize:{
        ssm: '10px',
        smm:'5px'
      },

      keyframes: {
        focus:{
          '0%': {
            opacity: '0',
            transform: 'translateY(20rem)',
        },
        '100%': {
            opacity: '1',
            transform: 'translateY(0)',
        },
        }
      },
      animation:{
        'focus-up':'focus 0.2s linear'
      }

    },
  },
  plugins: [],
}
export default config
