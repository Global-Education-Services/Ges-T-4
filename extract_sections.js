const fs = require('fs');

const bundle = fs.readFileSync('ges-bundle.js', 'utf8');

// Find sections in bundle
function inspectAround(term, length = 1000) {
  let idx = 0;
  const results = [];
  while ((idx = bundle.indexOf(term, idx)) !== -1) {
    const start = Math.max(0, idx - 200);
    const end = Math.min(bundle.length, idx + length);
    results.push({ index: idx, snippet: bundle.slice(start, end) });
    idx += term.length;
  }
  return results;
}

const terms = [
  'Sheikh Salim',
  'Chairman',
  'ELEVATE',
  'Students',
  'Employees',
  'Al Shomoukh International',
  'Shomoukh for Early Childhood',
  'Reggio Emilia',
  'Operational',
  'Public-Private',
  'Master Franchise',
  'Be a Partner',
  'Application Process',
  'Class of 2024',
  'Sports Day',
  'Airport Heights'
];

const report = {};
terms.forEach(t => {
  report[t] = inspectAround(t, 600);
});

fs.writeFileSync('extracted_sections.json', JSON.stringify(report, null, 2));
console.log('Saved extracted_sections.json');
