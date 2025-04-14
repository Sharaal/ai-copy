const fs = require('fs');
const { glob } = require('glob');
const path = require('path');

(async () => {
  const configs = require(path.join(process.cwd(), 'ai-copy.json'));
  for (const config of configs) {
    const filePaths = await glob(config.includes);
    for (const filePath of filePaths) {
      console.log(config.template
        .join('\n')
        .replace('{filePath}', filePath)
        .replace('{fileContent}', fs.readFileSync(filePath, 'utf-8')));
    }
  }
})();
