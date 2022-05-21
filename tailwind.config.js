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
        "gris3": "#9f9f9f",

      },



      "fontSize": {
        "titre": "7.5rem"
      },
      "fontFamily": {
        "praise": "Praise, cursive",
        "baloo": "Baloo 2, cursive ",

      },

      "width": {
        "300": "18.75rem, 300px",
      }
    },
    linearBorderGradients: {
      "colors": {
        "ligne": ["#fba919", "#ff0000"]
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('tailwindcss-border-gradients')(),
  ],

}
