/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        'roboto': ['Roboto','sans-serif'],
        'roboto-slab': ['Roboto Slab','sans-serif'],
        'roboto-mono': ['Roboto Mono','monospace'],
        'roboto-condensed': ['Roboto Condensed','sans-serif'],
        'roboto-slab-condensed': ['Roboto Slab Condensed','sans-serif'],
        'roboto-mono-condensed': ['Roboto Mono Condensed','monospace'],
        'roboto-condensed-condensed': ['Roboto Condensed Condensed','sans-serif'],
        'roboto-slab-condensed-condensed': ['Roboto Slab Condensed Condensed','sans-serif'],
        'roboto-mono-condensed-condensed': ['Roboto Mono Condensed Condensed','monospace'],
        'teko-sans': ['Teko','sans-serif'],
        'merriweather-regular': ['Merriweather', 'serif'],
        'kanit': ['Kanit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}