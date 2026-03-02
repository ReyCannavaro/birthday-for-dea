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
        'her-primary': '#7dd3fc',
        'her-light': '#f0f9ff',
      },
      fontFamily: {
        display: ['var(--font-playfair)'],
        body: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
export default config;