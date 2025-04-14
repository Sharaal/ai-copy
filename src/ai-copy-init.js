const fs = require('fs');
const path = require('path');

['ai-copy.json', 'systemPrompt.md'].forEach((filePath) => {
  const targetFilePath = path.join(process.cwd(), filePath);
  if (fs.existsSync(targetFilePath)) {
    console.log(`File already exists: ${targetFilePath}`);
    return;
  }
  fs.writeFileSync(targetFilePath, fs.readFileSync(path.join(__dirname, '..', filePath), 'utf-8'));
  console.log(`File created: ${targetFilePath}`);
});
