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
    extend: {
      fontFamily: {
        sans: ["HEX Franklin", "sans"],
        serif: ["Crimson Pro", "serif"],
      },
      maxWidth: {
        720: "720px",
      },
      colors: {
        primary: "#FF595E",
      },
    },
  },
};
