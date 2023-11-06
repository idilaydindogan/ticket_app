** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			dark: "#040D12",
			green: "#4F6F52",
			paleGreen: "#86A789",
			beige: "#F7EFE5",
			pale: "#FFFBF5",
			red: "#960018",
			paleRed: "#b22222",
		},
	},
	plugins: [],
};