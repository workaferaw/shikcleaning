/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-serif-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        navy: '#01041e',
        'navy-mid': '#071535',
        'navy-light': '#0d2a52',
        paper: '#FFFFFF',
        'paper-mid': '#F3F5FA',
        brand: '#2F6FFF',
        'brand-light': '#7AA2FF',
        'brand-dark': '#1F4FDB',
      },
    },
  },
  plugins: [],
}
