/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customWhite: "#F9F9F9",
        customBlack: "#212121",
        customBlue: "#2E3A8C",
        customGreen: "#3B755F",
        customBeige: "F2EBDB"
      }
    },
  },
  plugins: [],
}

