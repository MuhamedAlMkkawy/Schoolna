// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
  ],

  safelist: [
    {
      // margin & padding arbitrary values
      pattern: /(m|p)(t|b|l|r|x|y)?-\[\d+(px|rem|em|%)\]/,
    },
    {
      // width / height arbitrary values
      pattern: /(w|h|max-w|max-h|min-w|min-h)-\[\d+(px|rem|em|%)\]/,
    },
  ],

  theme: {
    extend: {},
  },

  plugins: [],
} satisfies Config;
