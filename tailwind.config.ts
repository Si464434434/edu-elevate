import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        coral: "var(--coral)",
        mint: "var(--mint)",
        sand: "var(--sand)",
        haze: "var(--haze)",
        plum: "var(--plum)"
      }
    }
  },
  plugins: []
};

export default config;
