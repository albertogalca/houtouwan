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
      serif: ["Crimson Pro", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
