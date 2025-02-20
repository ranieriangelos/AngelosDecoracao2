import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c42e30',
        secondary: '#ea9422',
        tertiary: 'rgb(31 41 55 / var(--tw-bg-opacity, 1))',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
