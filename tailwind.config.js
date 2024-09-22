
export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        primary: {
          100: '#your-color-code', 
          200: '#your-color-code', 
        },
      },
      boxShadow: {
        custom: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
