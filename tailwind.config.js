/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-spin": {
          "-moz-appearance": "textfield",
          "&::-webkit-inner-spin-button": {
            "@apply appearance-none": {},
            margin: "0",
          },
          "&::-webkit-outer-spin-button": {
            "@apply appearance-none": {},
            margin: "0",
          },
        },
      });
    },
  ],
};
