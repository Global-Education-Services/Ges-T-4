const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const imgs = JSON.parse(fs.readFileSync('extracted_images.json', 'utf8'));

// Also add documents and banners
const extraFiles = [
  '/assets/downloads/GES Corporate Broucher.pdf',
  '/assets/downloads/awards.pdf',
  '/assets/img/favicon.ico',
  '/assets/img/banner/ges-logo-internal.png',
  '/assets/img/banners/about.svg',
  '/assets/img/banners/schools.svg',
  '/assets/img/banners/operational.svg',
  '/assets/img/banners/partner.svg',
  '/assets/img/banners/careers.svg',
  '/assets/img/banners/contact.svg'
];

const allFiles = Array.from(new Set([...imgs, ...extraFiles]));

function downloadFile(relPath) {
  return new Promise((resolve) => {
    // clean up relPath
    let clean = relPath.startsWith('/') ? relPath.slice(1) : relPath;
    clean = clean.replace(/^\${k}\/?/, '');
    const localPath = path.join('public', clean);
    const dir = path.dirname(localPath);
    fs.mkdirSync(dir, { recursive: true });

    if (fs.existsSync(localPath) && fs.statSync(localPath).size > 0) {
      resolve({ path: relPath, status: 'already_exists' });
      return;
    }

    const encoded = encodeURI('https://ges.om/' + clean);
    const fileStream = fs.createWriteStream(localPath);

    https.get(encoded, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve({ path: relPath, status: 'success' });
        });
      } else {
        fileStream.close();
        if (fs.existsSync(localPath)) fs.unlinkSync(localPath);
        resolve({ path: relPath, status: 'failed_' + res.statusCode });
      }
    }).on('error', (err) => {
      fileStream.close();
      if (fs.existsSync(localPath)) fs.unlinkSync(localPath);
      resolve({ path: relPath, status: 'error_' + err.message });
    });
  });
}

(async () => {
  console.log(`Starting download of ${allFiles.length} assets...`);
  let successCount = 0;
  let failCount = 0;

  // Process in batches of 5
  for (let i = 0; i < allFiles.length; i += 5) {
    const chunk = allFiles.slice(i, i + 5);
    const results = await Promise.all(chunk.map(downloadFile));
    results.forEach(r => {
      if (r.status === 'success' || r.status === 'already_exists') {
        successCount++;
      } else {
        failCount++;
        console.log('Failed:', r.path, r.status);
      }
    });
  }
  console.log(`Finished. Success: ${successCount}, Fail: ${failCount}`);
})();
