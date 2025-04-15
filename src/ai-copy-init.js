#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

try {
  fs.mkdirSync(path.join(process.cwd(), 'ai'));
  console.log('Directory "ai" created');
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log('Directory already exists: ai');
  } else {
    throw err;
  }
}

for (const filePath of ['ai/ai-copy.json', 'ai/systemPrompt.md']) {
  const targetFilePath = path.join(process.cwd(), filePath);
  if (fs.existsSync(targetFilePath)) {
    console.log(`File already exists: ${filePath}`);
  } else {
    fs.copyFileSync(path.join(__dirname, '..', filePath), targetFilePath);
    console.log(`File created: ${filePath}`);
  }
}
