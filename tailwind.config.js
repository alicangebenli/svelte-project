/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        squant: "#666666",
        nero: "#262626",
        white: "#FFFFFF",
        doctor: "#F9F9F9",
        "spanish-grey": "#979797",
        "wash-me": "#fafbfc",
        "lilac-champagne": "#dfe1e6",
        "white-edgar": "#EDEDED",
        "hailey-blue": "#3170F9",
        "dodger-blue": "#3C82F6",
        "ma-white": "#f5f9ff",
        "liberty-green": "#16a34a",
        "whero-red": "#dc2626",
        "navy-seal": "#1F3A8A"
      }
    },
  }
}