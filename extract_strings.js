const fs = require('fs');
const bundle = fs.readFileSync('ges-bundle.js', 'utf8');

// Let's find large strings or JSX blocks
// Let's dump all string literals > 20 chars
const strRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`/g;
const strings = new Set();
let match;
while ((match = strRegex.exec(bundle)) !== null) {
  const str = match[1] || match[2] || match[3] || '';
  if (str.length > 25 && !str.includes('M0 0') && !str.includes('data:image') && !str.startsWith('http') && !str.includes('px ')) {
    strings.add(str.trim());
  }
}

fs.writeFileSync('all_strings.txt', Array.from(strings).join('\n---\n'));
console.log('Total extracted content strings:', strings.size);
