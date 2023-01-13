/** @type {import('tailwindcss').Config} */
module.exports = {
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
			},
		},
	},
	plugins: [],
};
