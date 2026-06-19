import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INPUT  = join(__dirname, 'public', 'images');
const OUTPUT = join(__dirname, 'public', 'images-compressed');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...await walk(full));
    else if (/\.(jpe?g|png)$/i.test(e.name)) files.push(full);
  }
  return files;
}

const files = await walk(INPUT);
console.log(`Знайдено ${files.length} файлів...\n`);

for (const file of files) {
  const rel = relative(INPUT, file);
  const out = join(OUTPUT, rel);
  await mkdir(dirname(out), { recursive: true });
  await sharp(file)
    .resize({ width: 2400, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  const { size } = await import('fs').then(m => m.promises.stat(out));
  console.log(`✓ ${rel} → ${(size / 1024 / 1024).toFixed(1)} MB`);
}

console.log('\nГотово! Стиснуті файли у public/images-compressed');
