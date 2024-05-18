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
    maxWidth: {
      720: "720px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
