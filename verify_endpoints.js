const http = require('http');

const endpoints = [
  '/',
  '/about',
  '/schools',
  '/operational',
  '/partner',
  '/careers',
  '/news',
  '/contact',
  '/index.php',
  '/about.php',
  '/schools.php',
  '/operational.php',
  '/partner.php',
  '/careers.php',
  '/news.php',
  '/contact.php'
];

function checkEndpoint(path) {
  return new Promise((resolve) => {
    http.get({
      host: 'localhost',
      port: 3005,
      path: path,
      headers: { 'User-Agent': 'GES-QA-Auditor/1.0' }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({
          path,
          statusCode: res.statusCode,
          location: res.headers.location || null,
          contentLength: body.length
        });
      });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

(async () => {
  console.log('Testing all endpoints on http://localhost:3005 ...');
  let passCount = 0;
  let failCount = 0;

  for (const ep of endpoints) {
    const res = await checkEndpoint(ep);
    if (res.error) {
      console.log(`❌ ${ep} -> ERROR: ${res.error}`);
      failCount++;
    } else if (res.statusCode === 200) {
      console.log(`✅ ${ep} -> 200 OK (${res.contentLength} bytes)`);
      passCount++;
    } else if (res.statusCode === 308 || res.statusCode === 307 || res.statusCode === 301 || res.statusCode === 302) {
      console.log(`✅ ${ep} -> ${res.statusCode} REDIRECT to: ${res.location}`);
      passCount++;
    } else {
      console.log(`⚠️ ${ep} -> Status ${res.statusCode}`);
      failCount++;
    }
  }

  console.log(`\nQA Test Complete. Passed: ${passCount}, Failed: ${failCount}`);
})();
