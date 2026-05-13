/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Syne", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#fdf4ff",
          100: "#f9e8ff",
          200: "#f3d0fe",
          300: "#e9a8fd",
          400: "#da70f8",
          500: "#c442ee",
          600: "#a620d1",
          700: "#8b18ae",
          800: "#74198e",
          900: "#5f1872",
          950: "#400050",
        },
        dark: {
          900: "#060610",
          800: "#0d0d1a",
          700: "#12122a",
          600: "#1a1a35",
          500: "#242450",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
