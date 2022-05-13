module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        viga: ["Viga", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
