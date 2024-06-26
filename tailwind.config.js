module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./_recommendations/**/*.md",
    "./*.md",
    "./*.html",
    "./scripts/**/*.js",
    "./cities/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Instrument Serif", "serif"],
      },
      maxWidth: {
        720: "720px",
      },
      colors: {
        primary: "#314AC4",
        background: "#FEFAEF",
      },
      animation: {
        fade: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
};
