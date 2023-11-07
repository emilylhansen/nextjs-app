import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-100": "#F9F0FE",
        "purple-400": "#B956D0",
        "purple-500": "#9C39D9",
        "blue-100": "#ECEFFF",
        "blue-400": "#6F82FF",
        "blue-500": "#5046EF",
        "pink-300": "#FEAFD0",
        "pink-400": "#FF8BB9",
        "pink-500": "#C75E7B",
        "green-100": "#E6F8F0",
        "green-400": "#18C378",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridRow: {
        "span-8": "span 8 / span 8",
      },
      gridRowStart: {
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
      },
      gridTemplateRows: {
        // Simple 16 column grid
        "8": "repeat(8, minmax(0, 1fr))",
      },
    },
  },
};
export default config;
