const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'Nunito', 'sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    extend: {
      colors: {
        "primary": "#16DB65",
        "primary-light": "#d1ffd7",
        "black": "#000000",
        "white": "#FFFFFF",
        'text': '#1E293B',
        'text-grey': '#6F6F6F',
        'bg': '#F8FAFC',

      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'md': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    plugins: [],
  }
});
