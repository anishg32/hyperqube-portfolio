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
      .replace(/rgba\(255,255,255,/g, 'rgba(17,24,39,') // replace white translucency with dark translucency
      .replace(/rgba\(255,\s*255,\s*255,/g, 'rgba(17,24,39,') 
      .replace(/text-white/g, 'text-[var(--color-brand-text)]');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Fixed:', filePath);
    }
  }
});
