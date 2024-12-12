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
      },
      boxShadow: {
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)'
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px'
      },
    },
  },
  plugins: [],
}

