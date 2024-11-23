// These rules are automatically generated by scripts/generate-rules.ts

import * as rules from "./rules-by-category.js";

const pedanticConfig = {
	name: "oxlint/pedantic",
	rules: rules.pedanticRules,
};

const nurseryConfig = {
	name: "oxlint/nursery",
	rules: rules.nurseryRules,
};

const restrictionConfig = {
	name: "oxlint/restriction",
	rules: rules.restrictionRules,
};

const styleConfig = {
	name: "oxlint/style",
	rules: rules.styleRules,
};

const correctnessConfig = {
	name: "oxlint/correctness",
	rules: rules.correctnessRules,
};

const perfConfig = {
	name: "oxlint/perf",
	rules: rules.perfRules,
};

const suspiciousConfig = {
	name: "oxlint/suspicious",
	rules: rules.suspiciousRules,
};

const configByCategory = {
	"flat/pedantic": pedanticConfig,
	"flat/nursery": nurseryConfig,
	"flat/restriction": restrictionConfig,
	"flat/style": styleConfig,
	"flat/correctness": correctnessConfig,
	"flat/perf": perfConfig,
	"flat/suspicious": suspiciousConfig,
};

export default configByCategory;
