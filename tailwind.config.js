const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        color1: {
          DEFAULT: "#A2E771",
          50: "#FFFFFF",
          100: "#FDFFFD",
          200: "#E7F9DA",
          300: "#D0F3B7",
          400: "#B9ED94",
          500: "#A2E771",
          600: "#83DF41",
          700: "#66C622",
          800: "#4D9619",
          900: "#356611",
          950: "#284E0D",
        },
        color2: {
          DEFAULT: "#aaa89f",
          50: "#f8f8f8",
          100: "#f1f1ef",
          200: "#e6e5e2",
          300: "#d4d3cd",
          400: "#b9b7b0",
          500: "#aaa89f",
          600: "#88857a",
          700: "#706e65",
          800: "#5f5d55",
          900: "#52514a",
          950: "#2a2925",
        },
        color3: {
          DEFAULT: "#d7e4f3",
          50: "#f3f6fb",
          100: "#e3ebf6",
          200: "#d7e4f3",
          300: "#abc7e5",
          400: "#82abd8",
          500: "#658ecc",
          600: "#5175bf",
          700: "#4764ae",
          800: "#3e538f",
          900: "#364772",
          950: "#252d46",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        signature: ["var(--font-signature)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
