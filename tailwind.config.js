const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./content/**/*.{md,yml,json,yaml,toml,csv}",
    "./app.vue",
  ],
  darkMode: "class",
  theme: {
    letterSpacing: {
      wider: "0.1em",
      widest: "0.2em",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.orange[400],
          ...colors.orange,
        },
        secondary: {
          DEFAULT: colors.slate[50],
          ...colors.slate,
        },
        accent: {
          DEFAULT: "#098fe5",
          ...colors.cyan,
        },
        dprimary: {
          DEFAULT: colors.blue[500],
          ...colors.blue,
        },
        dsecondary: {
          DEFAULT: colors.slate[900],
          ...colors.slate,
        },
        daccent: {
          DEFAULT: colors.blue[800],
          ...colors.blue,
        },
      },
      fontFamily: {
        sans: ["Inter"],
        serif: ["DM Serif Display"],
        logo: ["Subway graph, Inter"],
      },
      boxShadow: {
        md: "0 0 8px rgb(0 220 130 / 67%)",
        md2: "0 0 16px rgb(0 220 130 / 67%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
