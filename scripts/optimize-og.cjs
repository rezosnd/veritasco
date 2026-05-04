const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimizeOG() {
  const pub = path.join(process.cwd(), 'public');
  const input = path.join(pub, 'og.png');
  const output = path.join(pub, 'og_temp.png');

  if (fs.existsSync(input)) {
    console.log('Optimizing og.png for production (WhatsApp compatible)...');
    await sharp(input)
      .resize(1200, 630, { fit: 'cover' })
      .png({ quality: 60, compressionLevel: 9, palette: true }) // Added palette: true for significant size reduction
      .toFile(output);
    
    fs.unlinkSync(input);
    fs.renameSync(output, input);
    console.log(`✅ og.png optimized! New size: ${(fs.statSync(input).size / 1024).toFixed(1)} KB`);
  } else {
    console.error('❌ og.png not found.');
  }
}

optimizeOG();
