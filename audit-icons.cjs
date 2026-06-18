const fs = require('fs');
const path = require('path');

// Read all tsx files and extract react-icons imports
const srcDir = path.join(__dirname, 'src');
const issues = [];

function getExports(pkg) {
  try {
    const dtsPath = path.join(__dirname, 'node_modules', 'react-icons', pkg.replace('react-icons/', ''), 'index.d.ts');
    if (!fs.existsSync(dtsPath)) return new Set();
    const content = fs.readFileSync(dtsPath, 'utf-8');
    const exports = new Set();
    const matches = content.matchAll(/export declare const (\w+)/g);
    for (const m of matches) exports.add(m[1]);
    return exports;
  } catch { return new Set(); }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) walk(fullPath);
    else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const importMatches = content.matchAll(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/g);
      for (const m of importMatches) {
        const pkg = m[2];
        if (!pkg.startsWith('react-icons/')) continue;
        const exports = getExports(pkg);
        if (exports.size === 0) {
          issues.push(`${fullPath}: UNKNOWN PACKAGE ${pkg}`);
          continue;
        }
        const names = m[1].split(',').map(n => n.trim()).filter(Boolean);
        for (const name of names) {
          if (!exports.has(name)) {
            issues.push(`${fullPath}: "${name}" NOT in ${pkg}`);
          }
        }
      }
    }
  }
}

walk(srcDir);
if (issues.length === 0) {
  console.log('✅ All react-icons imports are valid!');
} else {
  console.log(`❌ Found ${issues.length} invalid imports:\n`);
  issues.forEach(i => console.log(' -', i));
}
