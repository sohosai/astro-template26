import importAlias from "@dword-design/eslint-plugin-import-alias";
import js from "@eslint/js";
import { globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginImport from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs["flat/recommended"],
	...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
	importAlias.configs.recommended,
	{
		plugins: {
			import: eslintPluginImport,
			"unused-imports": unusedImports,
		},
		rules: {
			"import/order": [
				"error",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
						"object",
						"type",
					],
					pathGroupsExcludedImportTypes: ["builtin"],
					pathGroups: [
						{ pattern: "@/**", group: "internal", position: "before" },
					],
					alphabetize: { order: "asc", caseInsensitive: true },
					"newlines-between": "always",
				},
			],
			"@typescript-eslint/no-unused-vars": "off",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					args: "after-used",
					argsIgnorePattern: "^_",
					vars: "all",
					varsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/consistent-type-imports": "error",
			"@dword-design/import-alias/prefer-alias": [
				"error",
				{
					alias: {
						"@": "./src",
					},
				},
			],
		},
	},
	{
		files: ["**/*.config.{js,mjs,cjs,ts,mts,cts}", "scripts/**"],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	eslintConfigPrettier,
	globalIgnores(["node_modules/", "dist/", ".astro/", "public/"]),
];
