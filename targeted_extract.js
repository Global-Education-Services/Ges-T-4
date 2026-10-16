const fs = require('fs');

const bundle = fs.readFileSync('ges-bundle.js', 'utf8');

// Let's extract leadership array
// Find members: Sarah, jinan, Jannat, julanda, Heri, Randa
const leadershipMatch = bundle.match(/\[\{name:"Ms\.\s*Sarah[^\]]+\]/);
if (leadershipMatch) {
  console.log('Leadership match found!');
  fs.writeFileSync('extracted_leadership.json', leadershipMatch[0]);
} else {
  // search around members/Sarah.jpg
  const idx = bundle.indexOf('/assets/img/members/Sarah.jpg');
  console.log('Sarah idx:', idx);
  console.log(bundle.slice(Math.max(0, idx - 400), idx + 1000));
}

// Search for news items
const newsIdx = bundle.indexOf('Partnership Agreement Signed');
console.log('News idx:', newsIdx);
if (newsIdx !== -1) {
  console.log(bundle.slice(Math.max(0, newsIdx - 300), newsIdx + 1500));
}

// Search for stories
const storiesIdx = bundle.indexOf('Ceremony Class of 2024');
console.log('Stories idx:', storiesIdx);
if (storiesIdx !== -1) {
  console.log(bundle.slice(Math.max(0, storiesIdx - 300), storiesIdx + 1500));
}

// Search for schools
const schoolsIdx = bundle.indexOf('Al Shomoukh International Private School (SIPS) is one of Oman');
console.log('Schools idx:', schoolsIdx);
if (schoolsIdx !== -1) {
  console.log(bundle.slice(Math.max(0, schoolsIdx - 300), schoolsIdx + 1500));
}
