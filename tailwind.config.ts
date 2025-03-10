import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      letterSpacing: {
        label: "0.25em", // roughly 25% of the font size
      },
      // /---------custom font sizes--------------
      fontSize: {
        header: "3.125rem", // 50px
        subheader: "3rem", // 48px
        md: "1.25rem", // 20px
        lg: "1.375rem", // 22px
        xl: "1.5rem", // 24px
        "2xl": "1.875rem", // 30px
        "3xl": "2rem", // 32px
        "4xl": "2.5rem", // 40px
      },
      colors: {
        // -----------------------Custom Colors-------------------------------
        picoOrange: "#E0B354",
        picoTeal: "#008083",
        picoText: "#e6e6e6",
        picoTextGray: "#6B6B6B",
        picoFormBorder: " #CCCCCC",
        picoFormText: "#808080",
        picoJuteBrown: "#BF8440",
        bgCream: "#FFF8F0",
        bgGray: "#F0F0F0",
        bgCreamDark: "#FCEFE0",
        borderGray: "#B0BABF",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
