/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter' : ['Inter Tight', 'sans-serif'],
      'inconsolata' : ['Inconsolata', 'monospace'],
    },
    animation : {
      bounce : 'bounce 2s infinite'
    },

    keyframes : {
      bounce : {
        '0%,100%' : {transform: 'translateY(-3px)'},
        '50%' : {transform: 'translateY(3px)'}
      }
    },
    extend: {
      colors : {
        'primary' : '#0d0d0d',
        'secondary' : '#F8F7F2',
        'accent' : '#32e780'
      }
    },
  },
  plugins: [],
}