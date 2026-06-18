const fs = require('fs');
const path = require('path');

function replaceSparkles(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    if (!content.includes('FaSparkles')) return;

    // 1. Replace usages
    content = content.replace(/FaSparkles/g, 'HiSparkles');

    // Remove HiSparkles from react-icons/fa6
    content = content.replace(/HiSparkles,\s*/g, '');
    content = content.replace(/,\s*HiSparkles/g, '');
    content = content.replace(/{\s*HiSparkles\s*}/g, '{}');
    
    // Remove empty fa6 imports
    content = content.replace(/import\s*{\s*}\s*from\s*['"]react-icons\/fa6['"];?\n?/g, '');

    // Add HiSparkles to react-icons/hi2
    if (content.includes("'react-icons/hi2'")) {
        content = content.replace(/import\s*{([^}]*)}\s*from\s*['"]react-icons\/hi2['"];?/, (match, p1) => {
            if (p1.includes('HiSparkles')) return match;
            const existing = p1.trim();
            return `import { ${existing ? existing + ', ' : ''}HiSparkles } from 'react-icons/hi2';`;
        });
    } else {
        content = content.replace(/^(import.*?\n)/m, `$1import { HiSparkles } from 'react-icons/hi2';\n`);
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed', filePath);
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            replaceSparkles(fullPath);
        }
    }
}

walk(path.join(__dirname, 'src'));
