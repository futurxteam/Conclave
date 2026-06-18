const fs = require('fs');
const path = require('path');

const files = [
  'src/components/CareerDevelopment.tsx',
  'src/components/Contact.tsx',
  'src/components/EventOverview.tsx',
  'src/components/FAQ.tsx',
  'src/components/Hero.tsx',
  'src/components/Ticket.tsx',
  'src/components/WhyAttend.tsx',
];

for (const relPath of files) {
  const fullPath = path.join(__dirname, relPath);
  let content = fs.readFileSync(fullPath, 'utf-8');

  // Already has hi2 import?
  if (content.includes("'react-icons/hi2'")) {
    // Check if HiSparkles is already in the import
    content = content.replace(
      /import\s*{([^}]*)}\s*from\s*['"]react-icons\/hi2['"]/,
      (match, p1) => {
        if (p1.includes('HiSparkles')) return match; // already there
        const trimmed = p1.trim();
        return `import { ${trimmed ? trimmed + ', ' : ''}HiSparkles } from 'react-icons/hi2'`;
      }
    );
  } else {
    // Add a new hi2 import line after the last existing import line
    content = content.replace(
      /^(import[^\n]+\n)/m,
      `$1import { HiSparkles } from 'react-icons/hi2';\n`
    );
  }

  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log('Fixed:', relPath);
}
