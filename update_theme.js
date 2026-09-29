const fs = require('fs');
const path = require('path');

const globalsCss = `
@import "tailwindcss";

@theme {
  --color-brand-bg: #FAFAFA;
  --color-brand-panel: #F5F5F5;
  --color-brand-card: #FFFFFF;
  
  --color-brand-text: #0F172A;
  --color-brand-text-secondary: #475569;
  --color-brand-text-muted: #64748B;
  --color-brand-text-very-muted: #94A3B8;
  
  --color-brand-accent: #E11D48;
  --color-brand-accent-light: #F43F5E;
  
  --color-brand-border: rgba(15, 23, 42, 0.08);
  --color-brand-border-hover: rgba(15, 23, 42, 0.15);
  --color-brand-border-accent: rgba(225, 29, 72, 0.30);

  --font-primary: var(--font-primary), ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-editorial: var(--font-editorial), ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}

:root {
  --background: #FAFAFA;
  --foreground: #0F172A;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
  background-color: var(--background);
  color: var(--foreground);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: rgba(225, 29, 72, 0.2);
  color: #0F172A;
}

.atmosphere-warm {
  background: radial-gradient(ellipse, rgba(225, 29, 72, 0.08), rgba(225, 29, 72, 0.03), transparent 70%);
}

.atmosphere-warm-soft {
  background: radial-gradient(circle, rgba(225, 29, 72, 0.05) 0%, transparent 65%);
}

.atmosphere-white {
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 65%);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

fs.writeFileSync('src/app/globals.css', globalsCss);

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith(".tsx")) {
      let content = fs.readFileSync(fullPath, "utf-8");
      
      // Update hardcoded dark colors to CSS variables or light theme equivalents
      content = content.replace(/bg-\[#080808\]/g, 'bg-[var(--color-brand-card)]');
      content = content.replace(/bg-\[#101010\]/g, 'bg-[var(--color-brand-panel)]');
      content = content.replace(/bg-[#000000]/g, 'bg-[var(--color-brand-bg)]');
      content = content.replace(/bg-black/g, 'bg-[var(--color-brand-bg)]');
      content = content.replace(/text-white/g, 'text-[var(--color-brand-text)]');
      content = content.replace(/text-\[#F5F5F5\]/g, 'text-[var(--color-brand-text)]');
      content = content.replace(/border-\[rgba\(255,255,255,0\.08\)\]/g, 'border-[var(--color-brand-border)]');
      content = content.replace(/border-\[rgba\(255,255,255,0\.15\)\]/g, 'border-[var(--color-brand-border-hover)]');
      content = content.replace(/border-\[rgba\(255,255,255,0\.1\)\]/g, 'border-[var(--color-brand-border)]');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(path.join(__dirname, 'src', 'components'));
processDir(path.join(__dirname, 'src', 'app'));

console.log('Theme updated to light mode and hardcoded colors replaced.');
