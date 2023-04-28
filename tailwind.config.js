/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          0: "rgba(255, 255, 255, 1)",
          20: "rgba(246, 247, 249, 1)",
          40: "rgba(195, 212, 233, 0.4)",
          400: " rgba(53, 99, 233, 0.4)",
          500: "rgba(53, 99, 233, 1)",
        },
        secondary: {
          300: "rgba(144, 163, 191, 1)",
        },
        orange: {
          50: "rgba(255, 68, 35, 1 )",
        },
        information: {
          300: "rgba(92, 175, 252, 0.3)",
          500: "rgba(84, 166, 255, 1)",
        },
      },
      borderRadius: {
        4: "4px",
        10: "10px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
