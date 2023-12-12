// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#F5EFE6',
      'light': '#ffffff',
      'light-gray': '#4C4D4F80',
      'dark': '#4C4D4F',
      'black': '#000000',
      'divider': "rgba(76, 77, 79, 0.50)",
      "error": '#E11D48',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'title': ['34px', '51px'],
    },
    borderRadius: {
      "small": '14px',
      "3xl": "1.5rem",
    },
    extend: {
    },
  },
  plugins: [],
}