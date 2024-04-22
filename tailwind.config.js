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
      sans: ["Work Sans", "sans"],
      serif: ["Crimson Pro", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
