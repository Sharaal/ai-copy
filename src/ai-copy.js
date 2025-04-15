#!/usr/bin/env node

const fs = require('fs');
const { glob } = require('glob');
const path = require('path');
const { z } = require('zod');

const Configs = z.array(z.object({
  includes: z.array(z.string()),
  excludes: z.array(z.string()).optional(),
  template: z.array(z.string()),
}));

const configs = require(path.join(process.cwd(), 'ai/ai-copy.json'));
Configs.parse(configs);

(async () => {
  for (const config of configs) {
    const filePaths = await glob(config.includes, { ignore: config.excludes });
    for (const filePath of filePaths) {
      console.log(config.template
        .join('\n')
        .replace(/{filePath}/g, filePath)
        .replace(/{fileContent}/g, fs.readFileSync(filePath, 'utf-8')));
    }
  }
})();
