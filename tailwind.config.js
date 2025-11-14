/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol"
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New"
        ]
      },
      colors: {
        brand: {
          DEFAULT: "#10A37F",
          600: "#0E8E70",
          700: "#0C7A60",
          800: "#0A6650"
        },
        accent: {
          DEFAULT: "#0B5FFF",
          600: "#0A54E0",
          700: "#094AC3"
        },
        surface: {
          50: "#FAFAFB",
          100: "#F6F7F9",
          200: "#ECEEF2",
          300: "#E3E6EC",
          800: "#121417",
          900: "#0B0F19"
        },
        success: "#10A37F",
        warning: "#F59E0B",
        danger: "#EF4444"
      }
    }
  },
  plugins: []
};
