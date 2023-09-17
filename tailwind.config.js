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
      },
      colors: {
        primary: {
          100: "#5d58b430",
          200: "#8079ff30",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-no-scrollbar"),
  ],
};
