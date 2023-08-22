/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "darkGray": "#262626",
        'green': '#15803d',
        'purple': '#6b21a8',
        'red': '#991b1b',
        'blue': '#1e40af',
        'teal': '#0f766e',
        'cyan': '#0e7490',
        'yellow': '#eab308',
        'orange': '#ea580c',
        'gray': '#57534e',
        'lightCoral': '#f08080',
        'fuchsia': '#9400d3',
        'pink': '#f472b6',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};

