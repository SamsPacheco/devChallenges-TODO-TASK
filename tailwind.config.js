/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "White-primary": "#F8FAFC",
        "Yellow-secondary": "#F5D565",
        "Pink-third": "#F5E8D5",
        "Orange-four": "#E9A23B",
        "ligth-green-six": "#A0ECB1",
        "green-seven": "#32D657",
        "pink-eight": "#F7D4D3",
        "red-nine": "#DD524C",
        "light-gray-ten": "#E3E8EF",
        "gray-ele": "#97A3B6",
        "blue-tw": "#3662E3",
        "two-gray-th": "#00000033"
      }
    },

  },
  plugins: [],
}