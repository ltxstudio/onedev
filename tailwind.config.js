/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db", // Blue
        secondary: "#2ecc71", // Green
        dark: "#2c3e50", // Dark gray for text
        light: "#ecf0f1", // Light gray for background
        accent: "#f39c12", // Accent color for highlights
        danger: "#e74c3c", // Red for error or alerts
        warning: "#f1c40f", // Yellow for warnings
        info: "#1abc9c", // Teal for informational messages
        background: "#34495e", // Dark background color
        card: "#ffffff", // White for card backgrounds
      },
      fontFamily: {
        sans: ['"Roboto"', 'Arial', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
        mono: ['"Courier New"', 'monospace'],
      },
    },
  },
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  plugins: [],
}
