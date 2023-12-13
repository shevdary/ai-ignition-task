// eslint-disable-next-line no-undef
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#F5EFE6',
      'light': '#ffffff',
      'light-gray': '#4C4D4F80',
      'dark': '#4C4D4F',
      'black': '#000000',
      'divider': "rgba(76, 77, 79, 0.50)",
      'error': '#E11D48',
      'description': '#A5A6A7',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'title': ['34px', '51px'],
      'large': '40px',
      'medium': ['18px', '21px']
    },
    borderRadius: {
      'small': '14px',
      '3xl': "1.5rem",
    },
    extend: {
    },
  },
  plugins: [],
}
