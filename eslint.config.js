import { defineConfig } from "eslint/config";
import globals from "globals";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default defineConfig([
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				React: true,
				JSX: true,
			},
		},
		plugins: {
			"@typescript-eslint": typescriptEslint,
			"simple-import-sort": simpleImportSort,
			"unused-imports": unusedImports,
		},
		extends: compat.extends(
			"eslint:recommended",
			"next",
			"next/core-web-vitals",
			"plugin:@typescript-eslint/recommended",
			"prettier"
		),
		rules: {
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"unused-imports/no-unused-imports": "warn",
			"no-console": "warn",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"react/no-unescaped-entities": "off",
			"react/display-name": "off",
			"react/jsx-curly-brace-presence": [
				"warn",
				{
					props: "never",
					children: "never",
				},
			],
			"unused-imports/no-unused-vars": "off",
			"simple-import-sort/exports": "warn",
			"simple-import-sort/imports": [
				"warn",
				{
					groups: [
						["^@?\\w", '^"'],
						["^.+\\.s?css$"],
						["^@/lib", "^@/hooks"],
						["^@/data"],
						["^@/components", "^@/container"],
						["^@/store"],
						["^@/"],
						[
							"^\\./?$",
							"^\\.(?!/?$)",
							"^\\.\\./?$",
							"^\\.\\.(?!/?$)",
							"^\\.\\./\\.\\./?$",
							"^\\.\\./\\.\\.(?!/?$)",
							"^\\.\\./\\.\\./\\.\\./?$",
							"^\\.\\./\\.\\./\\.\\.(?!/?$)",
						],
						["^@/types"],
						["^"],
					],
				},
			],
		},
	},
]);
