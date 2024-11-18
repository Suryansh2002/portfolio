import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        "star-fall":{
          "0%":{
            "transform":"rotate(315deg) translateX(0)",
            "opacity":"0.7",
          },
          "70%":{
            "opacity":"0.7",
          },
          "100%":{
            "transform":"rotate(315deg) translateX(-4000px)",
            "opacity":"0",
          }
        },
        "fade-in":{
          "0%":{
            "opacity":"0",
          },
          "100%":{
            "opacity":"1",
          }
        }
      },
      animation:{
        "star-fall":"star-fall 3s ease-in infinite",
        "fade-in":"fade-in 2s ease-in"
      },
      boxShadow:{
        "star":"0 0 0 4px rgba(255,255,255,0.1),0 0 0 6px rgba(255,255,255,0.1),0 0 0 8px rgba(255,255,255,0.1)"
      },
    },
  },
  plugins: [
    typography,
  ],
};
export default config;
