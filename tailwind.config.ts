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
          green: "#1A3B2A", // Deep Forest Green from your logo
          gold: "#D4AF37",   // Gold from your jar lid
          cream: "#F9F9F6",  // Soft background
          text: "#333333",
        },
      },
    },
  },
  plugins: [],
};
export default config;
