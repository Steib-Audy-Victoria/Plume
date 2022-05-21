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
        "grisClair": "#cccccc",
        "gris3": "#9f9f9f"
      },
      "fontSize": {
        "titre": "7.5rem"
      },
      "fontFamily": {
        "praise": "Praise, cursive",
        "baloo": "Baloo 2, cursive ",

      },
      "boxShadow": {
        "image_3d": "6px 4px 0px 0px rgba(170,9,94,1)",
        "bpx_landingpage": "-15px 13px 6px 22px rgba(0,0,0,0.1)"
      },

      "width": {
        "300": "18.75rem, 300px",

      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
