const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const pub = path.join(process.cwd(), 'public');

async function run() {
  const logo = path.join(pub, 'logo.png');

  // 1. Favicon sizes
  const faviconSizes = [16, 32, 48, 180, 192, 512];
  for (const size of faviconSizes) {
    const out = path.join(pub, `favicon-${size}x${size}.png`);
    await sharp(logo).resize(size, size).png({ quality: 90, compressionLevel: 9 }).toFile(out);
    console.log(`✅ favicon-${size}x${size}.png`);
  }

  // 2. apple-touch-icon (180x180)
  await sharp(logo).resize(180, 180).png({ quality: 90 }).toFile(path.join(pub, 'apple-touch-icon.png'));
  console.log('✅ apple-touch-icon.png');

  // 3. Compress logo.png in-place (keep 500x500)
  const logoTmp = path.join(pub, 'logo-opt.png');
  await sharp(logo).resize(500, 500).png({ quality: 90, compressionLevel: 9 }).toFile(logoTmp);
  fs.renameSync(logoTmp, logo);
  console.log(`✅ logo.png compressed: ${(fs.statSync(logo).size / 1024).toFixed(1)} KB`);

  // 4. Compress phone.png (keep 500x500)
  const phone = path.join(pub, 'phone.png');
  const phoneTmp = path.join(pub, 'phone-opt.png');
  await sharp(phone).resize(500, 500).png({ quality: 85, compressionLevel: 9 }).toFile(phoneTmp);
  fs.renameSync(phoneTmp, phone);
  console.log(`✅ phone.png compressed: ${(fs.statSync(phone).size / 1024).toFixed(1)} KB`);

  // 5. Compress og.png — must be 1200x630 for Open Graph standard
  const og = path.join(pub, 'og.png');
  const ogTmp = path.join(pub, 'og-opt.png');
  await sharp(og).resize(1200, 630, { fit: 'cover', position: 'centre' }).png({ quality: 85, compressionLevel: 9 }).toFile(ogTmp);
  fs.renameSync(ogTmp, og);
  console.log(`✅ og.png → 1200x630, compressed: ${(fs.statSync(og).size / 1024).toFixed(1)} KB`);

  // 6. Splash screen for iOS (2048x2732 would be huge; make a clean 512x512 icon instead)
  await sharp(logo).resize(512, 512).png({ quality: 90 }).toFile(path.join(pub, 'icon-512.png'));
  console.log('✅ icon-512.png (PWA icon)');

  console.log('\n🎉 All images optimized!');
}

run().catch(console.error);
