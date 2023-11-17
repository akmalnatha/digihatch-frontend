/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        purple: {
          primary: "#5A3D99",
          secondary: "#6F4BBD",
          ternary: "#8057D9",
          light: "#D5D5F5"
        },
        orange: {
          primary: "#F36D26",
          secondary: "#FB8C26",
          ternary: "#FF9E45"
        },
        blue: {
          primary: "#23AEB1",
          secondary: "#44B9BB",
          ternary: "#5DC9CA",
          dark: "#363062"
        },
        yellow: {
          primary: "#F3BC00",
          secondary: "#FFCE26",
          ternary: "#FFDB60"
        },
        mono: {
          50: "#FAFAFF",
          100: "#EEF0F2",
          200: "#ECEBE4",
          300: "#DADDD8",
          600: "#777879",
          700: "#1C1C1C",
        },
        green: {
          dark: "#40E85B",
          light: "#41FF5F"
        },
        error: "#FF575F",
      },
    },
  },
  plugins: [],
}

