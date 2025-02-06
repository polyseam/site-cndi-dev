import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  extend: {
    colors: {
      darkpurp: "#180f1e",
      softgrey: "#333",
      lightpurp: "#7c6991",
    },
  },
} satisfies Config;
