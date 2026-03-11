/** @type {import('stylelint').Config} */
export default {
	extends: [
		"stylelint-config-recommended-scss",
		"stylelint-config-recess-order",
		"stylelint-config-html/astro",
	],
	plugins: [
		"stylelint-order",
		"stylelint-declaration-block-no-ignored-properties",
	],
	rules: {
		"plugin/declaration-block-no-ignored-properties": true,
		// RSCSS記法に適合しないためOFF
		"no-descending-specificity": null,
		// Astroの:globalを除外
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global"],
			},
		],
	},
	ignoreFiles: ["./src/styles/reset.css"],
};
