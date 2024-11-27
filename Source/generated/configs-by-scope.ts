// These rules are automatically generated by scripts/generate-rules.ts

import * as rules from "./rules-by-scope.js";

const eslintConfig = {
	name: "oxlint/eslint",
	rules: rules.eslintRules,
};

const importConfig = {
	name: "oxlint/import",
	rules: rules.importRules,
};

const jestConfig = {
	name: "oxlint/jest",
	rules: rules.jestRules,
};

const jsdocConfig = {
	name: "oxlint/jsdoc",
	rules: rules.jsdocRules,
};

const jsxA11yConfig = {
	name: "oxlint/jsx-a11y",
	rules: rules.jsxA11yRules,
};

const nextjsConfig = {
	name: "oxlint/nextjs",
	rules: rules.nextjsRules,
};

const nodeConfig = {
	name: "oxlint/node",
	rules: rules.nodeRules,
};

const promiseConfig = {
	name: "oxlint/promise",
	rules: rules.promiseRules,
};

const reactConfig = {
	name: "oxlint/react",
	rules: rules.reactRules,
};

const reactPerfConfig = {
	name: "oxlint/react-perf",
	rules: rules.reactPerfRules,
};

const typescriptConfig = {
	name: "oxlint/typescript",
	rules: rules.typescriptRules,
};

const unicornConfig = {
	name: "oxlint/unicorn",
	rules: rules.unicornRules,
};

const vitestConfig = {
	name: "oxlint/vitest",
	rules: rules.vitestRules,
};

const configByScope = {
	"flat/eslint": eslintConfig,
	"flat/import": importConfig,
	"flat/jest": jestConfig,
	"flat/jsdoc": jsdocConfig,
	"flat/jsx-a11y": jsxA11yConfig,
	"flat/nextjs": nextjsConfig,
	"flat/node": nodeConfig,
	"flat/promise": promiseConfig,
	"flat/react": reactConfig,
	"flat/react-perf": reactPerfConfig,
	"flat/typescript": typescriptConfig,
	"flat/unicorn": unicornConfig,
	"flat/vitest": vitestConfig,
};

export default configByScope;
