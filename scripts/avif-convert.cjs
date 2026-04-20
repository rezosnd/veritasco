const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const pub = path.join(process.cwd(), 'public');

// Files to DELETE (unused / redundant)
const toDelete = [
  'placeholder-logo.png',
  'placeholder-logo.svg',
  'placeholder-user.jpg',
  'placeholder.jpg',
  'placeholder.svg',
  'device.gif',          // unused GIF (1.1 MB!)
  'favicon-180x180.png', // replaced by apple-touch-icon.png
  'icon-512.png',        // duplicate of favicon-512x512.png
];

async function run() {
  console.log('\n── Step 1: Delete unused files ──');
  for (const f of toDelete) {
    const p = path.join(pub, f);
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      console.log(`🗑  Deleted: ${f}`);
    } else {
      console.log(`⚠  Not found (skip): ${f}`);
    }
  }

  console.log('\n── Step 2: Convert main images → AVIF ──');

  // logo.png → logo.avif (keep logo.png for favicon fallback)
  await sharp(path.join(pub, 'logo.png'))
    .resize(500, 500)
    .avif({ quality: 75 })
    .toFile(path.join(pub, 'logo.avif'));
  console.log(`✅ logo.avif  (${size('logo.avif')} KB)`);

  // phone.png → phone.avif
  await sharp(path.join(pub, 'phone.png'))
    .resize(500, 500)
    .avif({ quality: 75 })
    .toFile(path.join(pub, 'phone.avif'));
  console.log(`✅ phone.avif  (${size('phone.avif')} KB)`);

  // og.png → og.avif (1200×630 OG standard)
  await sharp(path.join(pub, 'og.png'))
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .avif({ quality: 70 })
    .toFile(path.join(pub, 'og.avif'));
  console.log(`✅ og.avif  (${size('og.avif')} KB)  [OG: 1200×630]`);

  console.log('\n── Step 3: favicon PNGs already optimized – keep as-is for browser compat ──');
  console.log('   (Browsers require PNG/ICO for favicons; AVIF not widely supported for <link rel=icon>)');

  console.log('\n── Final public/ inventory ──');
  fs.readdirSync(pub)
    .filter(f => !f.startsWith('.'))
    .forEach(f => {
      const kb = (fs.statSync(path.join(pub, f)).size / 1024).toFixed(1);
      console.log(`   ${f.padEnd(30)} ${kb} KB`);
    });

  console.log('\n🎉 Done! All images optimized and cleaned up.');
}

function size(filename) {
  return (fs.statSync(path.join(pub, filename)).size / 1024).toFixed(1);
}

run().catch(console.error);
