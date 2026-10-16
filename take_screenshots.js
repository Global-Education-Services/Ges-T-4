const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const viewports = [
  { name: 'desktop-1920', width: 1920, height: 1080 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'tablet-1024', width: 1024, height: 768 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-375', width: 375, height: 667 },
  { name: 'mobile-360', width: 360, height: 740 },
  { name: 'mobile-320', width: 320, height: 568 },
];

const pages = [
  { slug: 'home', url: 'http://localhost:3005/' },
  { slug: 'about', url: 'http://localhost:3005/about' },
  { slug: 'schools', url: 'http://localhost:3005/schools' },
  { slug: 'operational', url: 'http://localhost:3005/operational' },
  { slug: 'partner', url: 'http://localhost:3005/partner' },
  { slug: 'careers', url: 'http://localhost:3005/careers' },
  { slug: 'news', url: 'http://localhost:3005/news' },
  { slug: 'contact', url: 'http://localhost:3005/contact' },
];

console.log('Starting screenshot capture...');
let count = 0;

for (const p of pages) {
  // Capture desktop 1920, desktop 1440, tablet 768, and mobile 390 for each page
  const selectedVps = [
    { name: 'desktop-1920', width: 1920, height: 1080 },
    { name: 'mobile-390', width: 390, height: 844 },
    { name: 'tablet-768', width: 768, height: 1024 }
  ];

  for (const vp of selectedVps) {
    const filename = `${p.slug}-${vp.name}.png`;
    const dest = path.join(outDir, filename);
    const cmd = `"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=${vp.width},${vp.height} --screenshot="${dest}" "${p.url}"`;
    try {
      execSync(cmd, { stdio: 'ignore', timeout: 15000 });
      console.log(`Captured: ${filename}`);
      count++;
    } catch (e) {
      console.error(`Failed ${filename}:`, e.message);
    }
  }
}

// Also test the 320px viewport for Home and Contact to verify strict mobile edge cases
const extraVps = [
  { name: 'mobile-320', width: 320, height: 568 },
  { name: 'mobile-430', width: 430, height: 932 }
];
for (const vp of extraVps) {
  const filename = `home-${vp.name}.png`;
  const dest = path.join(outDir, filename);
  const cmd = `"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=${vp.width},${vp.height} --screenshot="${dest}" "http://localhost:3005/"`;
  try {
    execSync(cmd, { stdio: 'ignore', timeout: 15000 });
    console.log(`Captured: ${filename}`);
    count++;
  } catch (e) {
    console.error(`Failed ${filename}:`, e.message);
  }
}

console.log(`Total screenshots captured: ${count}`);
