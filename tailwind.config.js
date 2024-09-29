module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "light": "#fff4e0",
          "DEFAULT": "#B3B3FF",
          "dark": "#ffcc99"
        },
        secondary: {
          'light': '#f8f4e8',
          'DEFAULT': '#000000',
          'dark': '#000000ff'
        },
        accent: {
          light: '#fefcbf',
          DEFAULT: '#faf089',
          dark: '#ecc94b',
        },
        neutral: {
          light: '#f7fafc',
          DEFAULT: '#edf2f7',
          dark: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        josefinSlab: ["Josefin Slab", "serif"],
      },
    },
  },
  plugins: [],
}
