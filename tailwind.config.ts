import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      minHeight: {
        "custom-header": "calc(100vh - 80px)",
        "custom-header-home": "calc(100vh - 124px)",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "800px",
        1000: "1000px",
      },
      zIndex: {
        1: "1",
        5: "5",
        100: "100",
        1000: "1000",
        10000: "10000",
      },
      boxShadow: {
        "custom-border": "0 0 0 2px rgba(255, 255, 255, 1)",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        background: "#282828",
        light: "#FFFFFF",
        dark: "#1A1A1A",
        green: "#16C829",
      },
    },
  },
  plugins: [],
};
export default config;
