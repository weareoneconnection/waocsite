import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#060606',
        line: 'rgba(255,255,255,0.1)',
        glow: '#ff8a26',
        'glow-soft': '#ffd16d',
        'identity-blue': '#66b3ff',
      },
      boxShadow: {
        glow: '0 0 60px rgba(255,138,38,0.22)',
      },
      backgroundImage: {
        grid: 'radial-gradient(rgba(255,255,255,0.075) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
