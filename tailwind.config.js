/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['"Montserrat", sans-serif'],
				cooper: ['"CooperBTW01", sans-serif'],
				futura: ['"Futura", sans-serif'],
			},
			colors: {
				"c-belge": "#FFF1CA",
				"c-yellow": "#FFB823",
				"c-sage": "#708A58",
				"c-green": "#2D4F2B",
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
