import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public/assets/images');
const RASTER_EXT_RE = /\.(png|jpe?g)$/i;
const cleanOriginals = process.argv.includes('--clean');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (RASTER_EXT_RE.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function formatKB(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function run() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const files = walk(IMAGES_DIR);
  if (files.length === 0) {
    console.log('No PNG/JPG images found to optimize.');
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const filePath of files) {
    const beforeSize = fs.statSync(filePath).size;
    const outPath = filePath.replace(RASTER_EXT_RE, '.webp');

    await sharp(filePath)
      .webp({
        quality: 82,
        alphaQuality: 90,
        effort: 6,
      })
      .toFile(outPath);

    const afterSize = fs.statSync(outPath).size;
    totalBefore += beforeSize;
    totalAfter += afterSize;

    if (cleanOriginals) {
      fs.unlinkSync(filePath);
    }

    const rel = path.relative(process.cwd(), outPath);
    const pct = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(1);
    console.log(`${rel}: ${formatKB(beforeSize)} -> ${formatKB(afterSize)} (-${pct}%)`);
  }

  const totalSaved = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
  console.log(
    `\nOptimized ${files.length} images: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB (-${totalSaved}%)`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
