module.exports = {
  content: [
      "./src/**/*.{js, jsx, ts, tsx, html}",
      "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          fontFamily: {
              inter: ["Inter", "sans-serif"],
          },
      },
  },
  plugins: [require("flowbite/plugin")],
};