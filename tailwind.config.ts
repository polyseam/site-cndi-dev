import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkpurp: "#180f1e",
        lightpurp: "#7c6991",
        hoverpurp: "#7c69913b",
        midpurp: "#483a55",
        softgrey: "#333",
        bff: "#bfbfbf",
        stroke: "#414141",
        mutedpurp: "#322b38",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      },
    },
  },
} satisfies Config;
