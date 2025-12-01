/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
      }
    }
  },
  plugins: []
};