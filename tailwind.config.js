module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Pourpre": "#aa095e",
        "Orange": "#fba919",
        "Gris": "#6d6d6d",
        "Rouge": "#ff0000",
        "Noir": "#000000",
        "Blanc": "#ffffff",
        "Jaune": "#fee60c",
        "fond2": "#efebea",
        "gris clair": "#cccccc",
        "gris3": "#9f9f9f"
      },
      "fontSize": {
        "base": "0.5rem",
        "lg": "0.75rem",
        "xl": "0.875rem",
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
        "5xl": "1.8125rem",
        "6xl": "1.875rem",
        "7xl": "2.8125rem",
        "8xl": "3rem",
        "9xl": "3.375rem",
        "10xl": "4.5rem",
        "11xl": "7.5rem"
      },
      "fontFamily": {
        "praise": "Praise, cursive",
        "baloo": "Baloo 2, cursive",

      },
      "boxShadow": {
        "image_3d": "6px 4px 0px 0px rgba(170,9,94,1)",
        "bpx_landingpage": "-15px 13px 6px 22px rgba(0,0,0,0.1)"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.3125rem",
        "sm": "0.5rem",
        "default": "0.5625rem",
        "lg": "0.625rem",
        "xl": "0.6875rem",
        "2xl": "0.75rem",
        "3xl": "0.9375rem",
        "4xl": "1.125rem",
        "5xl": "1.25rem",
        "6xl": "2.5rem",
        "7xl": "3.125rem",
        "full": "9999px"
      },
      "width": {
        "300": "18.75rem, 300px"
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
