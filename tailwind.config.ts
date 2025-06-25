import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
} satisfies Config;
