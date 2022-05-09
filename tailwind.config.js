module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "spot-yellow": "#fff600",
      },
      screens: {
        sm: { min: "0px", max: "900px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "901px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "2399px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        xxl: { min: "2400px" },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
