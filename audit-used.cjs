const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const issues = [];

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) { walk(fullPath); continue; }
    if (!fullPath.endsWith('.tsx') && !fullPath.endsWith('.ts')) continue;

    const content = fs.readFileSync(fullPath, 'utf-8');

    // Collect all imported react-icons names
    const imported = new Set();
    for (const m of content.matchAll(/import\s*{([^}]+)}\s*from\s*['"]react-icons\/[^'"]+['"]/g)) {
      for (const name of m[1].split(',').map(n => n.trim()).filter(Boolean)) {
        imported.add(name);
      }
    }

    // Check JSX usages like <FaXxx or <HiXxx or <MdXxx or <IoXxx or <PiXxx
    const used = new Set();
    for (const m of content.matchAll(/<(Fa[A-Z]\w+|Hi[A-Z]\w+|Md[A-Z]\w+|Io[A-Z]\w+|Pi[A-Z]\w+)/g)) {
      used.add(m[1]);
    }

    for (const name of used) {
      if (!imported.has(name)) {
        issues.push(`${path.relative(__dirname, fullPath)}: <${name}> USED but NOT IMPORTED`);
      }
    }
  }
}

walk(srcDir);

if (issues.length === 0) {
  console.log('✅ All used icons are properly imported!');
} else {
  console.log(`❌ Found ${issues.length} used-but-not-imported icons:\n`);
  issues.forEach(i => console.log(' -', i));
}
