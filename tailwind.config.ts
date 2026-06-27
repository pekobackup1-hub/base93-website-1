import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          deep: "#2B2441",
          light: "#DDD2FF",
          lavender: "#514577",
          amethyst: "#7D68C0",
          grey: "#ECEFF2",
          ink: "#15111F",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(43, 36, 65, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
