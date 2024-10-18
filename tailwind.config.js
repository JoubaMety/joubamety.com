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
        prefersColorScheme: true,
				colors: {
          primary: "#1e66f5",
          secondary: "#8839ef",
          error: "#d20f39",
          success: "#40a02b",
          warning: "#df8e1d",
          selection: "#7c7f93", // Overlay 2

          backgroundPrimary: "#e6e9ef", // Base
          backgroundSecondary: "#eff1f5", // Surface 0
          border: "#bcc0cc", // Surface 1
          content1: "#4c4f69", // Text
          content2: "#5c5f77", // Subtext 1
          content3: "#6c6f85", // Subtext 0
				},
			},
			{
				themeName: "dark",
				colorScheme: "dark",
				colors: {
          primary: "#89b4fa", // Blue
          secondary: "#cba6f7", // Mauve
          error: "#f38ba8", // Red
          success: "#a6e3a1", // Green
          warning: "#f9e2af", // Yellow
          selection: "#9399b2", // Overlay 2

          
          backgroundPrimary: "#1e1e2e", // Base
          backgroundSecondary: "#313244", // Surface 0
          border: "#45475a", // Surface 1
          content1: "#cdd6f4", // Text
          content2: "#bac2de", // Subtext 1
          content3: "#a6adc8", // Subtext 0
				},
			},
		],
  }
}