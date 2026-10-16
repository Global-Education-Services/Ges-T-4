const fs = require('fs');

const bundle = fs.readFileSync('ges-bundle.js', 'utf8');
console.log('Bundle length:', bundle.length);

// Extract routes
const routeRegex = /path:\s*["']([^"']+)["']/g;
const routes = new Set();
let match;
while ((match = routeRegex.exec(bundle)) !== null) {
  routes.add(match[1]);
}
console.log('Routes found:', Array.from(routes));

// Extract all images
const imgMatches = bundle.match(/(\/?assets\/[a-zA-Z0-9_\-\.\/]+?\.(png|jpg|jpeg|svg|webp|ico|gif))/gi) || [];
const uniqueImgs = Array.from(new Set(imgMatches));
console.log('Total unique images found:', uniqueImgs.length);
fs.writeFileSync('extracted_images.json', JSON.stringify(uniqueImgs, null, 2));

// Test key text segments
const keywords = [
  'Honorable Sheikh Salim',
  'Salim Hamood',
  'Al Shomoukh',
  'ECE Al Qurum',
  'ECE Al Mouj',
  'ELEVATE',
  '5,000',
  '700',
  '100',
  'Airport Heights',
  'Smarter Educational',
  'Master Franchise',
  'Licensed Schools',
  'Public-Private',
  'Class of 2024',
  'Sports Day 2024',
  'Online Application',
  'Resume Review',
  'Quest for Excellence'
];

keywords.forEach(kw => {
  const found = bundle.includes(kw);
  console.log(`${kw}: ${found ? 'FOUND' : 'MISSING'}`);
});
