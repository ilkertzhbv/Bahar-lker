import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08070b",
        velvet: "#140912",
        roseglass: "rgba(255, 240, 245, 0.08)",
        champagne: "#f7d7b5",
        blush: "#f6a7b8",
        pearl: "#fff8f2"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 0 70px rgba(246, 167, 184, 0.28)",
        cinema: "0 40px 100px rgba(0, 0, 0, 0.55)"
      }
    }
  },
  plugins: []
};

export default config;
