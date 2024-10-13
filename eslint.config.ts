import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import unicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

import oxlint from "./src/index.js";

export default [
	eslint.configs.recommended,
	unicorn.configs["flat/recommended"],
	...tseslint.configs.recommended,
	eslintConfigPrettier,
	oxlint.configs["flat/all"],
	{
		ignores: ["dist/"],
	},
];
