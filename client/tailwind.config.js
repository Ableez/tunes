/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      serif: ["Merriweather", "serif"],
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        light: {
          red: "#FF3B30",
          orange: "#ff9500",
          yellow: "#ffcc00",
          green: "#34c759",
          teal: "#5ac8fa",
          blue: "#007aff",
          indigo: "#5856d6",
          purple: "#af52de",
          pink: "#ff2d55",
          gray: "#8e8e93",
          "gray-02": "#aeaeb2",
          "gray-03": "#c7c7cc",
          "gray-04": "#d1d1d6",
          "gray-05": "#e5e5ea",
          "gray-06": "#f2f2f7",
        },
        dark: {
          red: "#ff3b3a",
          orange: "#ff9f0a",
          yellow: "#ffd60a",
          green: "#32d748",
          teal: "#64d2ff",
          blue: "#0a84ff",
          indigo: "#5e5ce6",
          purple: "#bf5af2",
          pink: "#ff2d55",
          gray: "#8E8E93",
          "gray-02": "#636366",
          "gray-03": "#48484a",
          "gray-04": "#3a3a3c",
          "gray-05": "#2c2c2e",
          "gray-06": "#1c1c1e",
        }
      },
    },
  },
  plugins: [],
};
