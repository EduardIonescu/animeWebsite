/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: { mPlus: ["M PLUS 1p, sans-serif"] },
			colors: {
				darkBlue: "#12232E",
				lighterBlue: "#007CC7",
				shadowDarkBlue: "#203647",
				shadowLightBlue: "#EEFBFB",
				darkRed: "#dc3545",
				darkYellow: "#ffc43d",

				darkBlueDark: "hsl(209, 23%, 22%)",
				veryDarkBlue: "hsl(207, 26%, 17%)",
				veryDarkBlueLightMode: "hsl(200, 15%, 8%)",
				darkGray: "hsl(0, 0%, 52%)",
				veryLightGray: "hsl(0, 0%, 98%)",
				blueHover: "rgb(100,100,250)",
				coolBlack: "#202020",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
