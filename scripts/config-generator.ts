import { writeFileSync } from 'node:fs';
import path from 'node:path';
import type { Rule } from './traverse-rules.js';
import { camelCase, kebabCase, pascalCase } from 'scule';

export enum RulesGrouping {
  CATEGORY = 'category',
  SCOPE = 'scope',
}

export type ResultMap = Map<string, string[]>;

export class ConfigGenerator {
  private rulesGrouping: RulesGrouping;
  private rulesArray: Rule[];
  constructor(
    rulesArray: Rule[] = [],
    rulesGrouping: RulesGrouping = RulesGrouping.SCOPE
  ) {
    this.rulesArray = rulesArray;
    this.rulesGrouping = rulesGrouping;
  }

  public setRulesGrouping(rulesGrouping: RulesGrouping) {
    this.rulesGrouping = rulesGrouping;
  }

  private groupItemsBy(
    rules: Rule[],
    rulesGrouping: RulesGrouping
  ): Map<string, string[]> {
    const map = new Map<string, string[]>();
    for (const item of rules) {
      const key = item[rulesGrouping];
      const group = map.get(key) || [];
      group.push(item.value);
      map.set(key, group);
    }

    return map;
  }

  public async generateRulesCode() {
    console.log(`Generating config, grouped by ${this.rulesGrouping}`);

    const rulesGrouping = this.rulesGrouping;
    const rulesArray = this.rulesArray;

    const rulesMap = this.groupItemsBy(rulesArray, rulesGrouping);
    const exportName = pascalCase(this.rulesGrouping);

    const exportGrouping: string[] = [];
    let code =
      '// These rules are automatically generated by scripts/generate-rules.ts\n\n';

    code += `import * as rules from "./rules-by-${this.rulesGrouping}.js";\n\n`;

    for (const grouping of rulesMap.keys()) {
      exportGrouping.push(grouping);

      code += `const ${camelCase(grouping)}Config = {\n`;

      code += `  name: 'oxlint/${kebabCase(grouping)}',\n`;
      code += `  rules: rules.${camelCase(grouping)}Rules,`;
      code += '\n};\n\n';
    }

    code += `const configBy${exportName} =  {\n`;
    code += exportGrouping
      .map((grouping) => {
        return `  'flat/${kebabCase(grouping)}': ${camelCase(grouping)}Config`;
      })
      .join(',\n');
    code += '\n}\n\n';

    code += `export default configBy${exportName}`;

    return code;
  }

  public async generateRules(folderPath: string) {
    const output = await this.generateRulesCode();
    writeFileSync(
      path.resolve(folderPath, `configs-by-${this.rulesGrouping}.ts`),
      output
    );
  }
}
