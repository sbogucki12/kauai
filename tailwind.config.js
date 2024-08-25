/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // This covers all files in the app directory and its subdirectories
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}", // This specifically targets the components folder
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'accent-color': 'var(--accent-color)',
        'background-color': 'var(--background-color)',
        'text-color': 'var(--text-color)',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.4)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.4)',
        'lg': '0 3px 6px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-md': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-lg': {
          textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}