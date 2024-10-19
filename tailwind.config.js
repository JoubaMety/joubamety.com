/** @type {import('tailwindcss').Config} */
/** @type {import('rippleui').Config} */
const { createThemes } = require('tw-colors');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sourceCodePro': ['Source Code Pro', 'monospace'],

      'archivoBlack': ['Archivo Black', 'sans-serif'],
      'archivo': ['Archivo', 'sans-serif'],
    },
    extend: {
      screens: {
        'custom-sm': '560px',
      },
    },
  },
  plugins: [require("rippleui")],
  rippleui: {
    /*
    themes: [
        {
        themeName: "light", // Catppuccin Latte
        colorScheme: "light",
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
				themeName: "dark", // Catppuccin Mocha
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
      {
				themeName: "nord-light",
				colorScheme: "light",
				colors: {
          primary: "#54B4CE", // Frost [2]
          secondary: "#B22E9A", // Aurora [4]
          error: "#BC2B39", // Aurora [0]
          success: "74BC34", // Green
          warning: "EAAD33", // Yellow
          selection: "#D4D8E5", // Snow Storm [1] nord4

          backgroundPrimary: "#ECEFF4", // Snow Storm [2] nord6
          backgroundSecondary: "#E5E9F0", // Snow Storm [1]
          border: "#D8DEE9", // Snow Storm [0]
          content1: "#2E3440", // Polar Night [0]
          content2: "#3B4252", // Polar Night [1]
          content3: "#434C5E", // Polar Night [2]
				},
			},
      {
				themeName: "dark", // Catppuccin Mocha
				colorScheme: "dark",
        prefersColorScheme: true,
				colors: {
          primary: "#8caaee", // Blue
          secondary: "#ca9ee6", // Mauve
          error: "#e78284", // Red
          success: "#a6d189", // Green
          warning: "#e5c890", // Yellow
          selection: "#626880", // Overlay 2

          
          backgroundPrimary: "#303446", // Base
          backgroundSecondary: "#414559", // Surface 0
          border: "#51576d", // Surface 1
          content1: "#c6d0f5", // Text
          content2: "#b5bfe2", // Subtext 1
          content3: "#a5adce", // Subtext 0
				},
			},
      
			
			{
				themeName: "nord-dark",
				colorScheme: "dark",
				colors: {
          primary: "#8FBCBB", // Frost [1]
          secondary: "#B48EAD", // Aurora [4]
          error: "#BF616A", // Aurora [0]
          success: "#A3BE8C", // Green
          warning: "#EBCB8B", // Yellow
          selection: "#434C5E", // Polar Night [2]

          
          backgroundPrimary: "#242933", // yoinked from nord web background
          backgroundSecondary: "#3B4252", // Polar Night [0]
          border: "#4C566A", // Polar Night [1]
          content1: "#ECEFF4", // Snow Storm [2]
          content2: "#E5E9F0", // Snow Storm [1]
          content3: "#D8DEE9", // Snow Storm [0]
				},
			},
      {
				themeName: "catppuccin-frappe",
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
      {
				themeName: "catppuccin-macchiato",
				colorScheme: "dark",
				colors: {
          primary: "#8aadf4", // Blue
          secondary: "#c6a0f6", // Mauve
          error: "#ed8796", // Red
          success: "#a6da95", // Green
          warning: "#eed49f", // Yellow
          selection: "#939ab7", // Overlay 2

          
          backgroundPrimary: "#24273a", // Base
          backgroundSecondary: "#363a4f", // Surface 0
          border: "#494d64", // Surface 1
          content1: "#cad3f5", // Text
          content2: "#b8c0e0", // Subtext 1
          content3: "#a5adcb", // Subtext 0
				},
			},
		],
    */
  },
}