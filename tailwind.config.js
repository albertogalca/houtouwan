module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    fontFamily: {
      sans: ["HEX Franklin", "sans"],
      serif: ["Crimson Pro", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
