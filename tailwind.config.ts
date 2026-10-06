import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paraherb: {
          sage: "#8DA37F",      // Soft natural green
          blush: "#F4D3D3",     // Gentle face-care pink/peach
          charcoal: "#333333",  // Soft dark gray (easier on the eyes than black)
          base: "#FDFBF7",      // Warm, clean off-white
        },
      },
    },
  },
  plugins: [],
};
export default config;
