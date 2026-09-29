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
      .replace(/rgba\(255,255,255,/g, 'rgba(15,23,42,')
      .replace(/text-white/g, 'text-[var(--color-brand-text)]')
      .replace(/bg-\[rgba\(255,255,255,0\.05\)\]/g, 'bg-[#F8FAFC]')
      .replace(/bg-\[rgba\(255,255,255,0\.07\)\]/g, 'bg-[#F8FAFC]')
      .replace(/border-\[rgba\(255,255,255,0\.12\)\]/g, 'border-[rgba(15,23,42,0.08)]');
      
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Fixed:', filePath);
    }
  }
});
