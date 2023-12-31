/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        90: "90%",
      },
      height: {
        90: "90%",
      },
      boxShadow: {
        custom: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        customOld: "5px 5px 24px rgba(0, 0, 0, 0.50)",
        card: "4px 4px 0px rgba(0, 0, 0, 0.15)",
        button: "2px 2px 2px rgba(0, 0, 0, 0.15)",
        badge: "2px 2px 1px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        primary: {
          100: "#5d58b430",
          200: "#8079ff30",
        },
        something: {
          100: "#f3f3f3",
          200: "#8079ff30",
        },
        pink: {
          500: "#e499df",
        },
      },
      keyframes: {
        slideDown: {
          from: {height: 0},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        slideUp: {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: 0},
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-no-scrollbar"),
  ],
};
