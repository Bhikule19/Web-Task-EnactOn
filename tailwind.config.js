/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#130F0C",
        secondary: "#FFF",
        accent: "#D29A5A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "custom-white": "0 0 25px 3px rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
