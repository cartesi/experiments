module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    fontFamily: {
      sans: ["Figtree", "sans-serif"],
      serif: ["Figtree", "sans-serif"],
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
