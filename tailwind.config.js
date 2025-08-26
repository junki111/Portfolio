/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      // colors: {
      //     primary: '#060807',
      //     secondary: '#d1e8e2',
      //     tertiary: '#116466',
      //     quaternary: '#d9b08c',
      //     quinary: '#ffcb9a',
      //     'black-100': '#100d25',
      //     'black-200': '#090325',
      //     'white-100': '#f3f3f3',
      // },
      colors: {
        // Core brand colors
        primary: {
          light: "#2563eb", // bright blue
          DEFAULT: "#1d4ed8", // deep blue
          dark: "#1e40af",
        },
        secondary: {
          light: "#f3f4f6", // gray-100
          DEFAULT: "#9ca3af", // neutral gray
          dark: "#374151", // gray-700
        },

        // Accent colors
        accent: {
          light: "#f59e0b", // amber-500
          dark: "#fbbf24",
        },

        // Backgrounds
        background: {
          light: "#ffffff",
          dark: "#111827", // slate/neutral dark
        },

        // Text
        text: {
          light: "#111827",
          dark: "#f9fafb",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
