const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src/components', (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
      .replace(/rgba\(17,24,39,/g, 'rgba(255,255,255,')
      .replace(/text-\[var\(--color-brand-text\)\]/g, 'text-white')
      .replace(/bg-\[#F3F4F6\]/g, 'bg-[rgba(255,255,255,0.05)]')
      .replace(/border-\[rgba\(0,0,0,0\.04\)\]/g, 'border-[rgba(255,255,255,0.12)]');
      
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Fixed:', filePath);
    }
  }
});
