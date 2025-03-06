/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Deep futuristic blue
        secondary: "#9333ea", // Neon purple
        accent: "#facc15", // Bright yellow
      },
      fontFamily: {
        futuristic: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #4f46e5 30%, #9333ea 100%)",
      },
    },
  },
  plugins: [],
}

