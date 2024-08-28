/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0px 30px 0px #FFCF2B",
      },
      colors: {
        primary: {
          100: "#FFCF2B",
          200: "#FF8935",
        },
        secondary: {
          100: "#10192e",
          200: "#0A101E",
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
