/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
      },
      colors: {
        primary: {
          100: "#1a1a1a",
          200: "#fafafa",
          300: "#ececec",
          400: "#4a4a4a",
        },
      },
    },
  },
  plugins: [],
};
