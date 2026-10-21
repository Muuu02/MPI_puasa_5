import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found! Please run vite build first.');
  process.exit(1);
}

let html = fs.readFileSync(indexPath, 'utf-8');

// 1. Find and inline CSS file into <head>
const cssMatch = html.match(/<link rel="stylesheet"[^>]*href="\.?\/assets\/([^"]+)"[^>]*>/);
if (cssMatch) {
  const cssFileName = cssMatch[1];
  const cssPath = path.join(distDir, 'assets', cssFileName);
  if (fs.existsSync(cssPath)) {
    const cssContent = fs.readFileSync(cssPath, 'utf-8');
    html = html.replace(cssMatch[0], () => `<style>\n${cssContent}\n</style>`);
    console.log(`✓ Inlined CSS (${cssFileName})`);
  }
}

// 2. Inline favicon as SVG Data URI (no external favicon file requests)
const faviconPath = path.resolve('public/favicon.svg');
if (fs.existsSync(faviconPath)) {
  const faviconSvg = fs.readFileSync(faviconPath, 'utf-8');
  const faviconDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(faviconSvg)}`;
  html = html.replace(/<link rel="icon"[^>]*>/g, `<link rel="icon" type="image/svg+xml" href="${faviconDataUri}" />`);
  html = html.replace(/<link rel="alternate icon"[^>]*>/g, '');
  console.log(`✓ Inlined favicon as SVG Data URI`);
}

// 3. Find and extract JS bundle
let jsContent = '';
const jsMatch = html.match(/<script type="module"[^>]*src="\.?\/assets\/([^"]+)"[^>]*><\/script>/);
if (jsMatch) {
  const jsFileName = jsMatch[1];
  const jsPath = path.join(distDir, 'assets', jsFileName);
  if (fs.existsSync(jsPath)) {
    jsContent = fs.readFileSync(jsPath, 'utf-8');
    // Remove the external script tag from <head>
    html = html.replace(jsMatch[0], '');
    console.log(`✓ Extracted JS bundle (${jsFileName})`);
  }
}

// 4. Place JS inline module script right before </body> (after #root)
if (jsContent) {
  html = html.replace('</body>', () => `<script type="module">\n${jsContent}\n</script>\n</body>`);
}

// 5. Output targets
// Root standalone.html
fs.writeFileSync(path.resolve('standalone.html'), html, 'utf-8');

// dist/standalone.html
fs.writeFileSync(path.join(distDir, 'standalone.html'), html, 'utf-8');

// public/standalone.html
if (fs.existsSync(path.resolve('public'))) {
  fs.writeFileSync(path.resolve('public/standalone.html'), html, 'utf-8');
}

// docs/index.html (for GitHub Pages /docs folder deployment)
const docsDir = path.resolve('docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}
fs.writeFileSync(path.join(docsDir, 'index.html'), html, 'utf-8');

const sizeMb = (Buffer.byteLength(html, 'utf-8') / (1024 * 1024)).toFixed(2);
console.log(`✓ Generated pristine standalone single-file HTML (${sizeMb} MB) at:`);
console.log(`   - standalone.html`);
console.log(`   - docs/index.html (Ready for GitHub Pages /docs)`);
console.log(`   - dist/standalone.html`);
console.log(`   - public/standalone.html`);
