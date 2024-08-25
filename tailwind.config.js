/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'mono': ['Source Code Pro', 'monospace'],

      'archivoBlack': ['Archivo Black', 'sans-serif'],
      'archivo': ['Archivo', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("rippleui")],
  rippleui: {
    themes: [
			{
				themeName: "light",
				colorScheme: "light",
				colors: {
				},
			},
			{
				themeName: "dark",
				colorScheme: "dark",
				colors: {
      
				},
			},
		],
  }
}