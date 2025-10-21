import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zen: {
          stone: '#D4C5B0',
          bamboo: '#8B9D83',
          earth: '#6B5D4F',
          sand: '#F5F0E8',
        }
      }
    },
  },
  plugins: [],
};
export default config;
